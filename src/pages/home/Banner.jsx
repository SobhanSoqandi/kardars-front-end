import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner({ userLogin }) {

  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(50, 50, 250, 0.7), rgba(50, 50, 150, 0.7)), url("/banner-3.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col justify-center md:rounded-xl items-center gap-8-r py-16 w-full ">
      <div className="space-y-5 ">
        <div className="h-16 font-bold text-[25px] text-white md:text-[30px] lg:text-[40px] text-center">
          به کاردرس خوش آمدید
        </div>
        <div className="text-white text-xs md:text-lg lg:text-xl text-center">
          پلتفرم کارآموزی برای دانشجویان مهندسی کامپیوتر ، پلی بین دانشگاه و
          صنعت
        </div>
      </div>
      {userLogin ? (
        ""
      ) : (
        <div className="flex items-center gap-2 pt-5">
          <div

            className="bg-transparent border-2 border-white text-white text-nowrap btn">
            ورود | ثبت‌نام شرکت
          </div>
          <div
            onClick={() => navigate("login")}
            className="bg-white border-2 border-white text-[#2563eb] text-nowrap btn">
            ورود | ثبت‌نام دانشجو
          </div>
        </div>
      )}
    </div>
  );
}
