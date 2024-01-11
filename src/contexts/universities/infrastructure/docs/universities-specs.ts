import { Tspec } from "tspec";
import { University } from "../../domain/university";

export type UniversityApiSpec = Tspec.DefineApiSpec<{
  paths: {
    "/universities?country={country}": {
      get: {
        summary: "Get universities by country";
        query: { country: string };
        responses: { 200: University[] };
      };
    };
  };
}>;
