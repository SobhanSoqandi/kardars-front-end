import React from "react";

const students = [
    {
        id: 1,
        name: " سبحان سوقندی ",
        studentId: "401123456",
        major: "مهندسی کامپیوتر",
        requestDate: "1404/11/30",
    },
    {
        id: 2,
        name: " ابولی ",
        studentId: "401987654",
        major: "مهندسی برق",
        requestDate: "1404/11/29",
    },
];

export default function RequestsCards() {
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8" dir="rtl">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
                درخواست‌های دانشجویان
            </h2>

            <div className="flex flex-col gap-4">
                {students.map((student) => (
                    <div
                        key={student.id}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-6 text-sm sm:text-base items-center">

                            <div className="flex justify-between sm:block">
                                <span className="font-semibold text-gray-500">نام دانشجو:</span>
                                <span className="text-gray-800 sm:block lg:py-1.5">{student.name}</span>
                            </div>

                            <div className="flex justify-between sm:block">
                                <span className="font-semibold text-gray-500">شماره دانشجویی:</span>
                                <span className="text-gray-800 sm:block lg:py-1.5">{student.studentId}</span>
                            </div>

                            <div className="flex justify-between sm:block">
                                <span className="font-semibold text-gray-500">رشته تحصیلی:</span>
                                <span className="text-gray-800 sm:block lg:py-1.5">{student.major}</span>
                            </div>

                            <div className="flex justify-between sm:block">
                                <span className="font-semibold text-gray-500">تاریخ درخواست:</span>
                                <span className="text-gray-800 sm:block lg:py-1.5">{student.requestDate}</span>
                            </div>


                            <div className="flex justify-between sm:block">
                                <span className="font-semibold text-gray-500">عملیات:</span>
                                <div className="flex gap-2 sm:mt-2">
                                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white w-20 py-1.5 rounded-lg text-sm transition">
                                        پذیرش
                                    </button>
                                    <button className="bg-red-400 hover:bg-red-500 text-white w-20 py-1.5 rounded-lg text-sm transition">
                                        رد
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}