import { logger } from "../../infrastructure/log/logger";
import { get } from "../../infrastructure/http/http-client";

const getHello = async () => {
  logger.info("start service");

  const a = await get("https://jsonplaceholder.typicode.com/todos/1");
  logger.info(a.data);
  return {
    message: "Hello World!",
  };
};

export { getHello };
