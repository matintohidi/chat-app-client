export interface UserModel {
  accessLevel?: "admin" | "user" | "all";
  city?: string;
  createdAt?: string;
  createdById?: string;
  deletedAt?: string;
  deletedById?: string;
  email: string;
  id?: string;
  name: string;
  phoneNumber: string;
  profile?: string;
  updatedAt?: string;
  updatedById?: string;
}

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
