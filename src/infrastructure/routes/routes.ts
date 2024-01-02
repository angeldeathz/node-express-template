import express from "express";
import { helloController } from "../../application/controllers/hello.controller";

export const routes = express.Router();

routes.use(helloController);
