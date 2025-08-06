import { LoginFormSchema } from "@/app/(auth)/login/types/login.schema";
import { UserModel } from "@/contracts/auth";
import * as yup from "yup";

export type Login = yup.InferType<typeof LoginFormSchema>;

export interface LoginUserModel {
  token: string;
  user?: UserModel;
}
