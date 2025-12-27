import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center shadow-gray-100 shadow-xl px-8 py-6">
      <ul className="flex items-center gap-5 text-[18px]">
        <li>خانه</li>
        <li>موقعیت‌های کارآموزی</li>
        <li>ورود</li>
      </ul>
      <div className="font-bold text-[#2563eb] text-2xl">کاردرس</div>
    </div>
  );
}
