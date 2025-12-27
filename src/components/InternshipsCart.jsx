import React from "react";
import Cart from "./Cart";

export default function InternshipsCart({ info }) {
  return (
    <div style={{ direction: "rtl" }} className="">
      <Cart>
        <div className="space-y-4 w-[510px] h-[280px]">
          <div className="font-medium text-xl">{info.titr}</div>
          <Info titr={"شرکت"} content={info.name} />
          <Info titr={"مکان "} content={info.location} />
          <Info titr={"مدت"} content={info.time} />
          <div className="w-[400px]">{info.discription}</div>
          <div className="bg-[#2563eb] font-bold text-white btn">
            {" "}
            مشاهده جزئیات
          </div>
        </div>
      </Cart>
    </div>
  );
}

function Info({ titr, content }) {
  return (
    <div style={{ direction: "rtl" }} className="flex items-center gap-1">
      <div className="font-medium font-medium text-[#64748b] text-[18px]">
        {titr} :
      </div>
      <div>{content}</div>
    </div>
  );
}
