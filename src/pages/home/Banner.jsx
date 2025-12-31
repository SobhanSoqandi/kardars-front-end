import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 bg-gradient-to-r from-blue-900  bg-blue-600 to-violet-500 py-16 w-full">
      <div className="space-y-5">
        <div className="h-16 font-bold text-[25px] md:text-[30px] lg:text-[40px] text-white text-center">
          به کاردرس خوش آمدید
        </div>
        <div className="text-white text-center text-xs md:text-lg lg:text-xl">
          پلتفرم کارآموزی برای دانشجویان مهندسی کامپیوتر ، پلی بین دانشگاه و
          صنعت
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-transparent border-2 border-white text-white text-nowrap btn ">
          ورود | ثبت‌نام شرکت
        </div>
        <div className="bg-white border-2 border-white text-[#2563eb] text-nowrap btn ">
          ورود | ثبت‌نام دانشجو
        </div>
      </div>
    </div>
  );
}
