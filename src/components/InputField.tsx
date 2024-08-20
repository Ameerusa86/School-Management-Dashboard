import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-sm font-semibold text-gray-600">{label}</label>
      <input
        type={type}
        {...register(name)}
        className={`ring-[1.5px] ring-gray-300 p-3 rounded-md text-sm w-full transition-all duration-300 
          focus:ring-blue-500 focus:border-blue-500 ${
            error ? "ring-red-400" : "ring-gray-300"
          }`}
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-500 mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default InputField;
