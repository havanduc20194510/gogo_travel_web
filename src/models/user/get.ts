export type UserListResponse = {
  code: number;
  message: string;
  data?: User[];
};

export type User = {
  id: string;
  username: string;
  email: string;
  phone: string;
  address: string;
  roles?: string[] | null;
};

export type GetUserResponse = {
  code: number;
  message: string;
  data?: User;
};
