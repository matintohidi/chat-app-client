import { UserModel } from "@/contracts/auth";

export type SetProfile = {
  file: File;
  token: string;
};

export interface SetProfileModel {
  user: UserModel;
  token: string;
}
