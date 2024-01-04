import axios from "axios";

const get = async (url: string) => {
  return axios.get(url);
};

const post = async (url: string, body?: any) => {
  return axios.post(url, body);
};

export { get, post };
