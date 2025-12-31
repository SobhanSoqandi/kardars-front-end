import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form className="space-y-5">
      <Input
        className={"border border-gray-800 rounded-md px-3 py-1 w-full"}
        register={register}
        registerName={"email"}
        label={"ایمیل"}
        placeholder={"example@gmail.com"}
      />
      <Input
        register={register}
        className={"border border-gray-800 rounded-md px-3 py-1 w-full"}
        registerName={"password"}
        label={"رمز عبور"}
        type="password"
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Input
            register={register}
            className={"w-6.25 h-6.25"}
            registerName={"remember"}
            type={"checkbox"}
          />
          <div className="text-gray-600">مرا به خاطر بسپار</div>
        </div>
        <div className="text-blue-700">فراموشی رمز؟</div>
      </div>
      <div className={"text-white bg-blue-700 " + btnclass}>ورود</div>
      <div className={" border border-gray-500 " + btnclass}>
        ثبت‌نام دانشجو
      </div>
      <div className={"border border-gray-500 " + btnclass}>ثبت‌نام شرکت</div>
    </form>
  );
}

const btnclass = "flex justify-center items-center  p-2 rounded-2xl w-full";
