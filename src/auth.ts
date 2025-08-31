import { Login, LoginUserModel } from "@/app/(auth)/login/types/login.type";
import { authConfig } from "@/configs/auth.config";
import { createData, readData } from "@/core/http-service/http-service";
import NextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import { UserSession, UserToken } from "@/types/user.interface";
import { JWT } from "next-auth/jwt";
import { User } from "@/contracts/auth";
import { AxiosHeaders } from "axios";

declare module "next-auth" {
  interface User extends UserToken {}

  interface Session {
    user: UserSession;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: UserToken;
  }
}

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProviders({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
        token: { label: "token", type: "text" },
      },
      async authorize(credentials) {
        try {
          console.log(credentials.token);
          if (credentials?.token) {
            const headers = new AxiosHeaders();
            headers.set(
              "Authorization",
              `Bearer ${credentials.token as string}`
            );

            const user = await readData<User>("/auth/user/me", headers);

            return {
              accessToken: credentials.token as string,
              ...user,
            };
          }

          const res = await createData<Login, LoginUserModel>(
            "/auth/user/login",
            {
              email: credentials.email as string,
              password: credentials.password as string,
            }
          );

          return {
            accessToken: res.token,
            ...res.user,
          };
        } catch (error: unknown) {
          throw new Error(error as string);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user as UserToken;
      }

      return token;
    },
    async session({ session, token }) {
      Object.assign(session.user, token.user ?? {});

      return session;
    },
  },
});
