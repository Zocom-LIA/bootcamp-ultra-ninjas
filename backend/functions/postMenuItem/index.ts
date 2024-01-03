import { ddb } from '@zocom/services';
import { MenuItem } from '@zocom/interfaces';

exports.handler = async (event, context) => {

    try {

        const menuItem = JSON.parse(event.body);
        await ddb.put({
            Tablename: 'YYGSMenu',
            Item: {
                name: menuItem.name,
                desc: menuItem.desc,
                ingredients: menuItem.ingredients,
                price: menuItem.price
            }
        }).promise();
    }
    catch (error) {


    }
}