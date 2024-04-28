import { AddTourRequest, AddTourResponse } from "@/models/tour/add";
import { TourListResponse, TourResponse } from "@/models/tour/get";
import { UserListResponse } from "@/models/user/get";
import httpCLient, { baseURL } from "@/utils/httpClient";
import { UploadFile } from "antd";
import { RcFile } from "antd/es/upload";
import axios from "axios";

const API_ENDPOINT = "/users";

export const getUser = (): Promise<UserListResponse> => {
  return httpCLient.get(`${API_ENDPOINT}`);
};
