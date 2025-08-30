"use client";

import React, { useActionState, useTransition } from "react";
import InputAuth from "@/app/_components/inputs/inputAuth";
import { FormProvider, useForm } from "react-hook-form";
import { Login } from "@/app/(auth)/login/types/login.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "@/app/(auth)/login/types/login.schema";
import { useAppDispatch } from "@/store/hooks";
import { showNotificationWithDuration } from "@/store/slices/notification.slice";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, Lock, Mail } from "lucide-react";
import { login } from "@/actions/auth";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const [loginState, loginAction] = useActionState(login, undefined);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<Login>({
    resolver: yupResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // dispatch(
  //   showNotificationWithDuration({
  //     message: `Welcome back, ${user?.name}!`,
  //     type: "success",
  //   })
  // );

  // router.push("/dashboard");

  const onSubmit = async (values: Login) => {
    const formData = new FormData();

    formData.append("email", values.email);
    formData.append("password", values.password);

    dispatch(
      showNotificationWithDuration({
        message: "Logging in...",
        type: "info",
      })
    );

    startTransition(() => {
      loginAction(formData);
    });
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
          disabled={isPending}
          className={`
          w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent 
          rounded-xl text-white font-medium transition-all duration-200 mt-10
          ${
            isPending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-primary hover:shadow-lg hover:shadow-secondary active:scale-[0.98]"
          }
        `}
        >
          {isPending ? (
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
