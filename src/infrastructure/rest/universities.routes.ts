import express from "express";
import { getByCountryController } from "./get-by-country.controller";

const universitiesRoutes = express.Router();
universitiesRoutes.use(getByCountryController);

export default universitiesRoutes;
