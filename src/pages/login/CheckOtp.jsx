import React, { useEffect, useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { LuSquareArrowRight } from "react-icons/lu";
import ToPersianNumber from "../../utils/ToPersianNumber";
import OTPInput from "react-otp-input";
import { useNavigate, useSearchParams } from "react-router-dom";
import useMutationData from "../../hooks/useMutationData";

function CheckOtp({ onBack }) {
  const [searchParams] = useSearchParams();
  const phone = searchParams.get("phone");
  const [time, setTime] = useState(50);

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);
  const navigate = useNavigate();
  const [otp, setOtp] = useState(0);
  const { mutate, isSuccess } = useMutationData("auth/verify", "post");

  return (
    <div>
      <div className="flex justify-center items-center mx-auto lg:mt-20 px-4 w-96">
        <div className="p-8 rounded-xl">
          <div className="relative flex justify-center items-center text-center">
            <button
              onClick={onBack}
              className="right-0 absolute text-gray-500 text-2xl cursor-pointer"
            >
              <LuSquareArrowRight />
            </button>
            <a className="text-blue-600 text-2xl logo"> کاردرس </a>
          </div>
          <div className="flex py-10">
            <p className="text-gray-500">
              {" "}
              کد تایید به شماره {phone} ارسال شد{" "}
            </p>
            <button
              onClick={onBack}
              className="px-2 text-blue-600 cursor-pointer"
            >
              <FaRegPenToSquare />
            </button>
          </div>

          <form
          // onSubmit={checkOtpHandler}
          >
            <p className="font-bold text-secondary-800">
              {" "}
              کد تایید را وارد کنید :
            </p>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span> </span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="focus:shadow-blue-500/50 focus:shadow-lg my-5 border-[0.5px] border-blue-500 focus:border-blue-600 outline-none transition-all duration-300"
                />
              )}
              shouldAutoFocus
              containerStyle="flex flex-row-reverse gap-x-1  justify-center"
              inputStyle={{
                color: "blue",
                width: "3.2rem",
                height: "3.5rem",
                padding: "0.5rem 0.2rem",
                borderRadius: "1rem",
              }}
            />

            {time <= 0 ? (
              <div className="py-5 text-gray-600 text-sm text-center">
                <p className="text-blue-700 cursor-pointer">
                  {" "}
                  دریافت مجدد کد تایید{" "}
                </p>
              </div>
            ) : (
              <div className="py-5 text-gray-600 text-sm text-center">
                <p className="text-blue-700 cursor-pointer">
                  {time} ثانیه تا ارسال مجدد کد
                </p>
              </div>
            )}

            <button
              onClick={(e) => {
                e.preventDefault();
                mutate(
                  { mobile: phone, otp_code: otp },
                  {
                    onSuccess: (response) => {
                      const newData = response?.data.data[0];
                      localStorage.setItem(
                        "personalInfo",
                        JSON.stringify(newData),
                      );
                      const role = newData?.role;

                      if (role === "student") {
                        navigate("/student-panel");
                      } else if (role === "company_owner") {
                        navigate("/company-panel");
                      } else {
                        // Handle case where role is not recognized
                        console.error("Unexpected role received:", role);
                      }
                    },
                  },
                );
              }}
              className="w-full btn btn--primary"
            >
              {" "}
              تایید و ورود{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOtp;
