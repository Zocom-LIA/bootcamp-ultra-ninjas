const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');

module.exports.createDdbConnection = async () => {

    const ddb = new DynamoDBClient({});
    return ddb;
}