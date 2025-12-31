import React from "react";

export default function Select({
  opt = [],
  register = null,
  height,
  name,
  fn,
  value,
  width,
}) {
  const selectProps = register != null ? register(name) : {};
  return (
    <div>
      <select
        style={{ width: width, height: height }}
        value={value}
        onChange={(e) => fn(e.currentTarget.value)}
        {...selectProps}
        className="pr-2 border border-gray-300 rounded-md appearance-none"
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
