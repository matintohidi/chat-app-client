import { LoginFormSchema } from "@/app/(auth)/login/types/login.schema";
import { LoginUserModel as LoginUserI } from "@/lib/services";
import * as yup from "yup";

export type Login = yup.InferType<typeof LoginFormSchema>;

export interface LoginUserModel extends LoginUserI {}
