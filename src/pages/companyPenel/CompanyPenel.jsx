import React from "react";
const companyInfo = {
  name: "",
};
export default function CompanyPenel() {
  return (
    <div>
      <div className="font-bold text-2xl">سلام،{companyInfo.name}</div>
      <div>خلاصه وضعیت کارآموزی‌های شما</div>
    </div>
  );
}
