import React from "react";

export default function Select({
  opt = [],
  register = null,
  height,
  name,
  fn,
  value,
  width,
  label,
}) {
  const selectProps = register != null ? register(name) : {};
  return (
    <div className="flex flex-col items-start gap-2" >

      <div className="flex justify-between items-center">
        <h4 htmlFor={label}>
          {label}
        </h4>
        {/* {headerOpt} */}
      </div>

      <select
        style={{ width: width, height: height }}
        value={value}
        onChange={(e) => fn(e.currentTarget.value)}
        {...selectProps}
        className="pr-2 input--style appearance-none"
      >
        {/* <option value="" hidden>
          Fillter{" "}
        </option> */}
        {opt.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
