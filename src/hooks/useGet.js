import { useQuery } from "@tanstack/react-query";

import { useEffect } from "react";
import { api } from "../server/server";
import toast from "react-hot-toast";

export default function useGet(url, queryName, opt = {}) {
  const query = useQuery({
    queryKey: [queryName],
    queryFn: async () => {
      const response = await api.get(`/${url}`);
      return response.data;
    },

    ...opt,
  });

  const { data, isLoading, isSuccess, isError, error } = query;

  useEffect(() => {
    if (isError && error) {
      toast.error(error.response?.data?.message || error.message, {
        toastId: queryName,
      });
      if (opt?.onError) opt.onError(error);
    }
  }, [isError, error, queryName]);

  return { data, isLoading, isSuccess, isError, error };
}
