import React from "react";
import InternshipsCart from "../../components/InternshipsCart";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import useGet from "../../hooks/useGet";

export default function Internships() {
  const navigate = useNavigate();
  const { data: advertisements, isSuccess } = useGet(
    "student/advertisements",
    "getadvertisements",
  );
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
        <Loading />
      )}
    </>
  );
}
