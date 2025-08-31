"use client";

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { showNotificationWithDuration } from "@/store/slices/notification.slice";
import { setProfile } from "@/actions/auth";
import { SetProfileSchema } from "@/app/(auth)/set-profile/types/set-profile.schema";

interface SetProfileFormProps {
  children: (formProps: {
    selectedImage: string | null;
    selectedFile: File | null;
    fileInputRef: React.RefObject<HTMLInputElement | null>;
    dragActive: boolean;
    handleImageSelect: (file: File) => void;
    handleFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDrag: (e: React.DragEvent) => void;
    handleDrop: (e: React.DragEvent) => void;
    handleSave: () => void;
    isSubmitting: boolean;
  }) => React.ReactNode;
}

const SetProfileForm: React.FC<SetProfileFormProps> = ({ children }) => {
  const params = useSearchParams();
  const token = params.get("token");

  const [setProfileState, setProfileAction] = useActionState(setProfile, null);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    if (setProfileState && setProfileState.isSuccess) {
      dispatch(
        showNotificationWithDuration({
          message: `Profile updated successfully!`,
          type: "success",
        })
      );

      router.push("/dashboard");
    } else if (setProfileState && setProfileState.error) {
      dispatch(
        showNotificationWithDuration({
          message:
            setProfileState.error.message ||
            setProfileState.error.error ||
            "An error occurred",
          type: "error",
        })
      );
    }
  }, [setProfileState]);

  const handleImageSelect = async (file: File) => {
    if (file && file.type.startsWith("image/")) {
      await SetProfileSchema.validate({ profile: file });

      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageSelect(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleImageSelect(file);
    }
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("file", selectedFile!);
    formData.append("token", token!);

    startTransition(() => {
      setProfileAction(formData);
    });
  };

  return (
    <>
      {children({
        selectedImage,
        selectedFile,
        fileInputRef,
        dragActive,
        handleImageSelect,
        handleFileInput,
        handleDrag,
        handleDrop,
        handleSave: onSubmit,
        isSubmitting: isPending,
      })}
    </>
  );
};

export default SetProfileForm;
