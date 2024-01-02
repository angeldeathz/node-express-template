import { Request, Response } from "express";
import { AppError } from "./app-error";

const errorHandler = async (
  error: AppError,
  request: Request,
  response: Response,
  next: any
) => {
  console.log(`ERROR: ${error.message}`);
  response.statusCode = error.status || 500;
  response.send({
    error: error.message,
  });
};

export default errorHandler;
