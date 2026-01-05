import React from "react";

export default function Box({ titr, body , width }) {
  return (
    <div style={{ width : width }} className="flex flex-col justify-center border border-blue-100 items-center shadow-md shadow-gray-300 rounded-2xl h-[130px] grow">
      <div className="font-bold text-blue-600 text-2xl 2xl:text-4xl">{titr}</div>
      <div className="text-sm md:text-lg lg:text-sm 2xl:text-lg">{body}</div>
    </div>
  );
}
