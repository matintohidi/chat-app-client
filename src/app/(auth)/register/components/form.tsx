"use client";

import React, { useEffect } from "react";
import InputAuth from "@/app/_components/inputs/inputAuth";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slices/user.slice";
import { showNotificationWithDuration } from "@/store/slices/notification.slice";
import { useRouter } from "next/navigation";
import { Register } from "@/app/(auth)/register/types/register.type";
import { RegisterFormSchema } from "@/app/(auth)/register/types/register.schema";
import { ArrowRight, Loader2, Lock, Mail, User } from "lucide-react";
import { registerAction } from "@/actions/auth";
import { useActionState, useTransition } from "react";

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const [formState, action] = useActionState(registerAction, null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<Register>({
    resolver: yupResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  useEffect(() => {
    if (formState && !formState.isSuccess && formState.error) {
      dispatch(
        showNotificationWithDuration({
          message: formState.error?.message!,
          type: "error",
        })
      );
    } else if (formState && formState.isSuccess) {
      dispatch(
        showNotificationWithDuration({
          message: `Welcome, ${formState.response?.user?.name}! Please set up your profile.`,
          type: "success",
        })
      );

      dispatch(setUser(formState.response?.user!));

      router.push("/set-profile?token=" + formState.response?.token);
    }
  }, [formState]);

  const onSubmit = async (values: Register) => {
    const formData = new FormData();

    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("name", values.name);

    dispatch(
      showNotificationWithDuration({
        message: "Creating your account...",
        type: "info",
      })
    );

    startTransition(() => {
      action(formData);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <InputAuth
          label="Full Name"
          type="text"
          {...form.register("name")}
          icon={
            <User className="w-5 h-5 group-focus-within:text-primary text-secondary-content" />
          }
        />

        <InputAuth
          label="Email"
          type="email"
          icon={
            <Mail className="w-5 h-5 group-focus-within:text-primary text-secondary-content" />
          }
          inputClassName="mt-6"
          {...form.register("email")}
        />

        <InputAuth
          label="Password"
          type="password"
          icon={
            <Lock className="w-5 h-5 group-focus-within:text-primary text-secondary-content" />
          }
          inputClassName="mt-6"
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
              Creating Account...
            </>
          ) : (
            <>
              Creating Account
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
