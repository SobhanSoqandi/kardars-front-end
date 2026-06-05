function Input({
  type = "text",
  placeholder = "",
  label,
  register = null,
  registerName,
  className = "",
  lableClassName = "",
  errors = {},
  validation = {},
  ...props
}) {
  const registerProp = register && registerName ? register(registerName, validation) : {};
  
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      {label && (
        <div className="flex justify-between items-center w-full">
          <label htmlFor={registerName} className={lableClassName}>
            {label}
          </label>
        </div>
      )}
      <input
        {...registerProp}
        id={registerName}
        placeholder={placeholder}
        type={type}
        className={`${className} ${errors[registerName] ? "border-red-500" : ""}`}
        {...props}
      />
      {errors[registerName] && (
        <p className="text-red-500 text-sm mt-1 text-right">
          {errors[registerName]?.message}
        </p>
      )}
    </div>
  );
}

export default Input;