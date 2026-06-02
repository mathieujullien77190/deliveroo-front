import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";
import type { Data } from "../types";

export const useFetchData = () => {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      setIsLoading(true);
      setIsError(null);
      fetchData()
        .then((responseData) => {
          setData(responseData);
        })
        .catch((error) => {
          setIsError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    run();
  }, []);

  return { data, isLoading, isError };
};
