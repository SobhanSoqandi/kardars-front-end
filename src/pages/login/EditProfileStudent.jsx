import React, { useEffect } from "react";
import Select from "../../components/Select";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Textarea from "../../components/TextArea";
import useGet from "../../hooks/useGet";
import useMutationData from "../../hooks/useMutationData";
import { useNavigate } from "react-router-dom";

function EditProfileStudent() {
  //   const personalinfo = [
  //     {
  //       name: " سبحان ",
  //       lastname: " سوقندی ",
  //       phone: " 09941196617 ",
  //       nationacode: " 1051161050 ",
  //       unicode: " 40233125 ",
  //       year: " 1403 ",
  //       univer: " آزاد ",
  //     },
  //   ];
  const { data, isSuccess } = useGet("student/profile", "student-profile");
  const { mutate } = useMutationData(
    "student/profile/update",
    "post",
    "update-personal-info"
  );
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    if (isSuccess) {
      reset({
        first_name: data.data.first_name,
        last_name: data.data.last_name,
        mobile: data.data.mobile,
        national_code: data.data.national_code,
        student_code: data.data.extra_data?.student_number,
        year_of_entry: data.data.extra_data?.entry_year,
        major: data.data.extra_data?.major,
        bio: data.data.extra_data?.bio,
      });
    }
  }, [isSuccess, data]);
  return (
    <div className="shadow shadow-gray-400">
      <div className="pt-10 font-bold text-xl text-center">ویرایش پروفایل </div>
      <div>
        <div className="flex justify-center items-center">
          <div
            className="bg-white shadow-lg mx-auto p-8 rounded-lg w-[600px] max-w-4xl text-right dir-rtl"
            dir="rtl"
          >
            <h2 className="mx-auto mb-8 w-28 font-bold text-blue-600 text-xl text-center logo mark">
              کاردرس
            </h2>

            <form
              onSubmit={handleSubmit((data) => {
                // // mutate(data);
                // console.log({ ...data, avatar: data.avatar[0] });
                const fd = new FormData();
                fd.append("first_name", data.first_name);
                fd.append("last_name", data.last_name);
                fd.append("mobile", data.mobile);
                fd.append("national_code", data.national_code);
                if (data.entry_year) {
                  fd.append("year_of_entry", Number(data.entry_year));
                }
                fd.append("student_code", data.student_code);
                fd.append("major", data.major ?? "");
                fd.append("bio", data.bio ?? "");
                if (data.avatar && data.avatar.length > 0) {
                  fd.append("avatar", data.avatar[0]);
                }
                mutate(fd);
              })}
              className="space-y-6"
            >
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Input
                  label="نام "
                  placeholder=" "
                  registerName={"first_name"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />
                <Input
                  label="نام خانولدگی"
                  placeholder=" "
                  registerName={"last_name"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />
              </div>

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Input
                  label="کد ملی"
                  registerName={"national_code"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />
                <Input
                  label="شماره تماس"
                  registerName={"mobile"}
                  register={register}
                  placeholder=" ---------- 98+"
                  className="input--style"
                  lableClassName="label--style"
                />
              </div>

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Input
                  label="سال ورود  "
                  type="text"
                  registerName={"year_of_entry"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />
                <Input
                  label=" شماره دانشجویی "
                  type="text"
                  registerName={"student_code"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />

                {/* <Input
                  label=" دانشگاه  "
                  type="text"
                  registerName={"uni"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                /> */}

                <Select
                  width={"100%"}
                  height={"44px"}
                  register={register}
                  opt={["مهندسی کامپیوتر"]}
                  name={"major"}
                />
              </div>

              <div className="gap-4 space-y-5">
                <Textarea
                  label=" درباره من  "
                  type="text"
                  registerName={"bio"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                />

                {/* <Input
                  label=" مهارت ها   "
                  type="text"
                  registerName={"skill"}
                  register={register}
                  className="input--style"
                  lableClassName="label--style"
                /> */}

                <Input
                  label="آپلود فایل"
                  type="file"
                  registerName="avatar"
                  register={register}
                  className="input-file--style"
                  lableClassName="label--style"
                />
              </div>

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
    </div>
  );
}

export default EditProfileStudent;
