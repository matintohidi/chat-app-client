import { resolve } from "path";

import { generateApi } from "swagger-typescript-api";

const output = resolve(process.cwd(), "./src/lib");

generateApi({
  output,
  fileName: "services.ts",
  url: "http://localhost:1337/docs/swagger.json",
  httpClientType: "axios",
  sortTypes: true,
  sortRoutes: true,
  disableProxy: true,
  moduleNameFirstTag: true,
});
