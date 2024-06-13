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


export interface GetTotalGuessStatisticsResponse {
  code: number;
  message: string;
  data: TotalGuessStatisticsData;
}

export interface TotalGuessStatisticsData {
  labels: string[];
  data: number[];
}

export interface GetTopPlaceStatisticsResponse {
  code: number;
  message: string;
  data: TopPlaceStatisticsData;
}

export interface TopPlaceStatisticsData {
  labels: string[];
  data: number[];
}