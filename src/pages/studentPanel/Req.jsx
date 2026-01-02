import React from "react";
import Info from "../../components/Info";

export default function Req({ titr, comapany, status, date }) {
  return (
    <div className="flex justify-between items-start shadow shadow-gray-500 p-4 border-gray-300 rounded-2xl w-[85%] brder">
      <div className="space-y-4">
        <div className="font-semibold text-xl">{titr}</div>
        <Info titr={"شرکت"} content={comapany} />
        <Info titr={"تاریخ ارسال"} content={date} />
      </div>
      <div>{status}</div>
    </div>
  );
}
