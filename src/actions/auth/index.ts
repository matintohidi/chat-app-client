"use server";

import { serverActionWrapper } from "@/actions/server-action-wrapper";
import { RegisterFormSchema } from "@/app/(auth)/register/types/register.schema";
import {
  Register,
  RegisterUserModel,
} from "@/app/(auth)/register/types/register.type";
import { signIn, signOut } from "@/auth";
import { createData } from "@/core/http-service/http-service";
import { Problem } from "@/types/http-errors.interface";
import { OperationResult } from "@/types/operation-result.type";
import { redirect } from "next/navigation";

export async function registerAction(
  formState: OperationResult<RegisterUserModel> | null,
  formData: FormData
) {
  try {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
    } as Register;

    await RegisterFormSchema.validate(data);

    return serverActionWrapper(
      async () =>
        await createData<Register, RegisterUserModel>(
          "/auth/user/register",
          data
        )
    );
  } catch (error) {
    console.error("Validation failed:", error);
  }

  redirect("/set-profile");
}

export async function login(state: Problem | undefined, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error: unknown) {
    return {
      error: "",
      statusCode: 0,
    } satisfies Problem;
  }
}

export async function logout() {
  try {
    await signOut();
  } catch (error: unknown) {
    console.error("Logout failed:", error);
  }
}
