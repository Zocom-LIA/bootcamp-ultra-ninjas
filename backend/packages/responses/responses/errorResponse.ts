export async function errorResponse(statusCode:number, message?:string) {

    const response = {
        statusCode: statusCode,
        message: message
    }

    return response;
}