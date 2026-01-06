import React from 'react'
import Input from '../../components/Input';
import Select from '../../components/Select';
import InternshipsCart from '../../components/InternshipsCart';

function AllCompany() {

  const info = [
    {
      name: " تحلیل‌گران داده",
      time: " 4 ماه",
      discription:
        "فرصت کارآموزی در زمینه علوم داده و یادگیری ماشین برای دانشجویان علاقه‌مند.",
      location: " تهران",
      titr: "کارآموزی داده‌کاوی در شرکت تحلیل‌گران داده",
    },
    {
      name: " تحلیل‌گران داده",
      time: " 4 ماه",
      discription:
        "فرصت کارآموزی در زمینه علوم داده و یادگیری ماشین برای دانشجویان علاقه‌مند.",
      location: " تهران",
      titr: "کارآموزی داده‌کاوی در شرکت تحلیل‌گران داده",
    },
  ];





  return (
    <div className="container mx-auto" dir='rtl' >
      <div className=" mx-5 xl:mx-32 p-2 py-10" >
        <h1 className="font-bold text-xl" > فرصت‌های کارآموزی </h1>
        <h2 className="text-gray-600 text-sm " > فرصت‌های شغلی مناسب برای دانشجویان و فارغ‌التحصیلان </h2>
      </div>

      <div className="flex-1 md:flex space-y-5 justify-between gap-5 p-5 shadow-lg mx-5 xl:mx-32 rounded-xl" >

        <div className="w-full lg:w-1/2" >
          <Input
            label="جستحو"
            placeholder=" عنوان شغلی یا نام شرکت . . . "
            className="input--style w-full border border-blue-300"
          />
        </div>

        {/* <div className="w-full" >
          <Select
            label="دسته بندی"
            width={"100%"}
            height={"48px"}
            opt={["انتخاب کنید ..."]}
            name={"caategory"}
          />
        </div> */}

      </div>


      
        <div className="grid grid-cols-1 my-16 md:grid-cols-2 items-center gap-5 xl:mx-32">
          {info.map((item) => (
            <InternshipsCart info={item} />
          ))}
        </div>
     

    </div>
  )
}

export default AllCompany;