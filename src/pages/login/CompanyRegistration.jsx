import React, { useEffect } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useForm } from "react-hook-form";
import Textarea from "../../components/TextArea";
import { useMutation } from "@tanstack/react-query";
import useMutationData from "../../hooks/useMutationData";
import { useNavigate } from "react-router-dom";

export default function CompanyRegistration() {
  const inputStyle =
    "bg-gray-100 rounded-xl focus:shadow-md focus:ring-1 focus:ring-blue-500 focus:outline-none focus:bg-white block w-full p-3";
  const labelStyle = "text-sm font-medium text-gray-700";
  const navigate = useNavigate();
  const {
    mutate,
    isSuccess,
    data: info,
  } = useMutationData("auth/register", "post", "register_company");
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    if (isSuccess) {
      console.log(info);
      navigate(`/verify?phone=${JSON.parse(info.config.data).mobile}`);
    }
  }, [isSuccess]);
  return (
    <div className="mx-auto" >
      <div className="pt-10 font-bold text-xl text-center"> ثبت‌ نام شرکت </div>
      <div>
        <div className="flex justify-center items-center">
          <div
            className="bg-white shadow-lg mx-auto p-8 rounded-lg w-[600px] max-w-4xl text-right dir-rtl"
            dir="rtl"
          >
            <h2 className="mx-auto mb-8 w-28 font-bold text-blue-600 text-xl text-center mark logo">
              کاردرس
            </h2>

            <form
              className="space-y-6"
              onSubmit={handleSubmit((data) => {
                mutate({ ...data, role: "company_owner" });
              })}
            >
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Input
                  label=" نام شرکت "
                  placeholder=" نام رسمی "
                  registerName={"company_name"}
                  register={register}
                  className={inputStyle}
                  lableClassName="label--style"
                />
                <Input
                  label=" نام  "
                  placeholder=" نام صاحب شرکت "
                  registerName={"first_name"}
                  register={register}
                  className={inputStyle}
                  lableClassName="label--style"
                />

                <Input
                  label=" نام خانوادگی  "
                  placeholder=" نام خانوادگی    "
                  registerName={"last_name"}
                  register={register}
                  className={inputStyle}
                  lableClassName="label--style"
                />

                <Input
                  label=" شماره تلفن همراه   "
                  placeholder=" 0915 ------     "
                  registerName={"mobile"}
                  register={register}
                  className={inputStyle}
                  lableClassName="label--style"
                />
              </div>

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Input
                  label=" کدملی  "
                  type="number"
                  registerName={"national_code"}
                  register={register}
                  className={inputStyle}
                  lableClassName="label--style"
                />
                {/* <Input
                  label=" تلفن  "
                  placeholder=" تلفن ثابت شرکت "
                  type="email"
                  registerName={"uni"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                /> */}{" "}
                <Input
                  label="شماره ی ثبت شرکت"
                  type="text"
                  registerName={"registration_number"}
                  register={register}
                  className={inputStyle}
                  lableClassName="label--style"
                />
                <Input
                  label="رمز عبور"
                  registerName={"password"}
                  register={register}
                  type="password"
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
                <Input
                  label="تکرار رمز عبور"
                  type="password"
                  registerName={"password_confirmation"}
                  register={register}
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
              </div>

              <div className="gap-4 space-y-5">
                {/* <Textarea
                  label=" درباره شرکت  "
                  type="text"
                  registerName={"about"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                /> */}

                <Textarea
                  label=" آدرس   "
                  type="text"
                  registerName={"address"}
                  register={register}
                  className={inputStyle}
                  lableClassName="label--style"
                />
              </div>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 w-full text-white transition btn"
                >
                  ثبت‌نام شرکت
                </button>
                <button type="button" className="shadow w-full btn">
                  انصراف
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
