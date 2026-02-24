import React, { useEffect } from "react";
import useMutationData from "../../hooks/useMutationData";
export default function RequestsCards({ student }) {
  const { mutate, data } = useMutationData(
    `department_head/students/update/${student.id}`,
    "post",
    "update",
  );
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div
      key={student.id}
      className="bg-white shadow-sm p-4 sm:p-6 border border-gray-200 rounded-xl"
    >
      <div className="items-center gap-x-6 gap-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 text-sm sm:text-base">
        <div className="sm:block flex justify-between">
          <span className="font-semibold text-gray-500">نام دانشجو:</span>
          <span className="sm:block lg:py-1.5 text-gray-800">
            {student.user_info.full_name}
          </span>
        </div>

        <div className="sm:block flex justify-between">
          <span className="font-semibold text-gray-500">شماره دانشجویی:</span>
          <span className="sm:block lg:py-1.5 text-gray-800">
            {student.student_number}
          </span>
        </div>

        <div className="sm:block flex justify-between">
          <span className="font-semibold text-gray-500">رشته تحصیلی:</span>
          <span className="sm:block lg:py-1.5 text-gray-800">
            {student.major}
          </span>
        </div>

        <div className="sm:block flex justify-between">
          <span className="font-semibold text-gray-500">تاریخ درخواست:</span>
          <span className="sm:block lg:py-1.5 text-gray-800">
            {student.created_at}
          </span>
        </div>

        <div className="sm:block flex justify-between">
          <span className="font-semibold text-gray-500">عملیات:</span>

          {student.status != "pending" ? (
            <div
              className={
                student.status == "verified"
                  ? "flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 py-1.5 rounded-lg w-20 text-white text-sm transition"
                  : "bg-red-400 hover:bg-red-500 flex items-center justify-center py-1.5 rounded-lg w-20 text-white text-sm transition"
              }
            >
              {student.status}
            </div>
          ) : (
            <div className="flex gap-2 sm:mt-2">
              <button
                onClick={() => {
                  mutate({ status: "verified" });
                }}
                className="bg-emerald-500 hover:bg-emerald-600 py-1.5 rounded-lg w-20 text-white text-sm transition"
              >
                پذیرش
              </button>
              <button
                onClick={() => {
                  mutate({ status: "rejected" });
                }}
                className="bg-red-400 hover:bg-red-500 py-1.5 rounded-lg w-20 text-white text-sm transition"
              >
                رد
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
