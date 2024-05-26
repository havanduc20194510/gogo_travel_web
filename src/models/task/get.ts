export interface GetTaskResponse {
  code: number;
  message: string;
  data: Task[];
}

export interface Task {
  id: string;
  userId: string;
  email: string;
  phone: string;
  tourId: string;
  tourName: string;
  bookingTourId: string;
  taskName: string;
  taskDescription: string;
  coin: number;
  reward: string;
  taskDeadline: string;
  taskStatus: string;
}

export type SearchTaskRequest = {
  phone?: string;
  email?: string;
};
