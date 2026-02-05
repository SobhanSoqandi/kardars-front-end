export default function Select({
  opt = [],
  register,
  name,
  width,
  height,
  label,
}) {
  return (
    <div className="flex flex-col items-start gap-2">
      <label>{label}</label>

      <select
        style={{ width, height }}
        {...register(name)}
        className="pr-2 appearance-none input--style"
      >
        <option value="">انتخاب کنید</option>
        {opt.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
