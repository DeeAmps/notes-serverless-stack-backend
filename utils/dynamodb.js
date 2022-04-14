import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB.DocumentClient()

export default {
    get: (params) => dynamoDB.get(params),
    delete: (params) => dynamoDB.delete(params),
    post: (params) => dynamoDB.put(params),
    update: (params) => dynamoDB.update(params),
    query: (params) => dynamoDB.query(params),
}