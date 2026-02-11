import { useQuery } from "@tanstack/react-query";
import { api } from "../server/server";
import toast from "react-hot-toast";

export default function useGet(url, queryKey, options = {}) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const { data } = await api.get(`/${url}`);
      return data;
    },
    staleTime: 0,
    onError: (error) => {
      toast.error(error?.response?.data?.message || error.message);
      options?.onError?.(error);
    },
    onSuccess: (data) => {
      options?.onSuccess?.(data);
    },
    ...options,
  });
}
