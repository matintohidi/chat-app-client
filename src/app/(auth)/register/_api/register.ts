import {
  Register,
  RegisterUserModel,
} from "@/app/(auth)/register/types/register.type";
import { createData } from "@/core/http-service/http-service";
import { Problem } from "@/types/http-errors.interface";
import { useMutation } from "@tanstack/react-query";

const register = (model: Register): Promise<RegisterUserModel> =>
  createData<Register, RegisterUserModel>("/auth/user/register", model);

type UserRegisterOptions = {
  onSuccess?: (data: RegisterUserModel) => void;
  onError?: (error: Problem) => void;
};

export const useRegister = ({ onSuccess, onError }: UserRegisterOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: register,
    onSuccess: onSuccess,
    onError: onError,
  });

  return {
    submit,
    isPending,
  };
};
