import React from "react";
import { BiUser } from "react-icons/bi";
import checkUser from "../function/checkUser";
import getUserInfo from "../function/getUserInfo";

export default function Header() {
  const userInfo = getUserInfo();
  return (
    <header className="shadow">
      <div className="flex justify-between items-center shadow-gray-100 mx-auto px-8 py-6 container">
        <ul className="flex items-center gap-3 md:gap-5 md:px-8 text-[18px]">
          {checkUser ? (
            <div>
              <div>{userInfo.fullname}</div>
              <img src={userInfo.avatar} alt="" />
            </div>
          ) : (
            <li className="flex items-center gap-2 p-2 border border-blue-500 rounded-xl text-blue-500 text-xs md:text-lg text-nowrap cursor-pointer">
              حساب کاربری
              <BiUser className="text-sm md:text-xl lg:text-2xl" />
            </li>
          )}
          <li className="li--style">خانه</li>
          <li className="li--style">موقعیت‌های کارآموزی</li>
        </ul>
        <div className="font-bold text-[#2563eb] text-sm md:text-2xl logo">
          کاردرس
        </div>
      </div>
    </header>
  );
}
