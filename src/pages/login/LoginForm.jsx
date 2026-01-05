import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import useMutationData from "../../hooks/useMutationData";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { mutate } = useMutationData("auth/login", "post", "loginToast");
  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit((data) => {
        mutate(
          { ...data, role: "student" },
          {
            onSuccess: (response) => {
              console.log(response);
              localStorage.setItem(
                "personalInfo",
                JSON.stringify(response.data?.[0])
              );
              navigate("/");
            },
          }
        );
      })}
    >
      <Input
        className="input--style"
        register={register}
        registerName={"mobile"}
        label={"موبایل :"}
        placeholder={""}
      />
      <Input
        register={register}
        className="input--style"
        registerName={"password"}
        label={"رمز عبور :"}
        type="password"
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 text-center">
          <Input
            // register={register}
            className={"w-4 h-4"}
            //registerName={"remember"}
            type={"checkbox"}
          />
          <div className="pt-2 text-gray-700 text-balance">
            مرا به خاطر بسپار
          </div>
        </div>
        <div className="link--style">فراموشی رمز ؟</div>
      </div>
      <button className="btn btn--primary" type="submit">
        ورود
      </button>
      <div
        onClick={() => navigate("/studentRegisteration")}
        className="shadow border border-blue-200 btn"
      >
        ثبت‌نام دانشجو
      </div>
      <div
        onClick={() => navigate("/CompanyRegistration")}
        className="shadow border border-blue-200 btn"
      >
        ثبت‌نام شرکت
      </div>
    </form>
  );
}
