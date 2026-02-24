import React from 'react'
import Header from './Header';

function Body() {
  const companies = [
    {
      id: 1,
      company_name: "شرکت داده‌پردازی ایران",
      registration_number: "11315002",
      description: "توسعه‌دهنده فرانت‌اند، توسعه‌دهنده بک‌اند",
      location: "تهران",
      created_at: "1404/11/30",
      status: "active",
    },
    {
      id: 2,
      company_name: "گروه صنعتی مپنا",
      registration_number: "11315003",
      description: "کارآموز مهندسی برق، کارآموز مکانیک",
      location: "اصفهان",
      created_at: "1404/11/29",
      status: "deactive",
    },
    {
      id: 3,
      company_name: "بانک ملت",
      registration_number: "11315004",
      description: "کارآموز IT، کارآموز حسابداری",
      location: "مشهد",
      created_at: "1404/11/28",
      status: "baned",
    },
  ];



  const statusStyle = {
    active: {
      label: "در انتظار تایید",
      className: "bg-yellow-100 text-yellow-800 badge--style"
    },
    deactive: {
      label: "تایید شده",
      className: "bg-emerald-100 text-emerald-800 badge--style"
    },
    baned: {
      label: "نیاز به بررسی",
      className: "bg-gray-400 text-white badge--style"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8" dir="rtl">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">
        درخواست‌های ثبت موقعیت کارآموزی شرکت‌ها
      </h2>

      <div className="flex flex-col gap-3">
        {companies.map((company, index) => (
          <div
            key={company.id}
            className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-sm transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">

              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center text-blue-900 font-medium">
                {index + 1}
              </div>

              <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                <div>
                  <div className="text-sm text-gray-500 font-bold">نام شرکت</div>
                  <div className="font-medium text-gray-800">{company.company_name}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 font-bold">شماره ثبت</div>
                  <div className="text-gray-700 font-mono">{company.registration_number}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 font-bold"> آدرس </div>
                  <div className="text-gray-700">{company.location}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 font-bold">تاریخ ثبت</div>
                  <div className="text-gray-700">{company.created_at}</div>
                </div>

                <div className="lg:col-span-1">
                  <div className="text-sm text-gray-500 font-bold">توضیحات</div>
                  <div className="text-gray-700 text-sm truncate" title={company.description}>
                    {company.description}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2 sm:mt-0 sm:mr-auto">
                <div className={`w-24 ${statusStyle[company.status]?.className}`}>
                  {statusStyle[company.status]?.label}
                </div>

                <button className="bg-emerald-500 hover:bg-emerald-600 text-white w-20 py-1.5 rounded-lg text-sm transition">
                  پذیرش
                </button>
                <button className="bg-red-400 hover:bg-red-500 text-white w-20 py-1.5 rounded-lg text-sm transition">
                  رد
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Body;