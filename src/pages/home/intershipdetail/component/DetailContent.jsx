import React, { useContext } from "react";
import Info from "../../../../components/Info";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiClock1 } from "react-icons/ci";
import { FaCheck, FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUserClock, FaUsersCog } from "react-icons/fa";
import { TbSettingsCode } from "react-icons/tb";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { PiCheckFatBold } from "react-icons/pi";
import useMutationData from "../../../../hooks/useMutationData";
import Modal, { ModalContext } from "../../../../components/Modal";
import { useForm } from "react-hook-form";
import Textarea from "../../../../components/TextArea";
import { data } from "react-router-dom";
import StudentReq from "../StudentReq";

function DetailContent({ info }) {
  return (
    <div>
      <div className="p-5">
        <h2 className="font-bold text-blue-600 text-2xl"> {info.title}</h2>
        <h3 className="text-lg"> {info.company_name} </h3>
      </div>

      <div className="space-y-5 bg-gray-100 m-5 p-5 rounded-xl">
        <Info
          icon={<HiOutlineLocationMarker />}
          titr={"  مکان  "}
          content={info.company_info.location}
        />

        {/* <Info icon={<CiClock1 />} titr={"  مدت  "} content={" 4 ماه  "} /> */}

        {/* <Info
          icon={<FaMoneyCheckDollar />}
          titr={"  حقوق  "}
          content={" توافقی "}
        /> */}

        {/* <Info
          icon={<TbSettingsCode />}
          titr={"  حوضه فعالیت "}
          content={" توسعه نرم افزار    "}
        /> */}

        {/* <Info
          icon={<FaUserClock />}
          titr={"  نوع ساعت کاری   "}
          content={" تمام وقت "}
        /> */}

        <Info
          icon={<FaUsersCog />}
          titr={"  ظرفیت  "}
          content={info.capacity}
        />
      </div>

      <div className="p-5">
        <h4 className="inline-block border-gray-300 border-b-2 text-xl">
          {" "}
          توضیحات :{" "}
        </h4>
        <p className="py-5 text-gray-500 text-base lg:text-lg">
          {info.description}
        </p>
      </div>

      {/* <div className="p-5" >
                <h4 className="inline-block border-gray-300 border-b-2 text-xl" >   مسئولیت‌ها و وظایف   :  </h4>
                <ul className="space-y-4 pt-5" >
                    {
                        info.map((item) => (
                            <li className="flex items-center">
                                <GiCheckMark className="text-green-500" />
                                <span className="mr-2 text-sm lg:text-lg"> {item.li} </span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="p-5" >
                <h4 className="inline-block border-gray-300 border-b-2 text-xl" >   مهارت های مورد نیاز  :  </h4>
                <ul className="space-y-4 pt-5" >
                    {
                        info.map((item) => (
                            <li className="flex items-center">
                                <PiCheckFatBold className="text-green-500" />
                                <span className="mr-2 text-sm lg:text-lg"> {item.li} </span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="p-5" >
                <h4 className="inline-block border-gray-300 border-b-2 text-xl" >   مزایا     :  </h4>
                <ul className="space-y-4 pt-5" >
                    {
                        info.map((item) => (
                            <li className="flex items-center">
                                <IoMdCheckboxOutline className="text-green-500" />
                                <span className="mr-2 text-sm lg:text-lg"> {item.li} </span>
                            </li>
                        ))
                    }
                </ul>
            </div> */}

      <Modal>
        <Modal.Open name={"cover"}>
          <button className="m-5 w-[90%] md:w-[25%] btn btn--primary">
            ارسال درخواست همکاری
          </button>
        </Modal.Open>

        <Modal.Window name={"cover"}>
          <StudentReq id={info.id} />
          <Modal.Close />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default DetailContent;
