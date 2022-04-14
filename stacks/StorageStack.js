import * as sst from "@serverless-stack/resources";

export default class StorageStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    this.bucket = new sst.Bucket(this, "Uploads")

    this.table = new sst.Table(this, "Notes", {
      fields: {
        userId: sst.TableFieldType.STRING,
        notesId: sst.TableFieldType.STRING
      },
      primaryIndex: { sortKey: "notesId", partitionKey: "userId" }
    });
    

  }
}
