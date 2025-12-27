import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form>
      <Input
        className={"border border-gray-800 rounded-md px-3 py-1"}
        register={register}
        registerName={"email"}
        label={"ایمیل"}
        placeholder={"example@gmail.com"}
      />
      <Input
        register={register}
        className={"border border-gray-800 rounded-md px-3 py-1"}
        registerName={"password"}
        label={"رمز عبور"}
        type="password"
      />
      <Input
        register={register}
        className={"w-6.25 h-6.25"}
        registerName={"remember"}
        type={"checkbox"}
      />
    </form>
  );
}
