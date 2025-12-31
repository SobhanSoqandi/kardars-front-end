import React from "react";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="flex justify-center items-center pt-[100px]">
      <div
        className="space-y-6 shadow shadow-gray-300 p-5 rounded-xl w-[350px]"
        style={{ direction: "rtl" }}
      >
        <div className="space-y-3 text-center">
          <div className="font-bold text-3xl">ورود به سیستم</div>
          <div className="text-gray-700">
            برای دسترسی به پنل کاربری خود وارد شوید
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
