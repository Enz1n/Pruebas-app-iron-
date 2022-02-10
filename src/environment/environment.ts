import { EnvironmentEnum } from "../app/enums";
import { EnvironmentInterface } from "./environment.interface";

export const environment: EnvironmentInterface = {
  ENVIRONMENT: EnvironmentEnum[process.env.ENVIRONMENT] || EnvironmentEnum.DEVELOPMENT,
  DEBUG: process.env.DEBUG == "true" || false,
  EXPRESS_PORT: parseInt(process.env.EXPRESS_PORT) || 7701,
  COLLECTOR : process.env.COLLECTOR || "LOCALHOST",
  DATABASE: {
    MONGO_URI: process.env.MONGO_URI || "mongodb+srv://pixel-collector-IBM:53HpaUtpH8Jj1afW@cluster0.x9zr5.mongodb.net/ironfunnel?retryWrites=true&w=majority"
  }
};