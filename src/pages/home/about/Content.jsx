import React from "react";

export default function Content({ header, text }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 ">
      <div className="font-medium md:text-[20px]">{header}</div>
      <div className=" text-[#64748b] text-center text-[13px] md:text-[15px]">{text}</div>
    </div>
  );
}
