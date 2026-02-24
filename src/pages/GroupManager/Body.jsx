import React from "react";
import Info from "../../components/Info";
import RequestsCards from "./RequestsCards";
import useGet from "../../hooks/useGet";
import Loading from "../../components/Loading";

function Body() {
  const { data: student, isSuccess } = useGet(
    "department_head/students",
    "getStudent",
  );

  return (
    <div>
      <div>
        {isSuccess ? (
          <>
            <div className="bg-gray-50 p-4 sm:p-8 min-h-screen" dir="rtl">
              <h2 className="mb-6 font-bold text-xl sm:text-2xl">
                درخواست‌های دانشجویان
              </h2>

              <div className="flex flex-col gap-4">
                {student.data.students.map((student) => (
                  <RequestsCards student={student} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Body;
