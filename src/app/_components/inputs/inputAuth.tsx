"use client";

import React, { useState } from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";

// props
interface InputProps {
  name: string;
  label: string;
  type?: string;
  inputClassName?: string;
  errorClassName?: string;
  labelClassName?: string;
  icon?: React.ReactNode;
  rules?: RegisterOptions;
}

const InputAuth: React.FC<InputProps> = ({
  name,
  type = "text",
  label,
  inputClassName,
  errorClassName,
  labelClassName,
  icon,
  rules,
}) => {
  const [hasValue, setHasValue] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  return (
    <div className="relative group ">
      {icon && (
        <span
          className={`
    absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-none 
    transition-opacity duration-200
    opacity-0 ${hasValue ? "opacity-100" : " group-focus-within:opacity-100"}
  `}
        >
          {icon}
        </span>
      )}

      <input
        id={name}
        type={type}
        autoComplete={name}
        className={`peer block w-full appearance-none border-0 border-b border-[#AAAAAA] bg-transparent py-2.5 pr-0 text-sm text-primary-content focus:border-primary focus:outline-none focus:ring-0 ${inputClassName ?? ""} ${icon ? "pl-8" : "pl-0"}`}
        placeholder=" "
        {...register(name, {
          ...rules,
          onChange: (e) => {
            setHasValue(e.target.value.length > 0);
          },
          onBlur: () => {
            if (!hasValue) {
              setHasValue(false);
            }
          },
        })}
      />
      <label
        htmlFor={name}
        className={`absolute top-3 z-10 origin-[0] -translate-y-6 scale-80 transform text-sm lg:text-secondary-content text-[#AAAAAA] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-7 peer-focus:scale-70 peer-focus:text-primary peer-focus:text-xl ${labelClassName ?? ""}`}
      >
        {label}
      </label>
      {errors[name] && (
        <div
          className={`text-sm mt-1 text-error ${errorClassName ?? ""} font-light`}
        >
          {errors[name]?.message as string}
        </div>
      )}
    </div>
  );
};

export default InputAuth;
