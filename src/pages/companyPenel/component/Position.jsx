import React from "react";

export default function Position() {

  const status = 0;

  const statusStyle = [
    {
      label: " فعال  ",
      className: "badge--style bg-green-600",
    },
    {
      label: " غیر فعال ",
      className: "badge--style bg-red-400",
    },
  ];

  
  return (
    <div className="flex justify-between items-center p-4">
      <div className="space-y-1">
        <div className="font-semibold text-balance xl:text-xl">کارآموزی مهندسی نرم‌افزار</div>
        <div className="text-sm xl:text-lg" >3 درخواست جدید</div>
      </div>
      <div className={`w-28 ${statusStyle[status]?.className}`}>
        {statusStyle[status]?.label}
      </div>
    </div>
  );
}
