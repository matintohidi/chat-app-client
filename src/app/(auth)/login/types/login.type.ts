import { LoginFormValidationSchema } from "@/app/(auth)/login/types/login.schema";
import { UserModel } from "@/contracts/auth";
import * as yup from "yup";

export type Login = yup.InferType<typeof LoginFormValidationSchema>;

export interface LoginUserModel {
  token: string;
  user?: UserModel;
}
