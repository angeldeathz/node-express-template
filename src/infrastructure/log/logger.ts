import winston from "winston";
const { combine, timestamp, json } = winston.format;

let logger = winston.createLogger({
  level: "info",
  format: combine(
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
