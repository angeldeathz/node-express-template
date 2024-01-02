import routes from "./infrastructure/routes/routes";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import errorHandler from "./infrastructure/error/error-handler";

const app = function start() {
  // environments configs
  dotenv.config();

  const app = express();
  const port = process.env.PORT || 3000;

  // body parser
  app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

  // routes configs
  app.use("/", routes);

  //
  app.use(errorHandler);

  // listen app
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

export default app;
