import React, { useEffect } from "react";
import Req from "./req";

import useGet from "../../hooks/useGet";
import { useNavigate } from "react-router-dom";

import RequestStudent from "./RequestStudent";
import Box from "../companyPenel/component/Box";
import ContentPanel from "../../components/ContentPanel";


const personalInfo = {
  name: "علی احمدی",
  req: [
    {
      date: "15 دی 1404",
      company: "فناوری برتر",
      status: 0,
      titr: "کارآموزی مهندسی نرم‌افزار در شرکت فناوری برتر",
    },
    {
      date: "11 دی 1404",
      company: " داده نگار افرا ",
      status: 1,
      titr: "کارآموزی مهندسی کاکپیوتر در شرکت  داده نگار افرا",
    },
    {
      date: "11 دی 1404",
      company: " داده نگار افرا ",
      status: 2,
      titr: "کارآموزی مهندسی کاکپیوتر در شرکت  داده نگار افرا",
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

    <div className="space-y-4 container mx-auto lg:px-20" style={{ direction: "rtl" }}>
      <div className="font-bold text-2xl">سلام ، {personalInfo.name}</div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 xl:gap-10">

        {/* 1 */}
        <div className="shadow-lg shadow-gray-200 border border-gray-200 rounded-2xl xl:col-span-2 mx-5 xl:mx-0 ">
          <div className="p-4 font-bold text-lg xl:text-xl bg-gray-100 border rounded-t-2xl border-gray-200">

            درخواست‌های ارسالی
          </div>
          <div className="flex-1 overflow-y-auto max-h-[500px] p-4">
            <div className="space-y-2">
              {personalInfo.req.map((item, index) => (
                <RequestStudent
                  key={index}
                  comapany={item.company}
                  date={item.date}
                  status={item.status}
                  titr={item.titr}
                />
              ))}
            </div>
          </div>

        </div>


        {/* 2 */}
        <div className=" flex flex-col col-span-1 justify-center gap-5 p-3 h-[600px]" >


          <ContentPanel
            label="آمار کلی"
          >
            <div className="flex  justify-center items-center gap-2 p-4" >
              <Box width="200px" titr="1" body={" درخواست "} />
              <Box width="200px" titr="3 " body={" پذیرفته "} />
              <Box width="200px" titr="14 " body={" پیشنهادی "} />
            </div>
          </ContentPanel>

        

          <ContentPanel
            label=" اقدامات سریع "
          >
            <div className="flex flex-col  gap-2 p-4" >
              <div className="btn border border-blue-200 shadow bg-blue-600 text-white p-5 ">
                مشاهده همه موقعیت ها
              </div>
              <div className="btn border border-blue-200 shadow ">
                ارسال درخواست جدید
              </div>

              <div className="btn border border-blue-200 shadow ">
                ویرایش پروفایل
              </div>

              <div className="btn border border-blue-200 shadow ">
                تنظیمات
              </div>
            </div>

          </ContentPanel>

        </div>

      </div>
    </div>
  );
}
