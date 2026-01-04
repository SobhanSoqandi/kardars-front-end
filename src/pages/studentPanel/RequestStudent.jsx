import Info from "../../components/Info"


function RequestStudent({ titr, comapany, status, date }) {



    const statusStyle = [
        {
            label: "در حال بررسی",
            className: "badge--style bg-gray-400" ,
        },
        {
            label: "تایید شده",
            className: "badge--style bg-green-600",
        },
        {
            label: "رد شده",
            className: "badge--style bg-red-400",
        },
    ];


    return (
        <div className="request--cart">
            <div className="space-y-4">
                <div className="font-semibold text-balance xl:text-xl">{titr}</div>
                <Info titr={"شرکت"} content={comapany} />
                <Info titr={"تاریخ ارسال"} content={date} />
            </div>

            <div className={`w-28 ${statusStyle[status]?.className}`}>
                {statusStyle[status]?.label}
            </div>
        </div>
    )
}

export default RequestStudent