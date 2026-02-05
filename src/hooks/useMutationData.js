import { useMutation } from "@tanstack/react-query";

import { api } from "../server/server";
import toast from "react-hot-toast";

export default function useMutationData(url, method, toastId, opt = {}) {
  const { mutate, isPending, data, isSuccess, isError, error } = useMutation({
    mutationFn: async (info) => {
      const response = await api[method.toLowerCase()](`/${url}`, info);
      return response;
    },
    onSuccess: (responseData) => {
      toast.success("عملیات با موفقیت انجام شد", { id: toastId });
      if (opt?.onSuccess) opt.onSuccess(responseData);
    },
    onError: (error) => {
      console.error("Server Validation Error:", error.response?.data);
      const errMsg = error.response?.data?.message || error.message;
      toast.error(errMsg, { id: toastId });

      if (opt?.onError) {
        opt.onError(error);
      }
    },
    ...opt,
  });

  return { mutate, isPending, isSuccess, data, isError, error };
}
