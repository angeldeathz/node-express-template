import express from "express";
import { getByCountryController } from "../../contexts/universities/application/controllers/get-by-country.controller";

const routes = express.Router();
routes.use(getByCountryController);

export default routes;
