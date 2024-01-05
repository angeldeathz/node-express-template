import express from "express";
import { helloController } from "../../application/controllers/hello.controller";

const routes = express.Router();
routes.use(helloController);

export default routes;
