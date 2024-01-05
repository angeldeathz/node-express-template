import axios from "axios";

const get = async <T>(url: string) => {
  return axios.get<T>(url);
};

const post = async <T>(url: string, body?: any) => {
  return axios.post<T>(url, body);
};

export { get, post };
