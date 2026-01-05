function Input({
  type = "text",
  placeholder,
  label,
  register,
  registerName,
  className,
  lableClassName,
  errors, // اضافه کردن errors برای نمایش خطای هر فیلد
}) {
  // اگر register وجود داشت، متصلش کن، در غیر این صورت یک آبجکت خالی
  const inputProps = register ? register(registerName) : {};

  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <div className="flex justify-between items-center w-full">
        {/* از تگ label به جای h4 استفاده کنید تا برای مرورگر استاندارد باشد */}
        <label htmlFor={registerName} className={lableClassName}>
          {label}
        </label>
      </div>

      <input
        {...inputProps}
        id={registerName} // استفاده از نام فیلد به جای متن لیبل برای ID
        placeholder={placeholder}
        type={type}
        className={`${className} ${
          errors?.[registerName] ? "border-red-500 ring-1 ring-red-500" : ""
        }`}
      />

      {/* نمایش پیام خطا زیر هر اینپوت */}
      {errors?.[registerName] && (
        <span className="mt-1 text-red-500 text-xs">
          {errors[registerName]?.message}
        </span>
      )}
    </div>
  );
}

export default Input;
