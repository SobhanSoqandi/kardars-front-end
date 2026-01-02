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
    <div className="flex justify-between items-start shadow shadow-gray-300 p-4 rounded-2xl w-full">
      <div className="space-y-3">
        <div className="font-bold text-blue-700 text-xl">{reqInfo.name}</div>
        <div className="space-y-1">
          <Info titr={"موقعیت"} content={reqInfo.position} />
          <Info titr={"دانشگاه"} content={reqInfo.university} />
          <Info titr={"تاریخ"} content={reqInfo.date} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="bg-blue-600 w-[150px] btn">dfd</div>
        <div className="bg-green-600 w-[150px] btn">dfd</div>
        <div className="bg-red-600 w-[150px] btn">dfd</div>
      </div>
    </div>
  );
}
