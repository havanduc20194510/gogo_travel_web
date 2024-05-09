import { CreateDepartureRequest } from "@/models/departure/add";
import { AddTourRequest, AddTourResponse } from "@/models/tour/add";
import {
  TourListResponse,
  TourResponse,
  TourSearchRequest,
} from "@/models/tour/get";
import httpCLient, { baseURL } from "@/utils/httpClient";
import { UploadFile } from "antd";
import { RcFile } from "antd/es/upload";
import axios from "axios";

const API_ENDPOINT = "/tour";

export const getTours = (): Promise<TourListResponse> => {
  return httpCLient.get(`${API_ENDPOINT}/list`);
};

export const tourSearch = (
  request: TourSearchRequest
): Promise<TourListResponse> => {
  return httpCLient.get(`${API_ENDPOINT}/search/pagination`, request);
};

export const addTour = (request: AddTourRequest): Promise<AddTourResponse> => {
  return httpCLient.post(`${API_ENDPOINT}/create`, request);
};

export const uploadTourImage = async (
  tourId: string,
  fileList: UploadFile[]
) => {
  if (fileList.length) {
    const formDataToSend = new FormData();

    formDataToSend.append("images", fileList[0].originFileObj as RcFile);

    await axios.post(`${baseURL}/tour/upload-image/${tourId}`, formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
};

export const getTour = (id: string): Promise<TourResponse> => {
  return httpCLient.get(`${API_ENDPOINT}/${id}`);
};

export const addDepartureTime = (
  request: CreateDepartureRequest
): Promise<AddTourResponse> => {
  return httpCLient.post(`/departure-time/create`, request);
};

export const increaseView = (tourId: string) => {
  return httpCLient.put(`/tour/increase-view/${tourId}`, { tourId });
};
