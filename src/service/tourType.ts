import { GetTourTypeResponse } from "@/models/tourType/get";
import httpCLient from "@/utils/httpClient";

export const getTourTypes = (): Promise<GetTourTypeResponse> => {
  return httpCLient.get("/tour-type/get-all");
};
