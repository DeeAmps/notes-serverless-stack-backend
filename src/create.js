import * as uuid from "uuid";
import dynamoDB from "../utils/dynamodb"

export const main = async (event) => {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            userId: "123",
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()
        }, 
    };

    try {
        await dynamoDB.put(params)
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
