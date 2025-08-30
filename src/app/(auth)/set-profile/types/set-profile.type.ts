import { SetProfileModel as SetProfileI } from "@/lib/services";

export type SetProfile = {
  file: File | null;
  token: string;
};

export interface SetProfileModel extends SetProfileI {}
