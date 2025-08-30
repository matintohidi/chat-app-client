import {
  SetProfile,
  SetProfileModel,
} from "@/app/(auth)/set-profile/types/set-profile.type";
import { createData } from "@/core/http-service/http-service";
import { useMutation } from "@tanstack/react-query";
import { AxiosHeaders } from "axios";

const setProfile = (model: SetProfile): Promise<SetProfileModel> => {
  const { file, token } = model;

  const form = new FormData();
  // Append empty file if no file is selected, matching the curl command behavior
  if (file) {
    form.append("file", file);
  } else {
    form.append("file", "");
  }

  const headers = new AxiosHeaders();
  headers.set("Authorization", `Bearer ${token}`);

  return createData<FormData, SetProfileModel>(
    "/user/set-profile",
    form,
    headers
  );
};

type SetProfileOptions = {
  onSuccess?: (data: SetProfileModel) => void;
};

export const useSetProfile = ({ onSuccess }: SetProfileOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: setProfile,
    onSuccess: onSuccess,
  });

  return {
    submit,
    isPending,
  };
};
