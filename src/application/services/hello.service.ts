import { logger } from "../../infrastructure/log/logger";

export function getHello() {
  logger.info("start service");
  return {
    message: "Hello World!",
  };
}
