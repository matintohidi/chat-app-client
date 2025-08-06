import { Login, LoginUserModel } from "@/app/(auth)/login/types/login.type";
import { createData } from "@/core/http-service/http-serviec";
import { useMutation } from "@tanstack/react-query";

const login = (model: Login): Promise<LoginUserModel> =>
  createData<Login, LoginUserModel>("/auth/login", model);

type UserLoginOptions = {
  onSuccess?: (data: LoginUserModel) => void;
};

export const useLogin = ({ onSuccess }: UserLoginOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: login,
    onSuccess: onSuccess,
  });

  return {
    submit,
    isPending,
  };
};
