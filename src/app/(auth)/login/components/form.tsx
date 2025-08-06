"use client";

import React from "react";
import InputAuth from "@/app/_components/inputs/inputAuth";
import { useCookies } from "react-cookie";
import { FormProvider, useForm } from "react-hook-form";
import { Login } from "@/app/(auth)/login/types/login.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "@/app/(auth)/login/types/login.schema";
import { useLogin } from "@/app/(auth)/login/_api/login";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slices/user.slice";
import { Notification } from "@/types/notification.interface";
import { showNotification } from "@/store/slices/notification.slice";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const [_, setCookie] = useCookies();
  const router = useRouter();

  const form = useForm<Login>({
    resolver: yupResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = useLogin({
    onSuccess: (data) => {
      const { token, user } = data;

      setCookie("token", token);

      dispatch(setUser(user));

      const notification: Omit<Notification, "id"> = {
        message: `Welcome back, ${user?.name}!`,
        type: "success",
      };

      dispatch(showNotification(notification));

      router.push("/dashboard");
    },
  });

  const onSubmit = async (values: Login) => {
    const model: Login = {
      email: values.email,
      password: values.password,
    };

    dispatch(
      showNotification({
        message: "Logging in...",
        type: "info",
      })
    );

    login.submit(model);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <InputAuth label="Email" type="email" {...form.register("email")} />

        <InputAuth
          label="Password"
          type="password"
          {...form.register("password")}
        />

        <button
          type="submit"
          disabled={login.isPending}
          className="w-full xl:py-[12px] py-[8px] bg-primary text-white rounded-[36px] mt-14"
        ></button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
