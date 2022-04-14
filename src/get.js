import dynamoDB from "../utils/dynamodb"

export const main = async (event) => {
    const params = {
        TableName: process.env.TABLE_NAME,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": "123", 
        },
    };

    try {
        await dynamoDB.query(params)
        return {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
    } catch(e) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: e.message }),
        };
    }
}
