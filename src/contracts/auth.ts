import { UserModel } from "@/lib/services";

export interface User extends UserModel {}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IPersonalInfoFormValues {
  name: string;
  phoneNumber: string;
  city: string;
  profile: string;
}

export interface ISecurityFormValues {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}
