import Info from "../../components/Info";

function RequestStudent({ titr, comapany, status, date }) {
  const statusStyle = {
    pending: {
      label: "در حال بررسی",
      className: "badge--style bg-gray-400",
    },
    accepted: {
      label: "تایید شده",
      className: "badge--style bg-green-600",
    },
    rejected: {
      label: "رد شده",
      className: "badge--style bg-red-400",
    },
  };

  return (
    <div className="request--cart">
      <div className="space-y-4">
        <div className="font-semibold xl:text-xl text-balance">{titr}</div>
        <Info titr={"شرکت"} content={comapany} />
        <Info titr={"تاریخ ارسال"} content={date} />
      </div>

      <div className={`w-28 ${statusStyle[status]?.className}`}>
        {statusStyle[status]?.label}
      </div>
    </div>
  );
}

export default RequestStudent;
