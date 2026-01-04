import React from "react";
import ReqCart from "./component/ReqCart";
import Position from "./component/Position";
import ContentPanel from "../../components/ContentPanel";

export default function Body({ comapany }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 items-start gap-5 w-full">
      <div className="xl:col-span-2 shadow shadow-gray-400 rounded-2xl">
        <div className="space-y-4 w-full">
          <div className="flex justify-between bg-gray-100 rounded-t-2xl items-center p-6 border-b-[.5px] border-b-gray-200">
            <div className="font-semibold">درخواست‌های اخیر</div>
            <div>{comapany.req}</div>
          </div>
          <div className="space-y-2 px-6 py-3 overflow-y-scroll h-[600px]">
            <ReqCart />
            <ReqCart />
            <ReqCart />
            <ReqCart />
          </div>
        </div>
      </div>



      {/* 2 */}
      <div className="flex-1 flex flex-col col-span-1 gap-5">

        <ContentPanel
          label=" موقعیت‌های شما  "
        >
          <div className="space-y-2 p-2">
            <Position />
            <Position />
            <Position />
          </div>
          <div className="btn btn--primary w-[200px] mx-auto my-2">
            درخواست جدید
          </div>
        </ContentPanel>

        <ContentPanel
          label=" اقدامات سریع "
        >
          <div className="flex flex-col gap-2 p-4">
            <div className="btn border border-blue-200 shadow bg-blue-500 text-white p-5">
              پروفایل شرکت
            </div>
            <div className="btn border border-blue-200 shadow">
              گزارشات آماری
            </div>
            <div className="btn border border-blue-200 shadow">
              تنظیمات حساب
            </div>

          </div>
        </ContentPanel>

      </div>

    </div>
  );
}