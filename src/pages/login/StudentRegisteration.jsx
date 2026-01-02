import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Textarea from "../../components/TextArea";


function StudentRegisteration() {
    const inputStyle =
        "bg-gray-100 rounded-xl focus:shadow-md focus:ring-1 focus:ring-blue-500 focus:outline-none focus:bg-white block w-full p-3";
    const labelStyle = "text-sm font-medium text-gray-700";
    
    const { register } = useForm();
    return (
        <div className="shadow shadow-gray-400">
            <div className="font-bold text-xl text-center pt-10 "> ثبت‌ نام دانشجو </div>
            <div>
                <div className="flex justify-center items-center">
                    <div
                        className="bg-white shadow-lg mx-auto p-8 rounded-lg w-[600px] max-w-4xl text-right dir-rtl"
                        dir="rtl"
                    >
                        <h2 className="logo mark mb-8 w-28 mx-auto font-bold text-blue-600 text-xl text-center">
                            کاردرس
                        </h2>

                        <form className="space-y-6">
                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                                <Input
                                    label="نام "
                                    placeholder=" "
                                    className={inputStyle}
                                    lableClassName={labelStyle}
                                />
                                <Input
                                    label="نام خانولدگی"
                                    placeholder=" "
                                    className={inputStyle}
                                    lableClassName={labelStyle}
                                />
                            </div>

                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                                <Input
                                    label="ایمیل "
                                    type="email"
                                    placeholder="sobhan@gmail.com"
                                    className={inputStyle}
                                    lableClassName={labelStyle}
                                />
                                <Input
                                    label="شماره تماس"
                                    placeholder=" ---------- 98+"
                                    className={inputStyle}
                                    lableClassName={labelStyle}
                                />
                            </div>

                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                                <Input
                                    label="رمز عبور"
                                    type="password"
                                    className={inputStyle}
                                    lableClassName={labelStyle}
                                />
                                <Input
                                    label="تکرار رمز عبور"
                                    type="password"
                                    className={inputStyle}
                                    lableClassName={labelStyle}
                                />
                                <Input
                                    label=" دانشگاه "
                                    type="text"
                                    className={inputStyle}
                                    lableClassName={labelStyle}
                                />
                                <Input
                                    label=" شماره دانشجویی "
                                    type="text"
                                    className={inputStyle}
                                    lableClassName={labelStyle}
                                />
                                <Select
                                    width={"100%"}
                                    height={"44px"}
                                    register={register}
                                    opt={[" مهندسی کامپیوتر "]}
                                    name={"caategory"}
                                />
                            </div>

                            <div className="flex justify-center gap-4 mt-8">
                                <button
                                    type="submit"
                                    className="btn w-full bg-blue-500 hover:bg-blue-600 text-white transition"
                                >
                                    ثبت‌ نام دانشجو
                                </button>
                                <button
                                    type="button"
                                    className="btn shadow w-full"
                                >
                                    انصراف
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentRegisteration