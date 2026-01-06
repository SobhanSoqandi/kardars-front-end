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
    if (isSuccess) {
      console.log(data);
    }
    if (isError) {
      navigate("/login");
    }
  }, [isSuccess, isError, data, navigate]);

  return (
    <div className="space-y-6 container mx-auto px-5 xl:px-20" style={{ direction: "rtl" }}>
      <div className="font-bold text-3xl mb-6">سلام ، {personalInfo.name}</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">

        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h2 className="font-bold text-xl">درخواست‌های ارسالی</h2>
            </div>
            <div className="p-4 overflow-y-auto max-h-[600px]">
              <div className="space-y-4">
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
        </div>

        <div className="space-y-6">

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h2 className="font-bold text-xl">آمار کلی</h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-3 gap-2">
                <Box
                  titr="1"
                  body="درخواست"
                  className="text-center"
                />
                <Box
                  titr="3"
                  body="پذیرفته"
                  className="text-center"
                />
                <Box
                  titr="14"
                  body="پیشنهادی"
                  className="text-center col-span-2"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h2 className="font-bold text-xl">اقدامات سریع</h2>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <button className="btn btn--primary w-full">
                  مشاهده همه موقعیت‌ها
                </button>
                <button className="btn--light">
                  ارسال درخواست جدید
                </button>
                <button className="btn--light">
                  ویرایش پروفایل
                </button>
                <button className="btn--light">
                  تنظیمات
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}