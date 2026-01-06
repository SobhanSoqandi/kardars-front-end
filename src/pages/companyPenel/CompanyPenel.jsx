import React, { useEffect } from "react";
import Box from "./component/Box";
import Body from "./Body";
import useGet from "../../hooks/useGet";
const companyInfo = {
  name: "",
  position: 5,
  pending: 8,
  accepted: 10,
  req: 2,
};
export default function CompanyPenel() {
  const { data, isSuccess } = useGet(
    "owner_company/profile",
    "getCompany_Info"
  );
  return (
    <>
      {isSuccess ? (
        <div
          style={{ direction: "rtl" }}
          className="space-y-10 mx-auto px-5 lg:px-20 container"
        >
          <div className="space-y-2">
            <div className="font-bold text-2xl">
              سلام،{data?.data.full_name}
            </div>
            <div>خلاصه وضعیت کارآموزی‌های شما</div>
          </div>
          <div className="md:flex flex-1 gap-4 space-y-10 px-5 w-full">
            <Box
              width="100%"
              titr={companyInfo.position}
              body={"موقعیت فعال"}
            />
            <Box width="100%" titr={companyInfo.req} body={"درخواست جدید"} />
            <Box
              width="100%"
              titr={companyInfo.pending}
              body={"در حال بررسی"}
            />
            <Box
              width="100%"
              titr={companyInfo.accepted}
              body={"پذیرفته شده"}
            />
          </div>
          <Body comapany={companyInfo} />
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
}
