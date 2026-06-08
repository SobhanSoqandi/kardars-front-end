import React, { useContext } from "react";
import { ModalContext } from "../../../components/Modal";
import useMutationData from "../../../hooks/useMutationData";
import { useForm } from "react-hook-form";
import Textarea from "../../../components/TextArea";

export default function StudentReq({ id }) {
  const modal = useContext(ModalContext);
  const { mutate } = useMutationData(
    `student/advertisements/request/${id}`,
    "post",
    "send-req"
  );
  const onSubmit = (data) => {
    mutate(data);
    modal.setOpen(null);
    reset();
  };
  const { register, reset, handleSubmit } = useForm();
  return (
    <form className="p-6 w-[400px]">
      <Textarea
        className={"p-2 border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"}
        register={register}
        registerName="cover_letter"
        placeholder="متن درخواست خود را بنویسید..."
      />

      <button
        type="button"
        onClick={handleSubmit(onSubmit)}
        className="mt-4 w-full btn btn--primary"
      >
        ارسال
      </button>
    </form>
  );
}
