import axios from "axios";

const get = async <T>(baseUrl: string, url?: string) => {
  return axios<T>({
    baseURL: baseUrl,
    url,
    method: "GET",
    validateStatus: () => true,
  }).then((response) => {
    return {
      data: response.data,
      status: response.status,
    };
  });
};

const post = async <T>(
  baseUrl: string,
  url: string,
  data?: any,
  headers?: any
) => {
  return axios<T>({
    baseURL: baseUrl,
    url,
    data,
    headers: headers,
    method: "POST",
    validateStatus: () => true,
  }).then((response) => {
    return {
      data: response.data,
      status: response.status,
    };
  });
};

export { get, post };
