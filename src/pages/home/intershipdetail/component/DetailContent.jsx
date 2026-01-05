import React from 'react'
import Info from '../../../../components/Info';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { CiClock1 } from 'react-icons/ci';
import { FaCheck, FaMoneyCheckDollar } from 'react-icons/fa6';
import { FaUserClock, FaUsersCog } from 'react-icons/fa';
import { TbSettingsCode } from 'react-icons/tb';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { GiCheckMark } from 'react-icons/gi';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { PiCheckFatBold } from 'react-icons/pi';

function DetailContent() {


    const info = [
        { li: "مهارت کار تیمی و برقراری ارتباط موثر" },
        { li: "امکان استخدام رسمی پس از پایان دوره کارآموزی" },
        { li: "   آشنایی با زبان‌های برنامه‌نویسی JavaScript و Python   " },
        { li: "آشنایی با مفاهیم پایگاه داده (SQL یا NoSQL)" },
    ]

    return (
        <div>
            <div className="p-5" >
                <h2 className="font-bold text-2xl text-blue-600" > کارآموزی مهندسی نرم‌افزار </h2>
                <h3 className="text-lg" > شرکت فناوری برتر </h3>
            </div>

            <div className="p-5 bg-gray-100 m-5 rounded-xl space-y-5" >
                <Info icon={<HiOutlineLocationMarker />} titr={"  مکان  "} content={" تهران  خیابان سلطانی "} />

                <Info icon={<CiClock1 />} titr={"  مدت  "} content={" 4 ماه  "} />

                <Info icon={<FaMoneyCheckDollar />} titr={"  حقوق  "} content={" توافقی "} />

                <Info icon={<TbSettingsCode />} titr={"  حوضه فعالیت "} content={" توسعه نرم افزار    "} />

                <Info icon={<FaUserClock />} titr={"  نوع ساعت کاری   "} content={" تمام وقت "} />

                <Info icon={<FaUsersCog />} titr={"  ظرفیت  "} content={" 4 نفر "} />
            </div>


            <div className="p-5" >
                <h4 className="text-xl inline-block border-b-2 border-gray-300" > توضیحات :  </h4>
                <p className="text-gray-500 text-base lg:text-lg py-5" > شرکت فناوری برتر به عنوان یکی از پیشگامان حوزه نرم‌افزارهای تحت وب، در نظر دارد دانشجویان مستعد
                    و باانگیزه رشته مهندسی کامپیوتر را برای کارآموزی در بخش توسعه نرم‌افزار جذب نماید. این فرصت مناسبی
                    برای دانشجویان است که تجربه کاری واقعی در محیط حرفه‌ای کسب کرده و مهارت‌های فنی خود را ارتقا دهند.  </p>
            </div>

            <div className="p-5" >
                <h4 className="text-xl inline-block border-b-2 border-gray-300" >   مسئولیت‌ها و وظایف   :  </h4>
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
                <h4 className="text-xl inline-block border-b-2 border-gray-300" >   مهارت های مورد نیاز  :  </h4>
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
                <h4 className="text-xl inline-block border-b-2 border-gray-300" >   مزایا     :  </h4>
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
            </div>

            <button className="btn btn--primary m-5 w-[90%] md:w-[25%]" >
                ارسال درخواست همکاری
            </button>

        </div>
    )
}

export default DetailContent;