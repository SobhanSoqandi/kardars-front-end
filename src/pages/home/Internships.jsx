import React from "react";
import InternshipsCart from "../../components/InternshipsCart";

const info = [
  {
    name: " تحلیل‌گران داده",
    time: " 4 ماه",
    discription:
      "فرصت کارآموزی در زمینه علوم داده و یادگیری ماشین برای دانشجویان علاقه‌مند.",
    location: " تهران",
    titr: "کارآموزی داده‌کاوی در شرکت تحلیل‌گران داده",
  },
  {
    name: " تحلیل‌گران داده",
    time: " 4 ماه",
    discription:
      "فرصت کارآموزی در زمینه علوم داده و یادگیری ماشین برای دانشجویان علاقه‌مند.",
    location: " تهران",
    titr: "کارآموزی داده‌کاوی در شرکت تحلیل‌گران داده",
  },
];
export default function Internships() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="font-bold text-2xl">آخرین فرصت‌های کارآموزی</div>
      <div className="flex flex-col justify-center items-center gap-14">
        {" "}
        <div className="flex items-center gap-5">
          {info.map((item) => (
            <InternshipsCart info={item} />
          ))}
        </div>
        <div className="bg-[#475569] font-medium text-white text-nowrap btn">
          مشاهده همه موقعیت‌ها
        </div>
      </div>
    </div>
  );
}
