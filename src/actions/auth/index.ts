"use server";

import { serverActionWrapper } from "@/actions/server-action-wrapper";
import { RegisterFormSchema } from "@/app/(auth)/register/types/register.schema";
import {
  Register,
  RegisterUserModel,
} from "@/app/(auth)/register/types/register.type";
import { SetProfileSchema } from "@/app/(auth)/set-profile/types/set-profile.schema";
import { SetProfileModel } from "@/app/(auth)/set-profile/types/set-profile.type";
import { signIn, signOut } from "@/auth";
import { createData } from "@/core/http-service/http-service";
import { Problem } from "@/types/http-errors.interface";
import { OperationResult } from "@/types/operation-result.type";
import { AxiosHeaders } from "axios";

export async function registerAction(
  formState: OperationResult<RegisterUserModel> | null,
  formData: FormData
): Promise<OperationResult<RegisterUserModel>> {
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
    return {
      isSuccess: false,
      error: error as Problem,
    };
  }
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

export async function setProfile(
  formState: OperationResult<SetProfileModel> | null,
  formData: FormData
): Promise<OperationResult<SetProfileModel>> {
  try {
    const token = formData.get("token");

    if (formData.get("file")) {
      await SetProfileSchema.validate({ profile: formData.get("file") });
    }

    const headers = new AxiosHeaders();
    headers.set("Authorization", `Bearer ${token}`);

    return serverActionWrapper(
      async () =>
        await createData<FormData, SetProfileModel>(
          "/user/set-profile",
          formData,
          headers
        )
    );
  } catch (error: unknown) {
    return {
      isSuccess: false,
      error: error as Problem,
    };
  }
}

export async function logout() {
  try {
    await signOut();
  } catch (error: unknown) {
    console.error("Logout failed:", error);
  }
}
