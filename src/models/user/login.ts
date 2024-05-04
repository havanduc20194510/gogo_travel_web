export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  code: number;
  message: string;
  data: User;
};

export type User = {
  authenticated: boolean;
  token: string;
  user: {
    id: string;
    email: string;
    password: string;
    username: string;
  };
};
