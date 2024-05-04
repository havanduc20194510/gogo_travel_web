export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  code: number;
  message: string;
  data: {
    id: string;
    username: string;
    password: string;
    email: string;
  };
};
