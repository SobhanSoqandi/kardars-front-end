import React, { useContext, useEffect } from "react";

import { useForm } from "react-hook-form";
import Textarea from "../../../components/TextArea";
import Input from "../../../components/Input";
import useMutationData from "../../../hooks/useMutationData";
import { ModalContext } from "../../../components/Modal";
export default function CreatReq() {
  const { register, reset, handleSubmit } = useForm();
  const { mutate, isSuccess } = useMutationData(
    "owner_company/advertisements",
    "post",
    "creat_req"
  );
  const modal = useContext(ModalContext);
  useEffect(() => {
    if (isSuccess) {
      reset();
      modal.setOpen(null);
    }
  }, [isSuccess]);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        mutate(data);
      })}
      className="space-y-2 p-8 w-[500px]"
    >
      <Input
        label={"عنوان"}
        registerName={"title"}
        register={register}
        lableClassName={"label--style"}
        className={"input--style"}
      />
      <Textarea
        label={"توضیحات"}
        registerName={"description"}
        register={register}
        lableClassName={"label--style"}
        className={"input--style"}
      />
      <Input
        label={"ظرفیت"}
        type={"number"}
        registerName={"capacity"}
        register={register}
        lableClassName={"label--style"}
        className={"input--style"}
      />
      <button type="submit" className="btn btn--primary w-full">
        ایجاد درخواست
      </button>
    </form>
  );
}
