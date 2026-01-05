import React from 'react'
import ContentPanel from '../../../../components/ContentPanel'
import Info from '../../../../components/Info'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FaUsersCog } from 'react-icons/fa'
import { TbSettingsCode } from 'react-icons/tb'
import DetailContent from './DetailContent'

function DetailCompany() {
    return (
        <div style={{ direction: "rtl" }}
            className="grid grid-cols-1 xl:grid-cols-3 items-start gap-5 w-full container mx-auto px-4 lg:px-20">
            <div className="xl:col-span-2 shadow shadow-gray-400 rounded-2xl">
                <DetailContent />
            </div>



            <div className="flex-1 flex flex-col col-span-1 gap-5">

                <ContentPanel
                    label=" موقعیت‌های شما  "
                >

                    <div className="p-5 space-y-2" >
                        <h2 className="text-xl font-bold" > نام شرکت </h2>
                        <p className="text-gray-500" > توضحاتی که در مورد این موقعیت شرکت نشوته شده است </p>
                    </div>

                    <div className="p-5 space-y-3" >
                        <Info icon={<AiOutlineGlobal />} titr={"  وب سایت "} content={" www.kardars.ir "} />

                        <Info icon={<FaUsersCog />} titr={"  ظرفیت  "} content={" 10 نفر "} />

                        <Info icon={<TbSettingsCode />} titr={"  صنعت  "} content={" پتروشیمی "} />
                    </div>

                </ContentPanel>

                <ContentPanel
                    label=" موقعیت های مشابه "
                >
                    <div className="flex flex-col gap-10 p-4">


                        <div>
                            <h2 className="text-blue-500 font-bold text-xl cursor-pointer" > کارآموزی توسعه وب </h2>
                            <p className="text-gray-500 py-5" > استارتاپ دیجیتال </p>
                            <hr className="text-gray-200" />
                        </div>
                        <div >
                            <h2 className="text-blue-500 font-bold text-xl cursor-pointer" > کارآموزی توسعه وب </h2>
                            <p className="text-gray-500 py-5" > استارتاپ دیجیتال </p>
                            <hr className="text-gray-200" />
                        </div>

                        <div>
                            <h2 className="text-blue-500 font-bold text-xl cursor-pointer" > کارآموزی توسعه وب </h2>
                            <p className="text-gray-500 py-5" > استارتاپ دیجیتال </p>
                        </div>


                    </div>
                </ContentPanel>

            </div>

        </div>
    )
}

export default DetailCompany