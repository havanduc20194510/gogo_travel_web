import { CreateTaskRequest } from "@/models/task/add";
import httpCLient from "@/utils/httpClient";

export const createTask = (request: CreateTaskRequest) => {
  return httpCLient.post("/task/create", request);
};
