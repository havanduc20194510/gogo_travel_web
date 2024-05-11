import { User } from "./get";

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  code: number;
  message: string;
  data: User;
};
