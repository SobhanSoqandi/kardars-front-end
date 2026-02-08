import React, { useEffect } from "react";
import Req from "./req";
import useGet from "../../hooks/useGet";
import { useNavigate } from "react-router-dom";
import RequestStudent from "./RequestStudent";
import Box from "../companyPenel/component/Box";
import ContentPanel from "../../components/ContentPanel";
import Loading from "../../components/Loading";

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

export default function StudentPanel() {
  const { data, isSuccess, isError } = useGet(
    "student/profile",
    "getStudentData"
  );
  const { data: request, isSuccess: req_status } = useGet(
    "student/requests",
    "student-req"
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
    <>
      {isSuccess && req_status ? (
        <div
          className="space-y-6 mx-auto px-5 xl:px-20 container"
          style={{ direction: "rtl" }}
        >
          <div className="mb-6 font-bold text-3xl">
            سلام ، {data.data.full_name}
          </div>

          <div className="gap-6 grid grid-cols-1 lg:grid-cols-3 w-full">
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-gray-50 p-4 border-gray-200 border-b">
                  <h2 className="font-bold text-xl">درخواست‌های ارسالی</h2>
                </div>
                <div className="p-4 max-h-[600px] overflow-y-auto">
                  <div className="space-y-4">
                    {request.data.requests.map((item, index) => (
                      <RequestStudent
                        key={index}
                        comapany={item.advertise_info.company_info.name}
                        date={item.date}
                        status={item.status}
                        titr={item.advertise_info.title}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* <div className="bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-gray-50 p-4 border-gray-200 border-b">
                  <h2 className="font-bold text-xl">آمار کلی</h2>
                </div>
                <div className="p-4">
                  <div className="gap-2 grid grid-cols-3">
                    <Box titr="1" body="درخواست" className="text-center" />
                    <Box titr="3" body="پذیرفته" className="text-center" />
                    <Box
                      titr="14"
                      body="پیشنهادی"
                      className="col-span-2 text-center"
                    />
                  </div>
                </div>
              </div> */}

              <div className="bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-gray-50 p-4 border-gray-200 border-b">
                  <h2 className="font-bold text-xl">اقدامات سریع</h2>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <button
                      onClick={() => navigate("/all")}
                      className="w-full btn btn--primary"
                    >
                      مشاهده همه موقعیت‌ها
                    </button>

                    <button
                      onClick={() => navigate("/edit-student")}
                      className="btn--light"
                    >
                      ویرایش پروفایل
                    </button>
                    {/* <button className="btn--light">تنظیمات</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
}
