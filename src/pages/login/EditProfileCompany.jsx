import React from 'react'
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/TextArea';
import { useForm } from 'react-hook-form';

function EditProfileCompany() {

    const { register } = useForm();

    return (
        <div className="shadow shadow-gray-400">
            <div className="pt-10 font-bold text-xl text-center">
                ویرایش اطلاعات شرکت   {" "}

            </div>
            <div>
                <div className="flex justify-center items-center">
                    <div
                        className="bg-white shadow-lg mx-auto p-8 rounded-lg w-[600px] max-w-4xl text-right dir-rtl"
                        dir="rtl"
                    >
                        <h2 className="mx-auto mb-8 w-28 font-bold text-blue-600 text-xl text-center logo mark">
                            کاردرس
                        </h2>

                        <form
                            className="space-y-6"
                        >
                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                                <Input
                                    value="sss"
                                    label=" نام شرکت "
                                    placeholder=" نام رسمی "
                                    registerName={"first_name"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />
                                <Input
                                    label=" نام  "
                                    placeholder=" نام صاحب شرکت "
                                    registerName={"last_name"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />

                                <Input
                                    label=" نام خانوادگی  "
                                    placeholder=" نام خانوادگی    "
                                    registerName={"last_name"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />

                                <Input
                                    label=" شماره تلفن همراه   "
                                    placeholder=" 0915 ------     "
                                    registerName={"last_name"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />
                            </div>



                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">

                                <Input
                                    label=" کدملی  "
                                    type="number"
                                    registerName={"student_code"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />


                                <Input
                                    label=" تلفن  "
                                    placeholder=" تلفن ثابت شرکت "
                                    type="email"
                                    registerName={"uni"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />

                                <Input
                                    label=" رشته   "
                                    type="text"
                                    registerName={"uni"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />


                            </div>

                            <div className="gap-4 space-y-5" >
                                <Textarea
                                    label=" درباره شرکت  "
                                    type="text"
                                    registerName={"about"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />

                                <Textarea
                                    label=" آدرس   "
                                    type="text"
                                    registerName={"about"}
                                    register={register}
                                    className="input--style h-14"
                                    lableClassName="label--style"
                                />



                            </div>

                            <div className="flex justify-center gap-4 mt-8">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 w-full text-white transition btn"
                                >
                                    ذخیره تغییرات
                                </button>
                                <button type="button" className="shadow w-full btn">
                                    انصراف
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfileCompany;