const inputClass = "form-input rounded-lg w-80 mb-8 disabled:bg-gray-100 disabled:cursor-not-allowed";
const labelClass = "block text-sm mb-2";

function TextInput({ name, title, value, onChange, isLoading }) {
  return (
    <>
      <label className={labelClass} htmlFor={name}>
        {title}
      </label>
      <input
        className={inputClass}
        type="text"
        name={name}
        id={name}
        disabled={isLoading}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default TextInput;
