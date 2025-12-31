function Textarea({
  label,
  placeholder,
  register = null,
  registerName,
  className,
  headerOpt,
  lableClassName,
  rows = 4,
}) {
  const selectProp = register != null ? register(registerName) : {};

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <div className="flex items-center gap-2 w-full">
        <label htmlFor={registerName} className={lableClassName}>
          {label}
        </label>
        {headerOpt}
      </div>
      <textarea
        {...selectProp}
        id={registerName}
        placeholder={placeholder}
        rows={rows}
        className={`resize-none w-full ${className}`}
      />
    </div>
  );
}

export default Textarea;
