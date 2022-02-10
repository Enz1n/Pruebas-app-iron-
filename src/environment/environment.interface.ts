import { EnvironmentEnum } from "../app/enums";

export interface EnvironmentInterface {
  ENVIRONMENT: EnvironmentEnum;
  DEBUG: boolean;
  COLLECTOR : string;
  EXPRESS_PORT: number;
  DATABASE: {
    MONGO_URI : string;
  };
}
