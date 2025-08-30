import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {},
  providers: [],
} satisfies NextAuthConfig;
