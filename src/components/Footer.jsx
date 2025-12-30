import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900" >
      <div className="container mx-auto">
        <div
          style={{ direction: "rtl" }}
          className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-6 h-[90px]"
        >
          <div className="hidden md:block text-white text-[16px] lg:text-[20px]">©  تمامی حقوق مادی و معنوی این سایت متعلق به کاردرس می باشد </div>
          <ul className="flex flex-wrap justify-center items-center gap-5 text-white">
            <li className="li--style" >درباره ما</li>
            <li className="li--style" >تماس با ما</li>
            <li className="li--style" >راهنما</li>
            <li className="li--style" >قوانین و مقررات</li>
          </ul>

          <div className="w-full my-2 border-t border-white md:hidden"></div>

          <div className="text-white md:hidden text-center text-[12px] sm:text-[14px]">
            © تمامی حقوق مادی و معنوی این سایت متعلق به کاردرس می باشد
          </div>

        </div>
      </div>
    </footer>
  );
}
