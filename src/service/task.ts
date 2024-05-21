import { CreateTaskRequest } from "@/models/task/add";
import { GetTaskResponse } from "@/models/task/get";
import httpCLient from "@/utils/httpClient";

export const createTask = (request: CreateTaskRequest) => {
  return httpCLient.post("/task/create", request);
};

export const getAllTask = (): Promise<GetTaskResponse> => {
  return httpCLient.get("/user-task/get-all");
};

export const verifyTask = (userTaskId: string) => {
  return httpCLient.post(`/user-task/verify`, { userTaskId });
};
