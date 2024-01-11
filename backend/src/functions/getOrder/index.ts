import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { db } from "../../services/db";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses";
import * as menuData from "../../../../data/menu.json";
import { CartItem, Order, MenuItem } from "../../interfaces";

const getOrder = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    // Add code here
    const id = event.pathParameters?.orderId;

    const result = await db.get({
      TableName: 'YYGSOrders',
      Key: {
        id: id
      },
    })
    .promise();

    console.log(result, result.Item);

    if (!result.Item) {
      return sendError(404, { success: false, message: "Order not found"});
    }

    return sendResponse(200, {
      success: true,
      message: 'Order found',
      body: { order: result.Item}
    });

  } catch (error) {
    console.error("Error getting user:", error);

    return sendError(500, { success: false, message: "Internal Server Error" });
  }
};

export const handler = middy(getOrder).handler(getOrder);
