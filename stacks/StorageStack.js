import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create a HTTP API
    new sst.Table(this, "Notes", {
      fields: {
        userId: sst.TableFieldType.STRING,
        notesId: sst.TableFieldType.STRING
      },
      primaryIndex: { sortKey: "notesId", partitionKey: "userId" }
    });
    

  }
}
