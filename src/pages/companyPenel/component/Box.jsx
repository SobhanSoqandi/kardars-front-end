import React from "react";

export default function Box({ titr, body }) {
  return (
    <div className="flex flex-col justify-center items-center shadow shadow-gray-400 rounded-2xl w-[200px] h-[130px] grow">
      <div className="font-bold text-blue-800 text-4xl">{titr}</div>
      <div className="">{body}</div>
    </div>
  );
}
