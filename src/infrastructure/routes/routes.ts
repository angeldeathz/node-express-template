import express from "express";
import universitiesRoutes from "../rest/universities.routes";

const routes = express.Router();
routes.use(universitiesRoutes);

export default routes;
