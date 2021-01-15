import { merge } from "lodash";
import { devEnv } from "./dev";
import { prodEnv } from "./prod";
import { testEnv } from "./testing";
const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  port: 3000,
};

let envConfig = {};

switch (env) {
  case "dev":
  case "development":
    envConfig = devEnv;
    break;
  case "test":
  case "testing":
    envConfig = testEnv;
  default:
    envConfig = prodEnv;
    break;
}

export default merge(baseConfig, envConfig);
