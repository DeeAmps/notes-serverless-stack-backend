import dynamoDB from "../utils/dynamodb"

export const main = async (event) => {
    const id = event.pathParameters.id;

    const params = {
        TableName: process.env.TABLE_NAME,
        Key: {
            userId: "123",
            noteId: id
        }
    };

    try {
        await dynamoDB.get(params)
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
