import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();


  const navigate = useNavigate();

  return (
    <form className="space-y-5">
      <Input
        className="input--style"
        register={register}
        registerName={"email"}
        label={"ایمیل :"}
        placeholder={"example@gmail.com"}
      />
      <Input
        register={register}
        className="input--style"
        registerName={"password"}
        label={"رمز عبور :"}
        type="password"
      />
      <div className="flex justify-between items-center">
        <div className="flex text-center items-center space-x-2">
          <Input
            register={register}
            className={"w-4 h-4"}
            registerName={"remember"}
            type={"checkbox"}
          />
          <div className="text-gray-700 text-balance pt-2">مرا به خاطر بسپار</div>
        </div>
        <div className="link--style">فراموشی رمز ؟</div>
      </div>
      <div className="btn btn--primary ">ورود</div>
      <div 
      onClick={() => navigate("/studentRegisteration")}
      className="btn border border-blue-200 shadow " >
        ثبت‌نام دانشجو
      </div>
      <div 
      onClick={() => navigate("/CompanyRegistration")}
      className="btn border border-blue-200 shadow " >ثبت‌نام شرکت</div>
    </form>
  );
}

const btnclass = "flex justify-center items-center  p-2 rounded-2xl w-full";
