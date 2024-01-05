import { Router } from "express";
import { Request, Response } from "express";
import { AppError } from "../../../../infrastructure/error/app-error";
import runAsync from "../../../../infrastructure/utils/run-async";
import { getByCountry } from "../services/get-by-country.service";

export const getByCountryController = Router();

getByCountryController.get(
  "/universities",
  runAsync(async (req: Request, res: Response) => {
    try {
      const country = req.query.country as string;
      const response = await getByCountry(country);

      res.status(response.length > 0 ? 200 : 204);
      res.send(response);
    } catch (error: any) {
      throw new AppError(error.message);
    }
  })
);
