import dotenv from "dotenv";
dotenv.config();

const config = (name: string): string => {
  return process.env[name] as string;
};

const PORT = config("PORT");
const ENV = config("ENV");
const UNIVERSITIES_API = config("UNIVERSITIES_API");

export { PORT, ENV, UNIVERSITIES_API };
