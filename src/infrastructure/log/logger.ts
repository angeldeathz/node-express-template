import winston from "winston";
import { ENV } from "../utils/config";
const { combine, timestamp, json } = winston.format;

const customFormat = winston.format((info: any) => ({
  environment: ENV,
  ...info,
}));

let logger = winston.createLogger({
  level: "info",
  format: combine(
    customFormat(),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    json()
  ),
  transports: [new winston.transports.Console()],
});

const setGlobalMetadata = (metadata: any) => {
  const childLogger = logger.child(metadata);
  logger = childLogger;
};

export { logger, setGlobalMetadata };
