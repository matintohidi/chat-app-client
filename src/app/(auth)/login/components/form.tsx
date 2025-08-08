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
import { showNotificationWithDuration } from "@/store/slices/notification.slice";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, Lock, Mail } from "lucide-react";

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

      dispatch(
        showNotificationWithDuration({
          message: `Welcome back, ${user?.name}!`,
          type: "success",
        })
      );

      router.push("/dashboard");
    },
  });

  const onSubmit = async (values: Login) => {
    const model: Login = {
      email: values.email,
      password: values.password,
    };

    dispatch(
      showNotificationWithDuration({
        message: "Logging in...",
        type: "info",
      })
    );

    login.submit(model);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <InputAuth
          label="Email"
          type="email"
          icon={
            <Mail className="w-5 h-5 group-focus-within:text-primary text-secondary-content" />
          }
          {...form.register("email")}
        />

        <InputAuth
          label="Password"
          type="password"
          inputClassName="mt-6"
          icon={
            <Lock className="w-5 h-5 group-focus-within:text-primary text-secondary-content" />
          }
          {...form.register("password")}
        />

        <button
          type="submit"
          disabled={login.isPending}
          className={`
          w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent 
          rounded-xl text-white font-medium transition-all duration-200 mt-10
          ${
            login.isPending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-primary hover:shadow-lg hover:shadow-secondary active:scale-[0.98]"
          }
        `}
        >
          {login.isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              Sign in
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
