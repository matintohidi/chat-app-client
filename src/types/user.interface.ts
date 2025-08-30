import { User } from "@/contracts/auth";

export interface UserToken extends User {
  accessToken: string;
}

export interface UserSession extends UserToken {}
