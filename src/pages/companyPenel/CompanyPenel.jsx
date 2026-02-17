import React, { useEffect } from "react";
import Box from "./component/Box";
import Body from "./Body";
import useGet from "../../hooks/useGet";
import Loading from "../../components/Loading";
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
    "getCompany_Info",
  );
  const { data: req_info, isSuccess: loaded } = useGet(
    "owner_company/requests/information",
    "get _reqInfo",
  );
  useEffect(() => {
    isSuccess ? console.log(data) : "";
  }, [isSuccess]);

  return (
    <>
      {isSuccess && loaded ? (
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
          <div className="md:flex flex-1 gap-4 space-y-10 px-5 w-full md:w-[1240]">
            <Box
              width="100%"
              titr={req_info.data.advertisements_count}
              body={"موقعیت فعال"}
            />
            <Box
              width="100%"
              titr={req_info.data.requests_count}
              body={"درخواست جدید"}
            />
            <Box
              width="100%"
              titr={req_info.data.pending_requests_count}
              body={"در حال بررسی"}
            />
            <Box
              width="100%"
              titr={req_info.data.accepted_requests_count}
              body={"پذیرفته شده"}
            />
          </div>
          <Body comapany={companyInfo} />
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
}
