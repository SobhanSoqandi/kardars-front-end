import React from 'react'
import Select from '../../components/Select';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import Textarea from '../../components/TextArea';

function EditProfileStudent() {

    const { register } = useForm();

    const personalinfo = [
        {
            name: " سبحان ",
            lastname: " سوقندی ",
            phone: " 09941196617 ",
            nationacode: " 1051161050 ",
            unicode: " 40233125 ",
            year: " 1403 ",
            univer: " آزاد ",
        },
    ]

    return (
        <div className="shadow shadow-gray-400">
            <div className="pt-10 font-bold text-xl text-center">
                ویرایش پروفایل   {" "}

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
                                    label="نام "
                                    placeholder=" "
                                    registerName={"first_name"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />
                                <Input
                                    label="نام خانولدگی"
                                    placeholder=" "
                                    registerName={"last_name"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />
                            </div>

                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                                <Input
                                    label="کد ملی"
                                    registerName={"national_code"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />
                                <Input
                                    label="شماره تماس"
                                    registerName={"mobile"}
                                    register={register}
                                    placeholder=" ---------- 98+"
                                    className="input--style"
                                    lableClassName="label--style"
                                />
                            </div>

                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">

                                <Input
                                    label="سال ورود  "
                                    type="text"
                                    registerName={"year_of_entry"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />
                                <Input
                                    label=" شماره دانشجویی "
                                    type="text"
                                    registerName={"student_code"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />

                                <Input
                                    label=" دانشگاه  "
                                    type="text"
                                    registerName={"uni"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />


                                <Select
                                    width={"100%"}
                                    height={"44px"}
                                    register={register}
                                    opt={[" مهندسی کامپیوتر "]}
                                    name={"major"}
                                />
                            </div>

                            <div className="gap-4 space-y-5" >
                                <Textarea
                                    label=" درباره من  "
                                    type="text"
                                    registerName={"about"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />

                                <Input
                                    label=" مهارت ها   "
                                    type="text"
                                    registerName={"skill"}
                                    register={register}
                                    className="input--style"
                                    lableClassName="label--style"
                                />


                                <Input
                                    label="آپلود فایل"
                                    type="file"
                                    registerName="file"
                                    register={register}
                                    className="input-file--style"
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

export default EditProfileStudent;