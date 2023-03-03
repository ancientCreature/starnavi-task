import { useEffect, useState } from "react";
import axios from "axios";
import { IState } from "./types";
import { URL } from "../config";

export const useQuery = <TData>(): IState<TData> => {
  const [queryState, setQueryState] = useState<IState<TData>>({
    data: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchApi = async (): Promise<void> => {
      try {
        const { data } = await axios.get<TData>(URL);
        setQueryState({
          data: data,
          loading: false,
          error: false,
        });
      } catch (err) {
        setQueryState({
          data: null,
          loading: false,
          error: true,
        });
      }
    };

    fetchApi();
  }, []);

  return queryState;
};
