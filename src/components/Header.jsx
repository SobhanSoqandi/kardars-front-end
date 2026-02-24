import React from "react";
import { BiEdit, BiLogOut, BiUser } from "react-icons/bi";
import checkUser from "../function/checkUser";
import getUserInfo from "../function/getUserInfo";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@heroui/dropdown";
import { FaUserEdit } from "react-icons/fa";

export default function Header() {

  const navigate = useNavigate();

  const userInfo = getUserInfo();
  return (
    <header className="shadow">
      <div className="flex justify-between items-center shadow-gray-100 mx-auto px-8 py-6 container">
        <ul className="flex items-center gap-3 md:gap-5 md:px-8 text-[18px]">

          {
            checkUser() ? (
              <Dropdown>
                <DropdownTrigger>
                  <button variant="border shadow">
                    <div className="flex items-center gap-3 border-blue-100 shadow p-2 px-4 rounded-2xl">
                      <BiUser className="text-sm md:text-xl lg:text-2xl text-blue-500" />
                      <div className="flex flex-col text-right">
                        <span className="text-sm font-semibold text-blue-800">
                          {userInfo?.fullname}
                        </span>
                        <span className="text-xs text-gray-400">
                          خوش آمدید 👋
                        </span>
                      </div>
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
              <li className="flex items-center gap-2 p-2 border border-blue-500 rounded-xl text-blue-500 text-xs md:text-lg text-nowrap cursor-pointer">
                حساب کاربری
                <BiUser className="text-sm md:text-xl lg:text-2xl" />
              </li>
            )
          }
          <li>


          </li>
          <li
            onClick={() => navigate("/all")}
            className="li--style">موقعیت‌های کارآموزی</li>
        </ul>
        <div
          onClick={() => navigate("/")}
          className="font-bold text-[#2563eb] text-sm md:text-2xl logo">
          کاردرس
        </div>
      </div>
    </header>
  );
}
