import React from "react";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div>
      <div className="space-y-2" style={{ direction: "rtl" }}>
        <div className="font-bold text-2xl">ورود به سیستم</div>
        <div className="text-gray-700">
          برای دسترسی به پنل کاربری خود وارد شوید
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
