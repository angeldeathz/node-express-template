import { Request, Response } from "express";

const errorHandler = async (
  error: any,
  request: Request,
  response: Response,
  next: any
) => {
  console.log(`error ${error.message}`);
  const status = error.status || 500;
  response.status(status).send(error.message);
};

export default errorHandler;
