import { MenuItem } from "@zocom/interfaces";

async function successResponse(statusCode:number, body:Array<MenuItem>, message?:string) {

    const response = {
        statusCode: statusCode,
        body: body,
        message: message
    }

    return response;
}

export default successResponse;