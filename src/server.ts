import initApp from "./app";
import { logger } from "./infrastructure/log/logger";

try {
  initApp();
} catch (e) {
  logger.info(e);
  process.exit(1);
}

process.on("uncaughtException", (err) => {
  logger.info("uncaughtException", err);
  process.exit(1);
});
