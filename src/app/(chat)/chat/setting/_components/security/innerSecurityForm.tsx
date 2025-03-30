import React from "react";
import { Form, FormikProps } from "formik";
import InputSetting from "@/app/_components/inputs/inputSetting";
import { SecurityFormValuesInterface } from "@/contracts/auth";
import { useAppSelector } from "@/store/hooks";

const InnerSecurityForm = (props: FormikProps<SecurityFormValuesInterface>) => {
  const { loading } = useAppSelector((state) => state);

  return (
    <Form className="border-t">
      <div className="mt-6">
        <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-10">
          <InputSetting
            type="password"
            name="oldPassword"
            label="Old Password"
          />
          <InputSetting
            type="password"
            name="newPassword"
            label="New Password"
          />
          <InputSetting
            type="password"
            name="repeatNewPassword"
            label="Repeat New Password"
          />
        </div>

        <div>
          {loading.loading ? (
            <div className="mt-4 w-32 h-8 bg-slate-200 animate-pulse rounded-lg"></div>
          ) : (
            <button
              type="submit"
              className="mt-4 px-7 py-2.5 bg-primary text-white font-inter  rounded-lg text-xs"
            >
              Change Password
            </button>
          )}
        </div>
      </div>
    </Form>
  );
};

export default InnerSecurityForm;
