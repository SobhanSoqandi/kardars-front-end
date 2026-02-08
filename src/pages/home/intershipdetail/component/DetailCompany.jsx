import React, { useEffect } from "react";
import ContentPanel from "../../../../components/ContentPanel";
import Info from "../../../../components/Info";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { TbSettingsCode } from "react-icons/tb";
import DetailContent from "./DetailContent";
import { data, useSearchParams } from "react-router-dom";

import useGet from "../../../../hooks/useGet";
import Loading from "../../../../components/Loading";

function DetailCompany() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { isSuccess, data: info } = useGet(
    `student/advertisements/show/${id}`,
    "show-advertisements"
  );
  useEffect(() => {
    isSuccess ? console.log(info) : null;
  }, [isSuccess, info]);
  return (
    <>
      {isSuccess ? (
        <div
          style={{ direction: "rtl" }}
          className="relative items-start gap-5 grid grid-cols-1 xl:grid-cols-3 mx-auto px-4 lg:px-20 w-full container"
        >
          <div className="xl:col-span-2 shadow shadow-gray-400 rounded-2xl">
            <DetailContent info={info.data.advertise} />
          </div>

          <div className="flex flex-col flex-1 gap-5 col-span-1">
            <ContentPanel label=" موقعیت‌های شما  ">
              <div className="space-y-2 p-5">
                <h2 className="font-bold text-xl">
                  {" "}
                  {info.data.advertise.company_name}{" "}
                </h2>
                <p className="text-gray-500">
                  {info.data.advertise.company_info.description}
                </p>
              </div>

              <div className="space-y-3 p-5">
                {/* <Info
                  icon={<AiOutlineGlobal />}
                  titr={"  وب سایت "}
                  content={" www.kardars.ir "}
                /> */}

                <Info
                  icon={<FaUsersCog />}
                  titr={"  ظرفیت  "}
                  content={info.data.advertise.capacity}
                />

                <Info
                  icon={<TbSettingsCode />}
                  titr={"  صنعت  "}
                  content={" پتروشیمی "}
                />
              </div>
            </ContentPanel>

            {/* <ContentPanel
                    label=" موقعیت های مشابه "
                >
                    <div className="flex flex-col gap-10 p-4">


                        <div>
                            <h2 className="font-bold text-blue-500 text-xl cursor-pointer" > کارآموزی توسعه وب </h2>
                            <p className="py-5 text-gray-500" > استارتاپ دیجیتال </p>
                            <hr className="text-gray-200" />
                        </div>
                        <div >
                            <h2 className="font-bold text-blue-500 text-xl cursor-pointer" > کارآموزی توسعه وب </h2>
                            <p className="py-5 text-gray-500" > استارتاپ دیجیتال </p>
                            <hr className="text-gray-200" />
                        </div>

                        <div>
                            <h2 className="font-bold text-blue-500 text-xl cursor-pointer" > کارآموزی توسعه وب </h2>
                            <p className="py-5 text-gray-500" > استارتاپ دیجیتال </p>
                        </div>


                    </div>
                </ContentPanel> */}
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
}

export default DetailCompany;
