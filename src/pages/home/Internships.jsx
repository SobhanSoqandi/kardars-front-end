import React, { useEffect } from "react";
import InternshipsCart from "../../components/InternshipsCart";

import { useNavigate } from "react-router-dom";

import useMutationData from "../../hooks/useMutationData";

const info = [
  //   {
  //     name: " تحلیل‌گران داده",
  //     time: " 4 ماه",
  //     discription:
  //       "فرصت کارآموزی در زمینه علوم داده و یادگیری ماشین برای دانشجویان علاقه‌مند.",
  //     location: " تهران",
  //     titr: "کارآموزی داده‌کاوی در شرکت تحلیل‌گران داده",
  //   },
  //   {
  //     name: " تحلیل‌گران داده",
  //     time: " 4 ماه",
  //     discription:
  //       "فرصت کارآموزی در زمینه علوم داده و یادگیری ماشین برای دانشجویان علاقه‌مند.",
  //     location: " تهران",
  //     titr: "کارآموزی داده‌کاوی در شرکت تحلیل‌گران داده",
  //   },
];

export default function Internships() {
  const navigate = useNavigate();
  const {
    mutate: getAdvertisements,
    data: advertisements,
    isSuccess,
  } = useMutationData("student/advertisements", "post", "getadvertisements");
  useEffect(() => {
    getAdvertisements({});
  }, []);
  return (
    <>
      {isSuccess ? (
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="font-bold text-[19px] md:text-[22px] lg:text-[25px]">
            آخرین فرصت‌های کارآموزی
          </div>
          <div className="flex flex-col justify-center items-center gap-14">
            {" "}
            <div className="items-center gap-5 grid grid-cols-1 md:grid-cols-2">
              {advertisements.data.advertisements.slice(0, 2).map((item) => (
                <InternshipsCart info={item} />
              ))}
            </div>
            <div
              onClick={() => navigate("/all")}
              className="border border-blue-600 text-blue-600 btn"
            >
              مشاهده همه موقعیت‌ها
            </div>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
}
