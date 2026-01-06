import React from "react";
import InternshipsCart from "../../components/InternshipsCart";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();


  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="font-bold text-[19px] md:text-[22px] lg:text-[25px]">آخرین فرصت‌های کارآموزی</div>
      <div className="flex flex-col justify-center items-center gap-14">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          {info.map((item) => (
            <InternshipsCart info={item} />
          ))}
        </div>
        <div
          onClick={() => navigate("/all")}
          className="text-blue-600 border border-blue-600 btn ">
          مشاهده همه موقعیت‌ها
        </div>
      </div>
    </div>
  );
}
