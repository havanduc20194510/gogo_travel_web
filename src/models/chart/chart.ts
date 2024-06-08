export interface GetMonthlyTotalResponse {
  code: number;
  message: string;
  data: number[];
}

export interface GetTaskStatusStatisticsResponse {
  code: number;
  message: string;
  data: TaskStatusStatisticsData;
}

export interface TaskStatusStatisticsData {
  labels: string[];
  data: number[];
}
