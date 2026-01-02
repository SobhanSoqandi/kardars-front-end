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
    <div style={{ direction: "rtl" }} className="space-y-10 contain">
      <div className="space-y-2">
        <div className="font-bold text-4xl">سلام،{companyInfo.name}</div>
        <div>خلاصه وضعیت کارآموزی‌های شما</div>
      </div>
      <div className="flex gap-4 w-full">
        <Box titr={companyInfo.position} body={"موقعیت فعال"} />
        <Box titr={companyInfo.req} body={"درخواست جدید"} />
        <Box titr={companyInfo.pending} body={"در حال بررسی"} />
        <Box titr={companyInfo.accepted} body={"پذیرفته شده"} />
      </div>
      <Body comapany={companyInfo} />
    </div>
  );
}
