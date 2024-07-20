import React from "react";
// packages dependencies
import { ErrorMessage , Field } from "formik";

// props
interface InputProps {
    name: string
    label: string
    type?: string
    inputClassName?: string
    errorClassName?: string
    labelClassName?: string
    placeHolder?: string
}

const InputSetting : React.FC<InputProps> = ({
    name,
    label,
    type= "text",
    inputClassName,
    errorClassName,
    labelClassName,
    placeHolder,
}) => {
    return (
        <div className="font-InterRegular">
            <div className="flex flex-col items-start gap-1">
                <label
                    htmlFor={name}
                    className={`${labelClassName ?? ""} text-sm`}
                >
                    {label}
                </label>
                <Field
                    id={name}
                    name={name}
                    type={type}
                    autoComplete={name}
                    className={`${inputClassName ?? ""} w-full px-5 py-4 placeholder:text-gray-400 text-primaryText rounded-lg text-sm outline-none border border-gray-200 focus:border-primary transition duration-100`}
                    placeholder={placeHolder}
                />
            </div>
            <ErrorMessage
                name={name}
                className={`text-sm lg:text-base mt-2 text-red-500 ${errorClassName ?? ""}`}
                component="div"
            />
        </div>
    )
}

export default InputSetting;