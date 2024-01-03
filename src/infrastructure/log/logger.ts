import winston from "winston";
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    json()
  ),
  defaultMeta: { service: "user-service" },
  transports: [new winston.transports.Console()],
});

export default logger;
