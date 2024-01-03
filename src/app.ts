import routes from "./infrastructure/routes/routes";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import errorHandler from "./infrastructure/error/error-handler";
import traceabilityMiddleware from "./infrastructure/middlewares/traceability.middleware";
import logger from "./infrastructure/log/logger";

const app = function start() {
  // environments configs
  dotenv.config();

  const app = express();
  const port = process.env.PORT || 3000;

  // body parser
  app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

  // traceability
  app.use(traceabilityMiddleware);

  // routes configs
  app.use("/", routes);

  // error handler
  app.use(errorHandler);

  // listen app
  app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
  });
};

export default app;
