import { User } from "./get";

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  code: number;
  message: string;
  data: DataLogin;
};

export interface DataLogin {
  user: User;
  token: string;
  authenticated: boolean;
}
