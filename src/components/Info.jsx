export default function Info({ titr, content, icon }) {
  return (
    <div style={{ direction: "rtl" }} className="flex items-center gap-1">
      <div className="flex items-center gap-1 font-medium tag--style">
        {icon}
        {titr} :
      </div>
      <div className="text-[#64748b] tag--style">{content}</div>
    </div>
  );
}

