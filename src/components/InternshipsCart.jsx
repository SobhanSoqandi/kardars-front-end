import React from "react";
import Cart from "./Cart";
import { CiLocationOn } from "react-icons/ci";
import { FaBuilding, FaRegBuilding } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import Info from "./Info";

export default function InternshipsCart({ info }) {
  return (
    <div style={{ direction: "rtl" }} className="">
      <Cart>
        <div className="space-y-4 w-[510px] h-[300px]">
          <div className="font-medium text-[16px] sm:text-[19px] md:text-[16px] lg:text-[18px]">
            {info.titr}
          </div>
          <Info icon={<FaRegBuilding />} titr={"شرکت"} content={info.name} />
          <Info
            icon={<HiOutlineLocationMarker />}
            titr={"مکان "}
            content={info.location}
          />
          <Info icon={<IoMdTime />} titr={"مدت"} content={info.time} />
          <div className="p-3 border-2 border-dashed rounded-xl w-[300px] text-[#64748b] text-[15px] sm:text-[17px] md:text-[16px] lg:text-[18px]">
            {info.discription}
          </div>
          <div className="bg-blue-500 w-36 text-white btn"> مشاهده جزئیات</div>
        </div>
      </Cart>
    </div>
  );
}
