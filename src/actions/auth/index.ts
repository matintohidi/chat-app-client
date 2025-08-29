"use server";

import { serverActionWrapper } from "@/actions/server-action-wrapper";
import { RegisterFormSchema } from "@/app/(auth)/register/types/register.schema";
import {
  Register,
  RegisterUserModel,
} from "@/app/(auth)/register/types/register.type";
import { createData } from "@/core/http-service/http-service";
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
