import React from "react";
import { ChevronLeft, Lock } from "lucide-react";
import Link from "next/link";
import RegisterForm from "@/app/(auth)/register/components/form";

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-[#EFEFFD] to-indigo-50">
      {/* Mobile header */}
      <div className="flex items-center justify-between p-6 lg:hidden bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EFEFFD] hover:bg-indigo-100 transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-indigo-600" />
        </Link>
        <Link
          href="/login"
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
        >
          Login
        </Link>
      </div>

      {/* Form */}
      <div className="flex h-full">
        <div className="flex-1 lg:w-2/5 flex items-center justify-center p-6 lg:p-8 overflow-y-auto">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EFEFFD] rounded-2xl mb-6">
                <Lock className="w-8 h-8 text-indigo-600" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Welcome back
              </h1>
              <p className="text-gray-600 text-lg">
                Sign in to your account to continue
              </p>
            </div>

            <RegisterForm />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-secondary text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-gray-700 bg-white hover:bg-[#EFEFFD] hover:border-gray-300 transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
            </div>

            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden  bg-[url('/images/login.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute top-8 left-8 right-8 flex items-center justify-between z-20">
            <Link
              href="/"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-full border border-white/20 transition-all duration-200"
            >
              Login
            </Link>
          </div>

          <div className="relative z-10 flex items-center justify-center p-16">
            <div className="text-center text-white max-w-lg">
              <h2 className="text-4xl font-bold mb-6">Start your journey</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-12">
                Create your account and unlock access to powerful tools and
                features designed to help you succeed.
              </p>

              {/* Features */}
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/90">
                    Free account with premium features
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/90">24/7 customer support</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/90">
                    Secure and encrypted data
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
