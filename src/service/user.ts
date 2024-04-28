import { AddTourRequest, AddTourResponse } from "@/models/tour/add";
import { TourListResponse, TourResponse } from "@/models/tour/get";
import { User, UserListResponse } from "@/models/user/get";
import httpCLient, { baseURL } from "@/utils/httpClient";
import { UploadFile } from "antd";
import { RcFile } from "antd/es/upload";
import axios from "axios";

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
