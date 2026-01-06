import React from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useForm } from "react-hook-form";
import Textarea from "../../components/TextArea";

export default function CompanyRegistration() {
  const inputStyle =
    "bg-gray-100 rounded-xl focus:shadow-md focus:ring-1 focus:ring-blue-500 focus:outline-none focus:bg-white block w-full p-3";
  const labelStyle = "text-sm font-medium text-gray-700";

  const { register } = useForm();
  return (
    <div>
      <div className="font-bold text-xl text-center pt-10"> ثبت‌ نام شرکت </div>
      <div>
        <div className="flex justify-center items-center">
          <div
            className="bg-white shadow-lg mx-auto p-8 rounded-lg w-[600px] max-w-4xl text-right dir-rtl"
            dir="rtl"
          >
            <h2 className="mark logo mb-8 w-28 mx-auto font-bold text-blue-600 text-xl text-center">
              کاردرس
            </h2>

            <form className="space-y-6">

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Input
                  value="sss"
                  label=" نام شرکت "
                  placeholder=" نام رسمی "
                  registerName={"first_name"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />
                <Input
                  label=" نام  "
                  placeholder=" نام صاحب شرکت "
                  registerName={"last_name"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />

                <Input
                  label=" نام خانوادگی  "
                  placeholder=" نام خانوادگی    "
                  registerName={"last_name"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />

                <Input
                  label=" شماره تلفن همراه   "
                  placeholder=" 0915 ------     "
                  registerName={"last_name"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />
              </div>



              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">

                <Input
                  label=" کدملی  "
                  type="number"
                  registerName={"student_code"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />


                <Input
                  label=" تلفن  "
                  placeholder=" تلفن ثابت شرکت "
                  type="email"
                  registerName={"uni"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />

                <Input
                  label=" رشته   "
                  type="text"
                  registerName={"uni"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />


              </div>

              <div className="gap-4 space-y-5" >
                <Textarea
                  label=" درباره شرکت  "
                  type="text"
                  registerName={"about"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />

                <Textarea
                  label=" آدرس   "
                  type="text"
                  registerName={"about"}
                  register={register}
                  className="input--style h-14"
                  lableClassName="label--style"
                />



              </div>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  type="submit"
                  className="btn bg-blue-500 hover:bg-blue-600 text-white transition w-full"
                >
                  ثبت‌نام شرکت
                </button>
                <button
                  type="button"
                  className="btn shadow w-full"
                >
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
