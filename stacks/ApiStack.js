import * as sst from "@serverless-stack/resources";

export default class ApiStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const { table } = props

    this.api = new sst.Api(this, "Api", {
     defaultFunctionProps: {
      environment: {
        TABLE_NAME: table.tableName
      }
     },
     routes: {
       "POST /notes": "src/create.main",
       "GET /notes/{id}": "src/getOne.main",
       "GET /notes": "src/get.main"
     }
    });
  
    this.api.attachPermissions([table])

    this.addOutputs({
      ApiEndpoint: this.api.url 
    })
    

  }
}
