async function errorResponse(statusCode:number, body: { message?:string }) {

    const response = {
        statusCode: statusCode,
        body: body
    }

    return JSON.stringify(response);
}

export default errorResponse;