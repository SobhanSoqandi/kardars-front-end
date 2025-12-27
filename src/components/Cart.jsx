import React from "react";

export default function Cart({ children }) {
  return (
    <div className="shadow shadow-gray-300 p-6 rounded-xl w-fit">
      {children}
    </div>
  );
}
