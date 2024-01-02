import { Router } from "express";
import { getHello } from "../services/hello.service";

export const helloController = Router();

helloController.get("/hello", (req, res) => {
  const response = getHello();
  res.send(response);
});
