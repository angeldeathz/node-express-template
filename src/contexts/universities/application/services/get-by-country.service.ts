import { get } from "../../../../infrastructure/http/http-client";
import { UNIVERSITIES_API } from "../../../../infrastructure/utils/config";
import { University } from "../../domain/university";

const getByCountry = async (country: string) => {
  const url = `${UNIVERSITIES_API}/search?country=${country}`;
  const { data: universities } = await get<University[]>(url);
  return universities;
};

export { getByCountry };
