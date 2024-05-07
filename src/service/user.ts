import { User, UserListResponse } from "@/models/user/get";
import { LoginRequest, LoginResponse } from "@/models/user/login";
import { RegisterRequest, RegisterResponse } from "@/models/user/register";
import httpCLient from "@/utils/httpClient";

const API_ENDPOINT = "/users";

export const getUser = (): Promise<UserListResponse> => {
  return httpCLient.get(`${API_ENDPOINT}`);
};

export const getUserById = (id: string): Promise<User> => {
  return httpCLient.get(`${API_ENDPOINT}/${id}`);
};

export const editUser = (
  id: string,
  request: Omit<User, "id">
): Promise<User> => {
  return httpCLient.put(`${API_ENDPOINT}/${id}`, request);
};

export const login = (request: LoginRequest): Promise<LoginResponse> => {
  return httpCLient.post(`/auth/token`, request);
};

export const register = (
  request: RegisterRequest
): Promise<RegisterResponse> => {
  return httpCLient.post(`/users/create`, request);
};

export const tokenCheck = (request: {
  token: string;
}): Promise<RegisterResponse> => {
  return httpCLient.post(`/auth/introspect`, request);
};
