import React, { useEffect } from "react";
import Input from "../../components/Input";
import Textarea from "../../components/TextArea";
import { useForm } from "react-hook-form";
import useGet from "../../hooks/useGet";
import useMutationData from "../../hooks/useMutationData";
import { useNavigate } from "react-router-dom";

function EditProfileCompany() {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { data, isSuccess } = useGet("owner_company/profile", "get-profile");

  const { mutate } = useMutationData(
    "owner_company/profile/update",
    "post",
    "update-profile",
  );

  useEffect(() => {
    if (isSuccess && data?.data?.extra_data) {
      reset({
        company_name: data.data.extra_data.company_name,
        first_name: data.data.first_name,
        last_name: data.data.last_name,
        mobile: data.data.mobile,
        national_code: data.data.national_code,
        phone: data.data.extra_data.phone,
        location: data.data.extra_data.location,
        description: data.data.extra_data.description,
        registration_number: data.data.extra_data.registration_number,
      });
    }
  }, [isSuccess, data, reset]);

  const inputStyle =
    "bg-gray-100 rounded-xl focus:shadow-md focus:ring-1 focus:ring-blue-500 focus:outline-none focus:bg-white block w-full p-3";

  const onSubmit = (data) => {
    const fd = new FormData();

    fd.append("company_name", data.company_name);
    fd.append("first_name", data.first_name);
    fd.append("last_name", data.last_name);
    fd.append("mobile", data.mobile);
    fd.append("national_code", data.national_code);
    fd.append("phone", data.phone);
    fd.append("registration_number", data.registration_number);
    fd.append("location", data.location ?? "");
    fd.append("description", data.description ?? "");

    // فایل‌ها
    if (data.avatar?.[0]) {
      fd.append("avatar", data.avatar[0]);
    }

    if (data.logo?.[0]) {
      fd.append("logo", data.logo[0]);
    }

    if (data.banner?.[0]) {
      fd.append("banner", data.banner[0]);
    }

    mutate(fd);
  };

  return (
    <div className="shadow shadow-gray-400">
      <div className="pt-10 font-bold text-xl text-center">
        ویرایش اطلاعات شرکت
      </div>

      <div className="flex justify-center items-center">
        <div
          className="bg-white shadow-lg mx-auto p-8 rounded-lg w-[600px] max-w-4xl text-right"
          dir="rtl"
        >
          <h2 className="mx-auto mb-8 w-28 font-bold text-blue-600 text-xl text-center">
            کاردرس
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <Input
                label="نام شرکت"
                registerName="company_name"
                register={register}
                className={inputStyle}
              />

              <Input
                label="نام"
                registerName="first_name"
                register={register}
                className={inputStyle}
              />

              <Input
                label="نام خانوادگی"
                registerName="last_name"
                register={register}
                className={inputStyle}
              />

              <Input
                label="شماره موبایل"
                registerName="mobile"
                register={register}
                className={inputStyle}
              />

              <Input
                label="کد ملی"
                registerName="national_code"
                register={register}
                className={inputStyle}
              />

              <Input
                label="تلفن شرکت"
                registerName="phone"
                register={register}
                className={inputStyle}
              />

              <Input
                label="شماره ثبت"
                registerName="registration_number"
                register={register}
                className={inputStyle}
              />
            </div>

            <Textarea
              label="درباره شرکت"
              registerName="description"
              register={register}
              className={inputStyle}
            />

            <Textarea
              label="آدرس"
              registerName="location"
              register={register}
              className={inputStyle}
            />

            <Input
              label="آپلود آواتار"
              type="file"
              registerName="avatar"
              register={register}
              className={inputStyle}
            />
            <img
              src={data?.data.avatar}
              className="w-[200px] h-[200px]"
              alt="avatar"
            />
            <Input
              label="آپلود لوگو"
              type="file"
              registerName="logo"
              register={register}
              className={inputStyle}
            />

            <Input
              label="آپلود بنر"
              type="file"
              registerName="banner"
              register={register}
              className={inputStyle}
            />

            <div className="flex justify-center gap-4 mt-8">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 w-full text-white transition btn"
              >
                ذخیره تغییرات
              </button>

              <button
                onClick={() => navigate(-1)}
                type="button"
                className="shadow w-full btn"
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfileCompany;
