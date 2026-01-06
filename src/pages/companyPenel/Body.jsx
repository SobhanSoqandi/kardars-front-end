import React, { useEffect } from "react";
import ReqCart from "./component/ReqCart";
import Position from "./component/Position";
import ContentPanel from "../../components/ContentPanel";
import useGet from "../../hooks/useGet";
import useMutationData from "../../hooks/useMutationData";

export default function Body({ comapany }) {
  const { data, isSuccess, mutate } = useMutationData(
    "owner_company/advertisements",
    "post",
    "comapny_advertisements"
  );
  const {
    data: request,
    mutate: getRequest,
    isSuccess: isSuccessfull,
  } = useMutationData("owner_company/requests", "post", "company_request");
  useEffect(() => {
    mutate({});
    getRequest({});
  }, []);
  useEffect(() => {
    console.log(request);
  }, [request]);
  return (
    <>
      {isSuccess && isSuccessfull ? (
        <div className="items-start gap-5 grid grid-cols-1 xl:grid-cols-3 w-full">
          <div className="xl:col-span-2 shadow shadow-gray-400 rounded-2xl">
            <div className="space-y-4 w-full">
              <div className="flex justify-between items-center bg-gray-100 p-6 border-b-[.5px] border-b-gray-200 rounded-t-2xl">
                <div className="font-semibold">درخواست‌های اخیر</div>
                <div>{request?.data.requests.length}</div>
              </div>
              <div className="space-y-2 px-6 py-3 h-[600px] overflow-y-scroll">
                <ReqCart />
                <ReqCart />
                <ReqCart />
                <ReqCart />
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col flex-1 gap-5 col-span-1">
            <ContentPanel label=" موقعیت‌های شما  ">
              <div className="space-y-2 p-2">
                {data.data.advertisements.map((item) => (
                  <Position
                    capacity={item.capacity}
                    titr={item.title}
                    status={item.status}
                  />
                ))}
              </div>
              <div className="mx-auto my-2 w-[200px] btn btn--primary">
                درخواست جدید
              </div>
            </ContentPanel>

            <ContentPanel label=" اقدامات سریع ">
              <div className="flex flex-col gap-2 p-4">
                <div className="bg-blue-500 shadow p-5 border border-blue-200 text-white btn">
                  پروفایل شرکت
                </div>
                <div className="shadow border border-blue-200 btn">
                  گزارشات آماری
                </div>
                <div className="shadow border border-blue-200 btn">
                  تنظیمات حساب
                </div>
              </div>
            </ContentPanel>
          </div>
        </div>
      ) : (
        <div> loading</div>
      )}
    </>
  );
}
