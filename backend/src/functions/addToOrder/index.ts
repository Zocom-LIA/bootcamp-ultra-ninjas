import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { db } from "../../services/db";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses";
import { CartItem, Order, MenuItem } from "../../interfaces";
import { v4 } from "uuid";
import * as menuData from "../../../../data/menu.json";

/*
PROBLEM:
- Kan inte lägga till en order till nuvarande order, den skapar en helt ny order
FE SIDOR:
- menu__item <--- order skapas härfrån FE
- order page
*/

const addToOrder = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(event.body || "{}");
  const orderId = event.pathParameters?.orderId;

  const id = Array.isArray(body) ? body[0]?.id : body.id;
  const itemBody = Array.isArray(body) ? body[0] : body;

  const category = id >= 6 ? "dip" : "wontons";
  let selectedItem = menuData[category].find((item) => item.id === id);
  console.log("category", category);
  console.log("selectedItem", selectedItem);

  const newCartItem: CartItem = {
    info: itemBody,
    totalPrice: selectedItem.price * 1,
    quantity: 1,
  };

  try {
    if (!selectedItem) {
      return sendError(404, { success: false, message: "SELECTEDITEM not found" });
    }

    if (!orderId) {
      // If the order with the provided orderId doesn't exist, create a new order

      const newOrder: Order = {
        id: v4(),
        items: [newCartItem],
        totalOrderPrice: newCartItem.totalPrice,
      };

      console.log("hello3 + newOrder", newOrder);

      await db
        .put({
          TableName: "YYGSOrders",
          Item: newOrder,
        })
        .promise();

      return sendResponse(200, {
        success: true,
        message: "Item added to cart",
        body: { orderId: newOrder.id, order: newOrder },
      });
    }

    // If orderId is provided, directly retrieve the order

    console.log("Hello1");
    const searchParams = {
      TableName: "YYGSOrders",
      Key: { id: orderId },
    };

    console.log("HEYY here is the orderid", orderId, typeof orderId);

    const result = await db.get(searchParams).promise();
    console.log("hello2 + result:", result);

    if (result.Item) {
      // If the order with the provided orderId exists, update it
      console.log("hello2.55555", result.Item, "then", result.Item.Items);

      // Ensure result.Item.items is always initialized as an array
      result.Item.items = Array.isArray(result.Item.items) ? result.Item.items : [];

      const existingItemIndex = result.Item.items.findIndex((item: CartItem) => item.info.id === id);

      if (existingItemIndex !== -1) {
        // The item exists in the cart, update it
        result.Item.items[existingItemIndex].quantity += 1;
        const itemTotalPrice = result.Item.items[existingItemIndex].info.price;
        const itemQuantity = result.Item.items[existingItemIndex].quantity;

        result.Item.items[existingItemIndex].totalPrice = itemTotalPrice * itemQuantity;
      } else {
        result.Item.items = Array.isArray(result.Item.items) ? result.Item.items : [];
        result.Item.items.push(newCartItem);
      }

      result.Item.totalOrderPrice += newCartItem.totalPrice;
      console.log("gott 2 b", result.Item);

      await db
        .put({
          TableName: "YYGSOrders",
          Item: result.Item,
        })
        .promise();
    } else {
      console.log("error3");
    }

    return sendResponse(200, {
      success: true,
      message: "Cart updated",
      body: { message: "add somethng here" },
    });
  } catch (error) {
    console.error("Error adding to order:", error);
    return sendError(500, { success: false, message: "Internal Server Error" });
  }
};

export const handler = middy(addToOrder).handler(addToOrder);
