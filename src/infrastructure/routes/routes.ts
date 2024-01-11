import express from "express";
import universitiesRoutes from "../../contexts/universities/infrastructure/routes/universities.routes";

const routes = express.Router();
routes.use(universitiesRoutes);

export default routes;
