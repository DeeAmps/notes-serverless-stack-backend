import ApiStack from "./ApiStack";
import StorageStack from "./StorageStack";

export default function main(app) {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x"
  });

  const storageStack = new StorageStack(app, "storage");

  new ApiStack(app, "Api", {
    table: storageStack.table
  })

  // Add more stacks
}
