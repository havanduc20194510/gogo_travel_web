export type UserListResponse = User[];

export type User = {
  id: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  address: string;
};
