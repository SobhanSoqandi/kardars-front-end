import React from "react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">

        <div
          style={{ direction: "rtl" }}
          className="flex flex-col md:flex-row justify-between gap-8 md:gap-12"
        >
          
          <div className="md:w-1/3 text-center md:text-right">
            <h2 className="logo text-blue-700 text-2xl">
              کاردرس
            </h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              پلتفرم هوشمند اتصال دانشجویان مهندسی با بهترین فرصت‌های کارآموزی.
              <br />
              دیگر نگران پیدا کردن شرکت معتبر نباشید.
            </p>
            <div className="flex justify-center md:justify-start gap-3 mt-4">
              <span className="badge--style bg-blue-400">
                ✓ مورد تایید دانشگاه
              </span>
              <span className="badge--style bg-blue-400">
                ✓ ۲۰+ شرکت فعال
              </span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-gray-800 font-semibold text-lg mb-3">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="li--style">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="li--style">
                  تماس با ما
                </a>
              </li>
              <li>
                <a href="#" className="li--style">
                  راهنما و پشتیبانی
                </a>
              </li>
              <li>
                <a href="#" className="li--style">
                  قوانین و مقررات
                </a>
              </li>
            </ul>
          </div>

          {/* سمت چپ: شعار یا آیکون‌های شبکه (ساده و حرفه‌ای) */}
          <div className="text-center md:text-right">
            <h3 className="text-gray-800 font-semibold text-lg mb-3">همراه ما باشید</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] mx-auto md:mx-0">
              کارآموزی یک قدم تا حرفه‌ای شدن 
            </p>
            <div className="flex justify-center md:justify-start cursor-pointer gap-4 mt-4 text-2xl text-blue-500">
             <MdOutlineMailOutline className="text-red-600" />
             <FaInstagram className="text-rose-400" />
             <FaTelegram className="text-blue-500" />
             <FaWhatsapp className="text-green-500" />
            </div>
          </div>
        </div>

        <div className="border-t border-blue-300 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()} تمامی حقوق مادی و معنوی این سایت متعلق به کاردرس می‌باشد.
          </p>
          <p className="text-gray-400 text-xs mt-1">
            طراحی شده برای اتصال دانشگاه و صنعت
          </p>
        </div>
      </div>
    </footer>
  );
}