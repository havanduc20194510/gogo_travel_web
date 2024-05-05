import {
  CreateScheduleDetailRequest,
  CreateScheduleRequest,
} from "@/models/schedule/add";
import { ScheduleResponse } from "@/models/schedule/get";
import httpCLient from "@/utils/httpClient";

export const getSchedule = (tourId: string): Promise<ScheduleResponse> => {
  return httpCLient.get(`/tour-schedule/list/${tourId}`);
};

export const createSchedule = (request: CreateScheduleRequest) => {
  return httpCLient.post("/tour-schedule/create", request);
};

export const createScheduleDetail = (request: CreateScheduleDetailRequest) => {
  return httpCLient.post("/schedule-detail/create", request);
};
