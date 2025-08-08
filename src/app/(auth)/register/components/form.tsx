"use client";

import React from "react";
import InputAuth from "@/app/_components/inputs/inputAuth";
import { useCookies } from "react-cookie";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slices/user.slice";
import { Notification } from "@/types/notification.interface";
import { showNotification } from "@/store/slices/notification.slice";
import { useRouter } from "next/navigation";
import { Register } from "@/app/(auth)/register/types/register.type";
import { RegisterFormSchema } from "@/app/(auth)/register/types/register.schema";
import { useRegister } from "@/app/(auth)/register/_api/register";

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const [_, setCookie] = useCookies();
  const router = useRouter();

  const form = useForm<Register>({
    resolver: yupResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const register = useRegister({
    onSuccess: (data) => {
      const { token, user } = data;

      setCookie("set-profile-token", token);

      dispatch(setUser(user));

      dispatch(
        showNotification({
          message: `Welcome, ${user?.name}! Your account has been created successfully.`,
          type: "success",
        })
      );

      router.push("/set-profile");
    },
  });

  const onSubmit = async (values: Register) => {
    const model: Register = {
      email: values.email,
      password: values.password,
      name: values.name,
    };

    dispatch(
      showNotification({
        message: "Creating your account...",
        type: "info",
      })
    );

    console.log(model);

    register.submit(model);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <InputAuth label="Name" type="text" {...form.register("name")} />

        <InputAuth label="Email" type="email" {...form.register("email")} />

        <InputAuth
          label="Password"
          type="password"
          {...form.register("password")}
        />

        <button
          type="submit"
          disabled={register.isPending}
          className="w-full xl:py-[12px] py-[8px] bg-primary text-white rounded-[36px] mt-14"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
