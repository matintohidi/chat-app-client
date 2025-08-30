import { RegisterFormSchema } from "@/app/(auth)/register/types/register.schema";
import { RegisterUserModel as RegisterUserI } from "@/lib/services";
import * as yup from "yup";

export type Register = yup.InferType<typeof RegisterFormSchema>;

export interface RegisterUserModel extends RegisterUserI {}
