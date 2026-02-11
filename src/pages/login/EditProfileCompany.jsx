import React, { useEffect } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Textarea from "../../components/TextArea";
import { useForm } from "react-hook-form";
import useGet from "../../hooks/useGet";
import useMutationData from "../../hooks/useMutationData";

function EditProfileCompany() {
  const { register, reset, handleSubmit } = useForm();
  const { data, isSuccess } = useGet("owner_company/profile", "get-profile");
  const { mutate } = useMutationData(
    "owner_company/profile/update",
    "post",
    "update-profile",
  );
  useEffect(() => {
    if (isSuccess)
      reset({
        company_name: data.data.extra_data.company_name,
        last_name: data.data.last_name,
        first_name: data.data.first_name,
        mobile: data.data.mobile,
        national_code: data.data.national_code,
        phone: data.data.extra_data.phone,
        location: data.data.extra_data.location,
        description: data.data.extra_data.description,
        registration_number: data.data.extra_data.registration_number,
      });
  }, [isSuccess, data]);
  const inputStyle =
    "bg-gray-100 rounded-xl focus:shadow-md focus:ring-1 focus:ring-blue-500 focus:outline-none focus:bg-white block w-full p-3";
  return (
    <div className="shadow shadow-gray-400">
      <div className="pt-10 font-bold text-xl text-center">
        ویرایش اطلاعات شرکت{" "}
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div
            className="bg-white shadow-lg mx-auto p-8 rounded-lg w-[600px] max-w-4xl text-right dir-rtl"
            dir="rtl"
          >
            <h2 className="mx-auto mb-8 w-28 font-bold text-blue-600 text-xl text-center logo mark">
              کاردرس
            </h2>

            <form className="space-y-6">
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

                <Input
                  label=" تلفن  "
                  placeholder=" تلفن ثابت شرکت "
                  registerName={"phone"}
                  register={register}
                  className={inputStyle}
                  lableClassName="label--style"
                />

                <Input
                  label="شماره ی ثبت شرکت"
                  type="text"
                  registerName={"registration_number"}
                  register={register}
                  className={inputStyle}
                  lableClassName="label--style"
                />
              </div>

              <div className="gap-4 space-y-5">
                <Textarea
                  label=" درباره شرکت  "
                  type="text"
                  registerName={"description"}
                  register={register}
                  className={inputStyle}
                  lableClassName="label--style"
                />

                <Textarea
                  label=" آدرس"
                  type="text"
                  registerName={"location"}
                  register={register}
                  className={inputStyle}
                  lableClassName="label--style"
                />
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <button
                  type="submit"
                  onClick={handleSubmit((data) => {
                    mutate(data);
                  })}
                  className="bg-blue-500 hover:bg-blue-600 w-full text-white transition btn"
                >
                  ذخیره تغییرات
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

export default EditProfileCompany;
