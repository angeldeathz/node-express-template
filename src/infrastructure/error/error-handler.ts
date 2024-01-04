import { Request, Response } from "express";
import { AppError } from "./app-error";
import { logger } from "../log/logger";

const errorHandler = async (
  error: AppError,
  request: Request,
  response: Response,
  next: any
) => {
  logger.info(error.message);
  response.statusCode = error.status || 500;
  response.send({
    error: error.message,
  });
  next();
};

export default errorHandler;
