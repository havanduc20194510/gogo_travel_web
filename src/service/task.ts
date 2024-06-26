import { CreateTaskRequest } from "@/models/task/add";
import { GetTaskResponse, SearchFormRequest } from "@/models/task/get";
import httpCLient from "@/utils/httpClient";

export const createTask = (request: CreateTaskRequest) => {
  return httpCLient.post("/task/create", request);
};

export const getAllTask = (): Promise<GetTaskResponse> => {
  return httpCLient.get("/user-task/get-all");
};

export const verifyTask = (userTaskId: string) => {
  return httpCLient.post(`/user-task/verify/${userTaskId}`, { userTaskId });
};

export const getTaskByPhoneOrEmail = (
  request?: SearchFormRequest
): Promise<GetTaskResponse> => {
  return httpCLient.get("/user-task/get-by-phone-or-email", request);
};

export const getMyTask = (): Promise<GetTaskResponse> => {
  return httpCLient.get("/user-task/get-my-tasks");
};
