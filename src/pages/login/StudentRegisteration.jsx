import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Textarea from "../../components/TextArea";
import useMutationData from "../../hooks/useMutationData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentRegisteration() {
  const inputStyle =
    "bg-gray-100 rounded-xl focus:shadow-md focus:ring-1 focus:ring-blue-500 focus:outline-none focus:bg-white block w-full p-3";
  const labelStyle = "text-sm font-medium text-gray-700";
  const { register, handleSubmit } = useForm();
  const { mutate, isSuccess, data } = useMutationData(
    "auth/register",
    "post",
    "reg-toast"
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      navigate(`/verify?phone=${JSON.parse(data.config.data).mobile}`);
    }
  }, [isSuccess]);
  return (
    <div className="shadow shadow-gray-400">
      <div className="pt-10 font-bold text-xl text-center">
        {" "}
        ثبت‌ نام دانشجو{" "}
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

            <form
              className="space-y-6"
              onSubmit={handleSubmit((data) => {
                mutate({ ...data, role: "student" });
              })}
            >
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Input
                  label="نام "
                  placeholder=" "
                  registerName={"first_name"}
                  register={register}
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
                <Input
                  label="نام خانولدگی"
                  placeholder=" "
                  registerName={"last_name"}
                  register={register}
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
              </div>

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Input
                  label="کد ملی"
                  registerName={"national_code"}
                  register={register}
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
                <Input
                  label="شماره تماس"
                  registerName={"mobile"}
                  register={register}
                  placeholder=" ---------- 98+"
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
              </div>

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
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
                <Input
                  label="سال ورود  "
                  type="text"
                  registerName={"year_of_entry"}
                  register={register}
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
                <Input
                  label=" شماره دانشجویی "
                  type="text"
                  registerName={"student_code"}
                  register={register}
                  className={inputStyle}
                  lableClassName={labelStyle}
                />
                <Select
                  width={"100%"}
                  height={"44px"}
                  register={register}
                  opt={[" مهندسی کامپیوتر "]}
                  name={"major"}
                />
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 w-full text-white transition btn"
                >
                  ثبت‌ نام دانشجو
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

export default StudentRegisteration;
