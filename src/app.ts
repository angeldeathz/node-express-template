import routes from "./infrastructure/routes/routes";
import express from "express";
import bodyParser from "body-parser";
import errorHandler from "./infrastructure/error/error-handler";
import traceabilityMiddleware from "./infrastructure/middlewares/traceability.middleware";
import { logger } from "./infrastructure/log/logger";
import { ENV, PORT } from "./infrastructure/utils/config";
import { TspecDocsMiddleware } from "tspec";

const initApp = async function start() {
  const app = express();
  const port = PORT || 3000;

  // body parser
  app.use(bodyParser.json({ limit: "5mb", type: "application/json" }));
  app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

  // traceability
  app.use(traceabilityMiddleware);

  // routes configs
  app.use("/", routes);

  // error handler
  app.use(errorHandler);

  // setup swagger
  if (ENV == "development") {
    app.use("/docs", await TspecDocsMiddleware());
  }

  // listen app
  app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
  });
};

export default initApp;
