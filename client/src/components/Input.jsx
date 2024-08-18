const Input = ({
  label,
  name,
  type = "text",
  isReq = false,
  placeholder,
  disabled,
}) => {
  return (
    <div className="mb-5">
      <label className="mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 placeholder-gray-400 text-dark disabled:bg-gray-200 focus:border-blue-500"
        placeholder=""
        name={name}
        required={isReq}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
