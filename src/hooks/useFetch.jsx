import { useEffect, useState } from "react";
import { fetchApi } from "../helpers/fetchApi";

export const useFetch = (endpoint, body, method) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetchApi(endpoint, body, method).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [endpoint, body, method]);

  return { isLoading, data };
};
