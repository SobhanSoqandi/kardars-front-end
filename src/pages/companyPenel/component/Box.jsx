// import React from "react";

// export default function Box({ titr, body , width }) {
//   return (
//     <div style={{ width : width }} className="flex flex-col justify-center border border-blue-100 items-center shadow-md shadow-gray-300 rounded-2xl h-[130px] grow">
//       <div className="font-bold text-blue-600 text-2xl 2xl:text-4xl">{titr}</div>
//       <div className="text-sm md:text-lg lg:text-sm 2xl:text-lg">{body}</div>
//     </div>
//   );
// }

export default function Box({ titr, body, width, icon }) {
  return (
    <div
      style={{ width }}
      className="flex items-center justify-between border border-blue-100 shadow-md shadow-gray-300 rounded-2xl h-[100px] sm:h-[110px] md:h-[120px] lg:h-[130px] px-3 sm:px-4 md:px-5 lg:px-6 grow"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        {icon}
      </div>

      <div className="text-right flex-1 mr-2 sm:mr-3 md:mr-4">
        <div className="font-bold text-blue-600 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          {titr}
        </div>
        <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
          {body}
        </div>
      </div>
    </div>
  );
}