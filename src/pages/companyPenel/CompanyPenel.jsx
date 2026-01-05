import React from "react";
import Box from "./component/Box";
import Body from "./Body";
const companyInfo = {
  name: "",
  position: 5,
  pending: 8,
  accepted: 10,
  req: 2,
};
export default function CompanyPenel() {
  return (
    <div style={{ direction: "rtl" }} className="space-y-10 container mx-auto px-5 lg:px-20">
      <div className="space-y-2">
        <div className="font-bold text-2xl">سلام،{companyInfo.name}</div>
        <div>خلاصه وضعیت کارآموزی‌های شما</div>
      </div>
      <div className="flex-1 md:flex gap-4 space-y-10 w-full px-5">
        <Box width="100%" titr={companyInfo.position} body={"موقعیت فعال"} />
        <Box width="100%" titr={companyInfo.req} body={"درخواست جدید"} />
        <Box width="100%" titr={companyInfo.pending} body={"در حال بررسی"} />
        <Box width="100%" titr={companyInfo.accepted} body={"پذیرفته شده"} />
      </div>
      <Body comapany={companyInfo} />
    </div>
  );
}
