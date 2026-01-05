import React, { useEffect } from "react";
import Req from "./req";
import useGet from "../../hooks/useGet";
import { useNavigate } from "react-router-dom";

const personalInfo = {
  name: "علی احمدی",
  req: [
    {
      date: "15 دی 1404",
      company: "فناوری برتر",
      status: "در حال بررسی",
      titr: "کارآموزی مهندسی نرم‌افزار در شرکت فناوری برتر",
    },
  ],
};
const info = JSON.parse(localStorage.getItem("personalInfo"));

export default function StudentPanel() {
  const { data, isSuccess, isError } = useGet(
    "student/profile",
    "getStudentInfo"
  );
  const navigate = useNavigate();
  useEffect(() => {
    isSuccess ? console.log(data) : null;
    isError ? navigate("/login") : null;
  }, [isSuccess, isError]);
  return (
    <div className="space-y-4 contain" style={{ direction: "rtl" }}>
      <div className="font-bold text-3xl">سلام ، {info.fullname}</div>
      <div className="flex items-start gap-10 w-full">
        <div className="shadow shadow-gray-400 rounded-2xl w-[65%]">
          <div className="p-4 border-b border-b-gray-400">
            درخواست‌های ارسالی
          </div>
          <div className="flex flex-col justify-center items-center gap-2 p-4">
            {personalInfo.req.map((item) => (
              <Req
                comapany={item.company}
                date={item.date}
                status={item.status}
                titr={item.titr}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
