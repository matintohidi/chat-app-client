"use client";

import React from "react";
import { Form, FormikProps } from "formik";
import { LoginFormValuesInterface } from "@/contracts/auth";
import InputAuth from "@/app/_components/inputs/inputAuth";

const InnerLoginForm = (props: FormikProps<LoginFormValuesInterface>) => {
  return (
    <Form>
      <div className="space-y-10">
        <InputAuth name="email" label="Email" />

        <InputAuth name="password" label="Password" type="password" />
      </div>

      <button
        type="submit"
        className="w-full xl:py-[12px] py-[8px] bg-primary text-white rounded-[36px] mt-14"
      >
        Login
      </button>
    </Form>
  );
};

export default InnerLoginForm;
