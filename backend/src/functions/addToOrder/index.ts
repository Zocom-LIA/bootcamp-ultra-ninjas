import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { db } from "../../services/db";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses";
import { CartItem, Order } from "../../interfaces";
import { v4 } from "uuid";
import * as menuData from "../../../../data/menu.json";

/* 
Body example:
{
	"id": 4,
    "category": "Wontons"
}
*/

const addToOrder = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || "{}");
    const orderId = event.pathParameters?.orderId;

    const id = Array.isArray(body) ? body[0]?.id : body.id;
    const itemBody = Array.isArray(body) ? body[0] : body;

    const category = id >= 6 ? "dip" : "wontons";
    let selectedItem = menuData[category].find((item) => item.id === id);

    if (!selectedItem) {
      return sendError(404, { success: false, message: "Selected item not found" });
    }

    const newCartItem: CartItem = {
      info: selectedItem,
      totalPrice: selectedItem.price * 1,
      quantity: 1,
    };

    if (!orderId) {
      const newOrder: Order = {
        id: v4(),
        items: [newCartItem],
        totalOrderPrice: newCartItem.totalPrice,
      };

      await db.put({ TableName: "YYGSOrders", Item: newOrder }).promise();

      return sendResponse(200, {
        success: true,
        message: "Item added to cart",
        body: { orderId: newOrder.id, order: newOrder },
      });
    }

    const searchParams = { TableName: "YYGSOrders", Key: { id: orderId } };
    const result = await db.get(searchParams).promise();

    if (result.Item) {
      const itemToUpdateIndex = result.Item.items.findIndex((item: CartItem) => item.info.id === id);

      if (itemToUpdateIndex !== -1) {
        const itemToUpdate = result.Item.items[itemToUpdateIndex];
        itemToUpdate.quantity += 1;
        itemToUpdate.totalPrice = itemToUpdate.quantity * itemToUpdate.info.price;

        result.Item.totalOrderPrice = result.Item.items.reduce((total: number, item: CartItem) => total + item.totalPrice, 0);

        await db.put({ TableName: "YYGSOrders", Item: result.Item }).promise();

        return sendResponse(200, {
          success: true,
          message: "Item updated in cart",
          body: result,
        });
      }

      result.Item.items.push(newCartItem);

      result.Item.totalOrderPrice = result.Item.items.reduce((total: number, item: CartItem) => total + item.totalPrice, 0);

      await db.put({ TableName: "YYGSOrders", Item: result.Item }).promise();

      return sendResponse(200, {
        success: true,
        message: "Item added to cart",
        body: result,
      });
    } else {
      console.log("Order not found");
    }

    return sendResponse(200, {
      success: true,
      message: "Cart updated",
      body: result,
    });
  } catch (error) {
    console.error("Error adding to order:", error);
    return sendError(500, { success: false, message: "Internal Server Error" });
  }
};

export const handler = middy(addToOrder).handler(addToOrder);
