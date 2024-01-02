import { Router } from "express";
import { Request, Response } from "express";
import { getHello } from "../services/hello.service";
import { AppError } from "../../infrastructure/error/app-error";

export const helloController = Router();

helloController.get("/hello", (req: Request, res: Response): void => {
  try {
    const response = getHello();
    res.status(200);
    throw new Error("Name is required!");
    res.send(response);
  } catch (e: any) {
    throw new AppError(400, e.message);
  }
});
