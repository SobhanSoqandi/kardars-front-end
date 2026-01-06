import React, { useState } from "react";
import LoginForm from "./LoginForm";
import CheckOtp from "./CheckOtp";


export default function Login() {

  const [step, setStep] = useState(1);


  const renderStep = () => {
    switch (step) {
      case 1:
        return <LoginForm />
      case 2:
        return <CheckOtp
          onBack={() => setStep((s) => s - 1)}

        />
      default: return null;
    }
  }

  return (
    <div className="flex justify-center items-center pt-[100px]">
      <div
        className="space-y-6 shadow shadow-gray-300 p-5 rounded-xl min-w-[350px] "
        style={{ direction: "rtl" }}
      >
        <div className="space-y-3 text-center border-b pb-3 border-blue-500">
          <div className="font-bold text-lg">ورود به سیستم</div>
          <div className="text-gray-700 text-sm">
            برای دسترسی به پنل کاربری خود وارد شوید
          </div>
        </div>

        {
          renderStep()
        }


      </div>
    </div>
  );
}
