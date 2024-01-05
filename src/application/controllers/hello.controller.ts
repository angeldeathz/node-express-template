import { Router } from "express";
import { Request, Response } from "express";
import { getHello } from "../services/hello.service";
import { AppError } from "../../infrastructure/error/app-error";
import { logger } from "../../infrastructure/log/logger";
import runAsync from "../../infrastructure/utils/run-async";

export const helloController = Router();

helloController.get(
  "/hello",
  runAsync(async (req: Request, res: Response) => {
    try {
      logger.info("start controller");
      const response = await getHello();
      res.status(200);
      throw new Error("Name is required!");
      res.send(response);
    } catch (e: any) {
      throw new AppError(400, e.message);
    }
  })
);
