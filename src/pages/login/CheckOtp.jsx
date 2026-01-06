import React, { useEffect, useState } from 'react'
import { FaRegPenToSquare } from 'react-icons/fa6';
import { LuSquareArrowRight } from 'react-icons/lu';
import ToPersianNumber from '../../utils/ToPersianNumber';
import OTPInput from 'react-otp-input';

function CheckOtp({ onBack }) {

    const phoneNumber = "09151540202";

    const [time, setTime] = useState(50);


    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
        return () => {
            if (timer) clearInterval(timer);
        }
    }, [time]);


    const [otp, setOtp] = useState(0);

    return (
        <div>

            <div className="w-full flex items-center justify-center px-4">
                <div className=" w-full p-8 rounded-xl">
                    <div className="flex justify-center items-center text-center relative">
                        <button
                            onClick={onBack}
                            className="text-2xl absolute right-0 text-gray-500 cursor-pointer">
                            <LuSquareArrowRight />
                        </button>
                        <a className="logo text-blue-600 text-2xl"> کاردرس </a>
                    </div>
                    <div className="flex py-10 w-80" >
                        <p className="text-gray-500" > کد تایید به شماره {ToPersianNumber(phoneNumber)} ارسال شد </p>
                        <button
                            onClick={onBack}
                            className="text-blue-600 px-2 cursor-pointer" >
                            <FaRegPenToSquare />
                        </button>
                    </div>


                    <form
                    // onSubmit={checkOtpHandler}
                    >
                        <p className="font-bold text-secondary-800"> کد تایید را وارد کنید :</p>
                        <OTPInput value={otp} onChange={setOtp} numInputs={6}
                            renderSeparator={<span>  </span>}
                            renderInput={(props) => (
                                <input
                                    {...props}
                                    className="outline-none  my-5 transition-all border-[0.5px] border-blue-500 duration-300 focus:border-blue-600 focus:shadow-lg focus:shadow-blue-500/50 "
                                />
                            )}
                            shouldAutoFocus

                            containerStyle="flex flex-row-reverse gap-x-1  justify-center"
                            inputStyle={{
                                color: "blue",
                                width: "3.2rem",
                                height: "3.5rem",
                                padding: "0.5rem 0.2rem",
                                borderRadius: "1rem"
                            }}

                        />

                        {
                            time <= 0 ?
                                <div className="text-gray-600 py-5 text-center text-sm" >
                                    <p className="text-blue-700 cursor-pointer" >  دریافت مجدد کد تایید </p>
                                </div>
                                :
                                <div className="text-gray-600 py-5 text-center text-sm" >
                                    <p className="text-blue-700 cursor-pointer" >
                                        {time} ثانیه تا ارسال مجدد کد
                                    </p>
                                </div>

                        }


                        <button
                            type='submit'
                            className="btn btn--primary w-full"> تایید و ورود </button>



                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckOtp;