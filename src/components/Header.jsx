import React from "react";
import { BiUser } from "react-icons/bi";

export default function Header() {
  return (
    <header className="shadow" >  
      <div className="flex container mx-auto justify-between items-center shadow-gray-100 px-8 py-6">
        <ul className="flex items-center gap-3 md:gap-5 text-[18px] md:px-8">
          <li className="cursor-pointer text-xs md:text-lg text-nowrap flex gap-2 items-center text-blue-500 border border-blue-500 p-2 rounded-xl " >
            حساب کاربری
            <BiUser className="text-sm md:text-xl lg:text-2xl" />
          </li>
          <li className="li--style" >خانه</li>
          <li className="li--style" >موقعیت‌های کارآموزی</li>
        </ul>
        <div className="logo font-bold text-[#2563eb] text-sm md:text-2xl">کاردرس</div>
      </div>
    </header>
  );
}
