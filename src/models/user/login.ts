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
  user: UserData;
  token: string;
  authenticated: boolean;
}

export interface UserData {
  code: number;
  data: User;
}

export type User = {
  id: string;
  username: string;
  email: string;
  phone: string;
  address: string;
  roles?: string[] | null;
};
