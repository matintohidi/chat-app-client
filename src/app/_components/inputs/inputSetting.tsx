import { FunctionComponent } from "react";
// packages dependencies
import { ErrorMessage, Field } from "formik";
// redux
import { useAppSelector } from "@/store/hooks";

// props
interface InputProps {
  name: string;
  label: string;
  disable?: boolean;
  type?: string;
  inputClassName?: string;
  errorClassName?: string;
  labelClassName?: string;
  placeHolder?: string;
}

const InputSetting: FunctionComponent<InputProps> = ({
  name,
  label,
  disable = false,
  type = "text",
  inputClassName,
  errorClassName,
  labelClassName,
  placeHolder,
}) => {
  const { loading } = useAppSelector((state) => state.loading);

  return (
    <div className="font-InterRegular">
      <div className="flex flex-col items-start gap-1">
        {loading ? (
          <div className="w-full flex flex-col items-start gap-1">
            <div className="w-12 h-4 bg-slate-200 animate-pulse rounded"></div>
            <div className="w-full h-12 bg-slate-200 animate-pulse rounded-lg"></div>
          </div>
        ) : (
          <>
            <label htmlFor={name} className={`${labelClassName ?? ""} text-sm`}>
              {label}
            </label>
            {disable ? (
              <Field
                id={name}
                name={name}
                type={type}
                autoComplete={name}
                className={`${inputClassName ?? ""} w-full px-5 py-4 placeholder:text-gray-400 text-primaryText rounded-lg text-sm outline-none border border-gray-200 focus:border-primary transition duration-100`}
                placeholder={placeHolder}
                disabled
              />
            ) : (
              <Field
                id={name}
                name={name}
                type={type}
                autoComplete={name}
                className={`${inputClassName ?? ""} w-full px-5 py-4 placeholder:text-gray-400 text-primaryText rounded-lg text-sm outline-none border border-gray-200 focus:border-primary transition duration-100`}
                placeholder={placeHolder}
              />
            )}
          </>
        )}
      </div>
      <ErrorMessage
        name={name}
        className={`text-sm lg:text-base mt-2 text-red-500 ${errorClassName ?? ""}`}
        component="div"
      />
    </div>
  );
};

export default InputSetting;
