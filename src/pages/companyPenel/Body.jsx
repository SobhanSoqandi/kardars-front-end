import React, { useEffect } from "react";
import ReqCart from "./component/ReqCart";
import Position from "./component/Position";
import ContentPanel from "../../components/ContentPanel";
import useGet from "../../hooks/useGet";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import CreatReq from "./component/CreatReq";

export default function Body({ comapany }) {
  const { data, isSuccess } = useGet("owner_company/advertisements", "company");
  const { data: request, isSuccess: isSuccessfull } = useGet(
    "owner_company/requests",
    "comapny_advertisements"
  );
  const navigate = useNavigate();

  return (
    <>
      {isSuccess && isSuccessfull ? (
        <div className="items-start gap-5 grid grid-cols-1 xl:grid-cols-3 w-full">
          <div className="xl:col-span-2 shadow shadow-gray-400 rounded-2xl">
            <div className="space-y-4 w-full">
              <div className="flex justify-between items-center bg-gray-100 p-6 border-b-[.5px] border-b-gray-200 rounded-t-2xl">
                <div className="font-semibold">درخواست‌های اخیر</div>
                <div>{request?.data?.requests.length}</div>
              </div>
              <div className="space-y-2 px-6 py-3 h-[600px] overflow-y-scroll">
                {request?.data?.requests.map((item) => (
                  <ReqCart
                    id={item.id}
                    name={
                      item.student_info.first_name +
                      " " +
                      item.student_info.last_name
                    }
                    major={item.student_info.major}
                    position={item.advertise_info.title}
                    date={item.created_at}
                  />
                ))}
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
              <Modal>
                <Modal.Open>
                  <div className="mx-auto my-2 w-[200px] btn btn--primary">
                    درخواست جدید
                  </div>
                </Modal.Open>
                <Modal.Window>
                  <Modal.Close />
                  <CreatReq />
                </Modal.Window>
              </Modal>
            </ContentPanel>

            <ContentPanel label=" اقدامات سریع ">
              <div className="flex flex-col gap-2 p-4">
                <div
                  className="bg-blue-500 shadow p-5 border border-blue-200 text-white btn"
                  onClick={() => {
                    navigate("/edit-company");
                  }}
                >
                  پروفایل شرکت
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
