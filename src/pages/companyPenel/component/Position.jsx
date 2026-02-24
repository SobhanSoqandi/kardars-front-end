import React from "react";

export default function Position({ titr, capacity, status }) {
  const statusStyle = {
    accepted: {
      label: " فعال  ",
      className: "badge--style bg-emerald-400",
    },
    rejected: {
      label: " غیر فعال ",
      className: "badge--style bg-red-400",
    },
    pending: {
      label: " در انتظار تایید ",
      className: "badge--style bg-gray-200",
    },
  };
  return (
    <div className="flex justify-between items-center p-2">
      <div className="space-y-1">
        <div className="font-semibold xl:text-lg text-balance">{titr}</div>
        <div className="text-sm xl:text-lg">{capacity}</div>
      </div>
      <div className={`w-20 ${statusStyle[status].className}`}>
        {statusStyle[status].label}
      </div>
    </div>
  );
}
