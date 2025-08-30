"use client";

import React, { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSetProfile } from "@/app/(auth)/set-profile/_api/set-profile";
import { useAppDispatch } from "@/store/hooks";
import { showNotificationWithDuration } from "@/store/slices/notification.slice";
import { SetProfile } from "@/app/(auth)/set-profile/types/set-profile.type";
import { setUser } from "@/store/slices/user.slice";

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

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleImageSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
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

  const setProfile = useSetProfile({
    onSuccess: (data) => {
      const { token, user } = data;

      // task: write with next auth
      console.log(token);

      dispatch(setUser(user));

      dispatch(
        showNotificationWithDuration({
          message: `Welcome, ${user?.name}! Your profile has been set successfully.`,
          type: "success",
        })
      );

      router.push("/dashboard");
    },
  });

  const handleSave = () => {
    const model: SetProfile = {
      file: selectedFile,
      token: token!,
    };

    setProfile.submit(model);
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
        handleSave,
        isSubmitting: setProfile.isPending,
      })}
    </>
  );
};

export default SetProfileForm;
