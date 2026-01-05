import React from 'react'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'

function AddCompany() {
    return (
        <div>
            <div className="font-bold text-xl text-center pt-10"> افزودن موقعیت کارآموزی </div>
            <div>
                <div className="flex justify-center items-center">
                    <div
                        className="bg-white shadow-lg mx-auto p-8 rounded-lg w-[600px] max-w-4xl text-right dir-rtl"
                        dir="rtl"
                    >
                        <h2 className="mark logo mb-8 w-28 mx-auto font-bold text-blue-600 text-xl text-center">
                            کاردرس
                        </h2>

                        <form className="space-y-6">
                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                                <Input
                                    label=" عنوان آگهی "

                                    placeholder=" عنوانی برای آگهی بنوبسید "
                                    className="input--style"
                                    lableClassName="label--style"
                                />
                                <Input
                                    label=" ظرفیت "
                                    placeholder=" مثلا 10 نفر "
                                    className="input--style"
                                    lableClassName="label--style"
                                />
                            </div>

                            <div>
                                <TextArea
                                label=" توضیحات "
                                placeholder=" توضیحاتی در مورد این موقعیت "
                                lableClassName="label--style"
                                className="input--style"
                                />
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCompany