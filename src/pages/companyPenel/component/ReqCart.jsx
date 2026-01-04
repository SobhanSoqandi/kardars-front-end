import React from "react";
import Info from "../../../components/Info";

const reqInfo = {
  name: "علی احمدی",
  position: "کارآموزی مهندسی نرم‌افزار",
  university: "دانشگاه صنعتی شریف",
  date: "15 دی 1404",
};
export default function ReqCart() {
  return (
    <div className="flex-1 md:flex justify-between items-start shadow shadow-gray-300 p-4 rounded-2xl w-full">
      <div className="space-y-3">
        <div className="font-bold text-blue-700 text-xl">{reqInfo.name}</div>
        <div className="space-y-1">
          <Info titr={"موقعیت"} content={reqInfo.position} />
          <Info titr={"دانشگاه"} content={reqInfo.university} />
          <Info titr={"تاریخ"} content={reqInfo.date} />
        </div>
      </div>
      <div className="flex flex-row md:flex-col space-y-2 justify-between items-center gap-2 pt-4 md:pt-2" >
        <div className="badge--style w-full bg-blue-400"> مشاهده رزومه </div>
        <div className="badge--style w-full bg-green-600"> پذیرش </div>
        <div className="badge--style w-full bg-red-400"> رد درخواست </div>
      </div>
    </div>
  );
}
