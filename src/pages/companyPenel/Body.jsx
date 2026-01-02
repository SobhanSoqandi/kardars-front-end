import React from "react";
import ReqCart from "./component/ReqCart";
import Position from "./component/Position";

export default function Body({ comapany }) {
  return (
    <div className="flex items-start gap-5 w-full">
      <div className="flex shadow shadow-gray-400 rounded-2xl w-[65%]">
        <div className="space-y-4 w-full">
          <div className="flex justify-between items-center p-6 border-b-[.5px] border-b-gray-200">
            <div className="font-semibold">درخواست‌های اخیر</div>
            <div>{comapany.req}</div>
          </div>
          <div className="space-y-2 px-6 py-3">
            <ReqCart />
            <ReqCart />
            <ReqCart />
            <ReqCart />
          </div>
        </div>
      </div>
      <div className="space-y-4 shadow shadow-gray-400 pb-4 rounded-2xl w-[35%] h-full">
        <div className="p-6 border-b-[.5px] border-b-gray-200">
          موقعیت‌های شما
        </div>
        <div className="space-y-2">
          <Position />
          <Position />
          <Position />
        </div>
        <div className="bg-blue-600 mx-auto w-[150px] btn">درخواست جدید</div>
      </div>
    </div>
  );
}
