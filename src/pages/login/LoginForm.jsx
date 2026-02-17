import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import useMutationData from "../../hooks/useMutationData";
import Select from "../../components/Select";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

export default function LoginForm() {


  const [show, setShow] = useState(false);

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { mutate } = useMutationData("auth/login", "post", "loginToast");
  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit((data) => {
        mutate(data, {
          onSuccess: (response) => {
            console.log(response);
            response.data.data[0].role == "student"
              ? navigate("/student-panel")
              : response.data.data[0].role == "company_owner"
                ? navigate("/company-panel")
                : null;
            localStorage.setItem(
              "personalInfo",
              JSON.stringify(response.data.data?.[0])
            );
            // navigate("/");
          },
        });
      })}
    >
      <Input
        className="input--style"
        register={register}
        registerName={"mobile"}
        label={"موبایل :"}
        placeholder={""}
      />
      <div style={{ position: "relative" }}>

        <Input
          register={register}
          className="input--style"
          registerName={"password"}
          label={"رمز عبور :"}
          type={show ? "text" : "password"}
        />


        <span
          onClick={() => setShow(!show)}
          style={{
            position: "absolute",
            left: "15px",
            top: "68%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            userSelect: "none"
          }}
        >
          {show ? <FaEyeSlash className="text-blue-600" />
            : <FaRegEye className="text-blue-600" />
          }
        </span>
      </div>
      <Select
        register={register}
        name={"role"}
        label={"نقش"}
        opt={["دانشجو", "شرکت", "مدیرگروه"]}
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Input
            className="w-4 h-4"
            type="checkbox"
          // register={register}
          // registerName="remember"
          />
          <span className="text-gray-700 whitespace-nowrap">
            مرا به خاطر بسپار
          </span>
        </div>
        <div className="link--style">فراموشی رمز ؟</div>
      </div>
      <button className="w-full btn btn--primary" type="submit">
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
