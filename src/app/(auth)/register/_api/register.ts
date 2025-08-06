import {
  Register,
  RegisterUserModel,
} from "@/app/(auth)/register/types/register.type";
import { createData } from "@/core/http-service/http-serviec";
import { useMutation } from "@tanstack/react-query";

const register = (model: Register): Promise<RegisterUserModel> =>
  createData<Register, RegisterUserModel>("/auth/register", model);

type UserRegisterOptions = {
  onSuccess?: (data: RegisterUserModel) => void;
};

export const useRegister = ({ onSuccess }: UserRegisterOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: register,
    onSuccess: onSuccess,
  });

  console.log("Registering user:", isPending);

  return {
    submit,
    isPending,
  };
};
