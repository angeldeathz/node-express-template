import { Router } from "express";
import { Request, Response } from "express";
import { getHello } from "../services/hello.service";

export const helloController = Router();

helloController.get("/hello", (req: Request, res: Response): void => {
  try {
    const response = getHello();
    res.status(200);
    res.send(response);
  } catch (e) {
    throw e;
  }
});
