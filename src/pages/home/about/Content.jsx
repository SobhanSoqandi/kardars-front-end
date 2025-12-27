import React from "react";

export default function Content({ header, text }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-[320px] h-[145px]">
      <div className="font-medium text-[20px]">{header}</div>
      <div className="w-[320px] text-[#64748b] text-center">{text}</div>
    </div>
  );
}
