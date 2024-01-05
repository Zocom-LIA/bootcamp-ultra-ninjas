import { MenuItem } from "@zocom/interfaces";

async function successResponse(statusCode:number, body: { message:string, content?:MenuItem }) {//TODO: lägg till fler content typer

    const response = {
        statusCode: statusCode,
        body: body
    }

    return JSON.stringify(response);
}

export default successResponse;