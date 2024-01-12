import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { db } from "../../services/db";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses";
import { CartItem, Order, MenuItem } from "../../interfaces";
import { v4 } from "uuid";
import * as menuData from "../../../../data/menu.json";

const addToOrder = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const { itemId, category, orderId } = JSON.parse(event.body || "{}");
    //	"itemId": 11,
    // "category": "Dip"
    // "orderId": "3454" (if NEW order, leave out order id)

    let selectedItem: MenuItem | undefined;
    const orderIdOrDefault = orderId || "defaultOrderId";

    if (category === "Dip") {
      selectedItem = menuData.dip.find((item) => item.id === itemId);
    } else if (category === "Wontons") {
      selectedItem = menuData.wontons.find((item) => item.id === itemId);
    }

    if (!selectedItem) {
      return sendError(404, { success: false, message: "Item not found" });
    }

    const newCartItem: CartItem = {
      info: selectedItem,
      totalPrice: selectedItem.price * 1,
      quantity: 1,
    };

    console.log("newCartItem here:", newCartItem);

    const searchParams = {
      TableName: "YYGSOrders",
      Key: { id: orderIdOrDefault },
    };

    const result = await db.get(searchParams).promise();

    if (!result.Item) {
      const newOrder: Order = {
        id: v4(),
        items: [newCartItem],
        totalOrderPrice: newCartItem.totalPrice,
      };

      console.log("newOrder here:", newOrder);

      await db
        .put({
          TableName: "YYGSOrders",
          Item: newOrder,
        })
        .promise();

      return sendResponse(200, {
        success: true,
        message: "Item added to cart",
        body: newOrder,
      });
    }

    if (result.Item.id === orderId) {
      const existingItemIndex = result.Item.items.findIndex((item: CartItem) => item.info.id === itemId);

      if (existingItemIndex !== -1) {
        result.Item.items[existingItemIndex].quantity += 1;
        const itemTotalPrice = result.Item.items[existingItemIndex].info.price;
        const itemQuantity = result.Item.items[existingItemIndex].quantity;

        result.Item.items[existingItemIndex].totalPrice = itemTotalPrice * itemQuantity;
      } else {
        result.Item.items.push(newCartItem);
      }

      result.Item.totalOrderPrice += newCartItem.totalPrice;

      await db
        .put({
          TableName: "YYGSOrders",
          Item: result.Item,
        })
        .promise();
    }

    return sendResponse(200, {
      success: true,
      message: "Cart updated",
      body: result.Item,
    });
  } catch (error) {
    return sendError(500, { success: false, message: "Internal Server Error" });
  }
};

export const handler = middy(addToOrder).handler(addToOrder);
