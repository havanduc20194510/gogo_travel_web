export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  code: number;
  message: string;
  data: {
    authenticated: boolean;
  };
};
