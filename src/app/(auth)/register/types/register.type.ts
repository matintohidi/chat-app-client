import { RegisterFormSchema } from "@/app/(auth)/register/types/register.schema";
import { UserModel } from "@/contracts/auth";
import * as yup from "yup";

export type Register = yup.InferType<typeof RegisterFormSchema>;

export interface RegisterUserModel {
  token: string;
  user?: UserModel;
}
