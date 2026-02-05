import React, { useEffect } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import InternshipsCart from "../../components/InternshipsCart";
import useMutationData from "../../hooks/useMutationData";
import useGet from "../../hooks/useGet";

function AllCompany() {
  // const info = [
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
  // ];

  const { isSuccess, data: advertisements } = useGet(
    "student/advertisements",
    "getadvertisements"
  );
  return (
    <>
      {isSuccess ? (
        <div className="mx-auto container" dir="rtl">
          <div className="mx-5 xl:mx-32 p-2 py-10">
            <h1 className="font-bold text-xl"> فرصت‌های کارآموزی </h1>
            <h2 className="text-gray-600 text-sm">
              {" "}
              فرصت‌های شغلی مناسب برای دانشجویان و فارغ‌التحصیلان{" "}
            </h2>
          </div>

          <div className="md:flex flex-1 justify-between gap-5 space-y-5 shadow-lg mx-5 xl:mx-32 p-5 rounded-xl">
            <div className="w-full lg:w-1/2">
              <Input
                label="جستحو"
                placeholder=" عنوان شغلی یا نام شرکت . . . "
                className="border border-blue-300 w-full input--style"
              />
            </div>

            {/* <div className="w-full" >
          <Select
            label="دسته بندی"
            width={"100%"}
            height={"48px"}
            opt={["انتخاب کنید ..."]}
            name={"caategory"}
          />
        </div> */}
          </div>

          <div className="items-center gap-5 grid grid-cols-1 md:grid-cols-2 xl:mx-32 my-16">
            {advertisements.data.advertisements.map((item) => (
              <InternshipsCart info={item} />
            ))}
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
}

export default AllCompany;
