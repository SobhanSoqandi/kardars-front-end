import React from "react";

export default function SelectGroup({ titr, children }) {
  return (
    <div>
      <div>{titr}</div>
      {children}
    </div>
  );
}
