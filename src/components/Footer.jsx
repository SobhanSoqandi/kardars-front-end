import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#1e293b] w-full">
      <div
        style={{ direction: "rtl" }}
        className="flex justify-between items-center px-8 py-6 h-[90px]"
      >
        <div className="text-white">© 2025 کاردرس. تمامی حقوق محفوظ است.</div>
        <ul className="flex items-center gap-5 text-white">
          <li>درباره ما</li>
          <li>تماس با ما</li>
          <li>راهنما</li>
          <li>قوانین و مقررات</li>
        </ul>
      </div>
    </div>
  );
}
