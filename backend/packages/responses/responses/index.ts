import { MenuItem } from "@zocom/interfaces";

export async function errorResponse(statusCode:number, body: { message?:string }) {

    const response = {
        statusCode: statusCode,
        body: body
    }

    return JSON.stringify(response);
}

export async function successResponse(statusCode:number, body: { message:string, content?:MenuItem }) {//TODO: lägg till fler content typer

    const response = {
        statusCode: statusCode,
        body: body
    }

    return JSON.stringify(response);
}