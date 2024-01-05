import { ddb } from '@zocom/services';
import { MenuItem } from '@zocom/interfaces';
import { successResponse, errorResponse } from '@zocom/responses';

exports.handler = async (event, context) => {

    try {

        const menuItem:MenuItem = JSON.parse(event.body);
        await ddb.put({
            TableName: 'YYGSMenu',
            Item: {
                name: menuItem.name,
                desc: menuItem.desc,
                ingredients: menuItem.ingredients,
                price: menuItem.price
            }
        }).promise();

    return successResponse(200, { message:"Success" });
    }
    catch (error) {

        console.log("blab");
        return errorResponse(error.statusCode, { message:error.message });
    }
}