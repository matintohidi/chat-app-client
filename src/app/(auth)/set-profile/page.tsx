"use client";

import dynamic from "next/dynamic";
import { Camera, Check, ChevronLeft, Upload, User } from "lucide-react";
import Link from "next/link";
import React from "react";
const SetProfileForm = dynamic(() => import("./components/form"), {
  ssr: false,
});

const SetProfilePage: React.FC = () => {
  return (
    <SetProfileForm>
      {({
        selectedImage,
        fileInputRef,
        dragActive,
        handleFileInput,
        handleDrag,
        handleDrop,
        handleSave,
        isSubmitting,
      }) => (
        <div className="lg:flex h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-[#EFEFFD] to-indigo-50">
          <div className="flex items-center justify-between p-6 lg:hidden bg-white/80 backdrop-blur-sm border-b border-gray-100">
            <Link
              href="/register"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EFEFFD] hover:bg-indigo-100 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-indigo-600" />
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-2.5 text-indigo-600 hover:text-indigo-700 text-sm font-medium transition-colors duration-200"
            >
              Skip
            </Link>
          </div>

          <div className="flex-1 flex h-full">
            <div className="flex-1 lg:w-2/5 flex items-center justify-center p-6 lg:p-8">
              <div className="w-full max-w-md space-y-8">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EFEFFD] rounded-2xl mb-6">
                    <Camera className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Set your profile photo
                  </h1>
                  <p className="text-gray-600 text-lg">
                    Add a photo to help others recognize you (Optional)
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-[#EFEFFD] border-4 border-white shadow-lg overflow-hidden">
                        {selectedImage ? (
                          <img
                            src={selectedImage}
                            alt="Profile preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <User className="w-12 h-12 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute bottom-0 right-0 w-10 h-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                      >
                        <Camera className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div
                    className={`
                      relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200
                      ${
                        dragActive
                          ? "border-indigo-500 bg-indigo-50"
                          : "border-gray-300 hover:border-indigo-400 hover:bg-[#EFEFFD]"
                      }
                    `}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileInput}
                      className="hidden"
                    />

                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <Upload className="w-12 h-12 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-900 mb-2">
                          Drop your photo here, or{" "}
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="text-indigo-600 hover:text-indigo-700 font-medium"
                          >
                            browse
                          </button>
                        </p>
                        <p className="text-sm text-gray-500">
                          Supports: JPG, PNG, GIF up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/dashboard"
                      className="text-center flex-1 py-3 px-4 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-[#EFEFFD] hover:border-gray-300 transition-all duration-200"
                    >
                      Skip for now
                    </Link>
                    <button
                      onClick={handleSave}
                      disabled={isSubmitting}
                      className={`
                        flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-transparent 
                        rounded-xl text-white font-medium transition-all duration-200
                        ${
                          isSubmitting
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]"
                        }
                      `}
                    >
                      <Check className="w-5 h-5" />
                      {isSubmitting
                        ? "Saving..."
                        : selectedImage
                          ? "Save & Continue"
                          : "Continue without photo"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-row lg:w-3/5 relative overflow-hidden bg-[url('/images/set-profile.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute top-8 right-8 flex items-center justify-between z-10">
              <Link
                href="/dashboard"
                className="text-center px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-full border border-white/20 transition-all duration-200"
              >
                Skip
              </Link>
            </div>

            <div className="relative z-10 flex items-center justify-center p-16">
              <div className="text-center text-white max-w-lg">
                <h2 className="text-4xl font-bold mb-6">
                  Complete your profile
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-12">
                  Adding a profile photo helps build trust and makes your
                  account more personal and recognizable.
                </p>

                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90">
                      Build trust with other users
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90">
                      Personalize your experience
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90">
                      Easy recognition in conversations
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
          </div>
        </div>
      )}
    </SetProfileForm>
  );
};

export default SetProfilePage;
