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
                  label="نام شرکت"

                  placeholder="نام رسمی را وارد کنید"
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
                <Input
                  label="نام تجاری"
                  placeholder="برند شما"
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
              </div>

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Input
                  label="ایمیل سازمانی"

                  type="email"
                  placeholder="example@company.com"
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
                <Input
                  label="شماره تماس"

                  placeholder="۰۲۱-XXXXXX"
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
              </div>

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Input
                  label="رمز عبور"

                  type="password"
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
                <Input
                  label="تکرار رمز عبور"

                  type="password"
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
              </div>
              <Input
                label="وب‌سایت شرکت"
                placeholder="https://www.example.com"
                className={inputStyle}
                lableClassName={labelStyle}
              />
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <div className="space-y-1">
                  <div className="flex">
                    <div>صنعت</div>

                  </div>
                  <Select
                    width={"100%"}
                    height={"44px"}
                    register={register}
                    opt={["انتخاب کنید ..."]}
                    name={"caategory"}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex">
                    <div>صنعت</div>

                  </div>
                  <Select
                    width={"100%"}
                    height={"44px"}
                    register={register}
                    opt={["انتخاب کنید ..."]}
                    name={"caategory"}
                  />
                </div>
              </div>
              <div className="space-y-5">
                <Textarea
                  label="آدرس شرکت"
                  register={register}
                  registerName="companyAddress"

                  className="input--style"
                />

                <Textarea
                  label="توضیحات شرکت"
                  register={register}
                  registerName="companyDescription"

                  placeholder="درباره شرکت، حوزه فعالیت و فرصت‌های کارآموزی خود توضیح دهید..."
                  rows={4}
                  className="bg-white px-2 py-1 border border-gray-200 rounded-sm outline-0"
                />

                <Textarea
                  label="مزایای کارآموزی در شرکت شما"
                  register={register}
                  registerName="internshipBenefits"
                  placeholder="مزایایی که برای کارآموزان در نظر گرفته‌اید را توضیح دهید..."
                  rows={3}
                  className="bg-white px-2 py-1 border border-gray-200 rounded-sm outline-0"
                />

                <div className="flex flex-col gap-3 mt-4 text-gray-600 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("acceptTerms")}
                      className="border-gray-300 rounded focus:ring-blue-500 w-4 h-4 text-blue-600"
                    />
                    <span>
                      با{" "}
                      <a href="#" className="text-blue-500">
                        قوانین و مقررات
                      </a>{" "}
                      و{" "}
                      <a href="#" className="text-blue-500">
                        شرایط همکاری
                      </a>{" "}
                      موافقم
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("subscribeNewsletter")}
                      className="border-gray-300 rounded focus:ring-blue-500 w-4 h-4 text-blue-600"
                    />
                    <span>اشتراک در خبرنامه برای دریافت آخرین اطلاعات</span>
                  </label>
                </div>
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
