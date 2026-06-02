import axios from "axios";
import { API_URL } from "../constants";
import type { Data } from "../types";

export const fetchData = async (): Promise<Data> => {
  return axios
    .get(`${API_URL}/data`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};
