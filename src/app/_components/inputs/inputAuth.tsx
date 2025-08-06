import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";

// props
interface InputProps {
  name: string;
  label: string;
  type?: string;
  inputClassName?: string;
  errorClassName?: string;
  labelClassName?: string;
  rules?: RegisterOptions;
}

const InputAuth: React.FC<InputProps> = ({
  name,
  type = "text",
  label,
  inputClassName,
  errorClassName,
  labelClassName,
  rules,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="relative">
        <input
          id={name}
          type={type}
          autoComplete={name}
          className={`peer block w-full appearance-none border-0 border-b border-[#AAAAAA] bg-transparent py-2.5 px-0 text-sm text-black focus:border-primary focus:outline-none focus:ring-0 ${inputClassName ?? ""}`}
          placeholder=" "
          {...register(name, rules)}
        />
        <label
          htmlFor={name}
          className={`absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm lg:text-base text-[#AAAAAA] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:text-xl ${labelClassName ?? ""}`}
        >
          {label}
        </label>
      </div>
      {errors[name] && (
        <div
          className={`text-sm lg:text-base mt-2 text-red-500 ${errorClassName ?? ""} font-light`}
        >
          {errors[name]?.message as string}
        </div>
      )}
    </div>
  );
};

export default InputAuth;
