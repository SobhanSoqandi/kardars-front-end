import React from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useForm } from "react-hook-form";
import Textarea from "../../components/TextArea";

export default function CompanyRegistration() {
  const inputStyle =
    "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500";
  const labelStyle = "text-sm font-medium text-gray-700";
  const requiredStar = <span className="mr-1 text-red-500">*</span>;
  const { register } = useForm();
  return (
    <div className="shadow shadow-gray-400">
      <div className="font-bold text-2xl"> ثبت‌نام شرکت</div>
      <div>
        <div className="flex justify-center items-center">
          <div
            className="bg-white shadow-lg mx-auto p-8 rounded-lg w-[600px] max-w-4xl text-right dir-rtl"
            dir="rtl"
          >
            <h2 className="mb-8 font-bold text-blue-600 text-xl text-center">
              کاردرس
            </h2>

            <form className="space-y-6">
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Input
                  label="نام شرکت"
                  headerOpt={requiredStar}
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
                  headerOpt={requiredStar}
                  type="email"
                  placeholder="example@company.com"
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
                <Input
                  label="شماره تماس"
                  headerOpt={requiredStar}
                  placeholder="۰۲۱-XXXXXX"
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
              </div>

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Input
                  label="رمز عبور"
                  headerOpt={requiredStar}
                  type="password"
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
                <Input
                  label="تکرار رمز عبور"
                  headerOpt={requiredStar}
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
                    {requiredStar}
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
                    {requiredStar}
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
                  headerOpt={requiredStar}
                  className="bg-white px-2 py-1 border border-gray-200 rounded-sm outline-0"
                />

                <Textarea
                  label="توضیحات شرکت"
                  register={register}
                  registerName="companyDescription"
                  headerOpt={requiredStar}
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
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-2 rounded-md text-white transition"
                >
                  ثبت‌نام شرکت
                </button>
                <button
                  type="button"
                  className="hover:bg-gray-50 px-8 py-2 border border-gray-300 rounded-md"
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
