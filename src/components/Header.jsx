import React from "react";
import { BiEdit, BiLogOut, BiUser } from "react-icons/bi";
import checkUser from "../function/checkUser";
import getUserInfo from "../function/getUserInfo";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@heroui/dropdown";
import { FaUserEdit } from "react-icons/fa";
import ToPersianNumber from "../utils/ToPersianNumber";

export default function Header() {

  const navigate = useNavigate();

  const userInfo = getUserInfo();
  
  return (
    <header className="shadow">
      <div className="flex justify-between items-center shadow-gray-100 mx-auto px-5 py-5 container">
        <ul className="flex items-center gap-1 md:gap-5 md:px-8 text-[18px]">

          {
            checkUser() ? (
              <Dropdown>
                <DropdownTrigger>
                  <button
                  onClick={() => navigate("/login")}
                  >
                    <div className="flex items-center gap-3 border-blue-100  p-2 px-4 cursor-pointer rounded-xl hover:ring-1 ring-blue-400">
                      <div className="flex flex-col text-right">
                        <span className="text-xs font-semibold text-blue-800">
                          {userInfo?.fullname}
                        </span>
                        <span className="text-xs text-gray-400">
                           {ToPersianNumber(userInfo?.mobile)}
                        </span>
                      </div>
                      <BiUser className="text-lg w-7 h-7 md:text-xl lg:text-2xl text-blue-500 shadow rounded-lg p-0.5" />

                    </div>
                  </button>
                </DropdownTrigger>

                <DropdownMenu
                  aria-label="Static Actions"
                  dir="rtl"
                  classNames={{
                    base: "bg-white text-black shadow-xl rounded-xl min-w-[220px] p-2",
                    list: "gap-1",
                  }}
                  itemClasses={{
                    base: "flex flex-row-reverse items-center gap-3 px-3 py-2 rounded-xl transition hover:bg-blue-50 active:bg-blue-200",
                  }}
                >

                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    startContent={<FaUserEdit className="text-lg text-blue-500" />}
                  >
                      ویرایش پروفایل
                  </DropdownItem>


                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    startContent={<BiLogOut className="text-lg text-red-500" />}
                  >
                    خروج از حساب
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <li
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 p-2 border border-blue-500 rounded-xl text-blue-500 text-xs md:text-lg text-nowrap cursor-pointer">
                حساب کاربری
                <BiUser className="text-sm md:text-xl lg:text-2xl" />
              </li>
            )
          }
          <li>


          </li>
          <li
            onClick={() => navigate("/all")}
            className="text-sm border-gray-100 shadow p-2 rounded-xl cursor-pointer text-blue-500">موقعیت‌های کارآموزی</li>
        </ul>
        <div
          onClick={() => navigate("/")}
          className="font-bold text-[#2563eb] text-xl md:text-2xl logo">
          کاردرس
        </div>
      </div>
    </header>
  );
}
