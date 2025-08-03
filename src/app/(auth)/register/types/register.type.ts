import { RegisterFormValidationSchema } from "@/app/(auth)/register/types/register.schema";
import { UserModel } from "@/contracts/auth";
import * as yup from "yup";

export type Register = yup.InferType<typeof RegisterFormValidationSchema>;

export interface RegisterUserModel {
  token: string;
  user?: UserModel;
}
