import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import useMutationData from "../../hooks/useMutationData";
import Select from "../../components/Select";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { mutate } = useMutationData("auth/login", "post", "loginToast");
  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit((data) => {
        mutate(data, {
          onSuccess: (response) => {
            // Check if response has the expected structure
            if (response?.data?.data && response.data.data.length > 0) {
              const userData = response.data.data[0];
              const role = userData?.role;

              if (role === "student") {
                navigate("/student-panel");
              } else if (role === "company_owner") {
                navigate("/company-panel");
              } else {
                // Handle case where role is not recognized
                console.error("Unexpected role received:", role);
              }

              localStorage.setItem("personalInfo", JSON.stringify(userData));
            } else {
              // Handle unexpected response structure
              console.error("Unexpected response structure:", response);
            }
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
      <Input
        register={register}
        className="input--style"
        registerName={"password"}
        label={"رمز عبور :"}
        type="password"
      />
      <Select
        register={register}
        name={"role"}
        label={"نقش"}
        opt={["student", "company_owner"]}
        errors={errors}
        required={true}
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
