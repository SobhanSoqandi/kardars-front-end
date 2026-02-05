import React from "react";
import Info from "../../../components/Info";
import useMutationData from "../../../hooks/useMutationData";

// const reqInfo = {
//   name: "علی احمدی",
//   position: "کارآموزی مهندسی نرم‌افزار",
//   university: "دانشگاه صنعتی شریف",
//   date: "15 دی 1404",
// };
export default function ReqCart({ name, position, major, date, id }) {
  const { mutate, isSuccess } = useMutationData(
    `owner_company/requests/update/${id}`,
    "post",
    "request_status"
  );
  return (
    <div className="md:flex flex-1 justify-between items-start shadow shadow-gray-300 p-4 rounded-2xl w-full">
      <div className="space-y-3">
        <div className="font-bold text-blue-700 text-xl">{name}</div>
        <div className="space-y-1">
          <Info titr={"موقعیت"} content={position} />
          <Info titr={"رشته"} content={major} />
          <Info titr={"تاریخ"} content={date} />
        </div>
      </div>
      <div className="flex flex-row md:flex-col justify-between items-center gap-2 space-y-2 pt-4 md:pt-2">
        <div className="bg-blue-400 w-full badge--style"> مشاهده رزومه </div>
        <div
          onClick={() => {
            mutate({ status: "accepted" });
          }}
          className="bg-green-600 w-full badge--style"
        >
          {" "}
          پذیرش{" "}
        </div>
        <div
          onClick={() => {
            mutate({ status: "rejected" });
          }}
          className="bg-red-400 w-full badge--style"
        >
          {" "}
          رد درخواست{" "}
        </div>
      </div>
    </div>
  );
}
