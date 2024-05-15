import { Tour } from "../tour/get";

export interface GetBookingResponse {
  code: number;
  message: string;
  data?: Booking[];
}

export interface Booking {
  id: string;
  tour: Tour;
  user: User;
  email: string;
  phone: string;
  startDate: string;
  numberOfAdults: number;
  numberOfChildren: number;
  numberOfBabies: number;
  note: string;
  bookingDate: string;
  total: number;
  bookingStatus: string;
}

export interface TaskTypeOrTourType {
  id: number;
  name: string;
}
export interface ImagesEntity {
  id: number;
  url: string;
}
export interface DepartureTimesEntity {
  id: number;
  startDate: string;
}
export interface SchedulesEntity {
  id: number;
  timeInDays: string;
  title: string;
  scheduleDetail?: ScheduleDetailEntity[] | null;
  task: Task;
}
export interface ScheduleDetailEntity {
  id: number;
  timeLine: string;
  place: string;
  activity: string;
}
export interface Task {
  id: number;
  name: string;
  description: string;
  coin: number;
  reward: string;
  deadline: string;
  status: string;
  taskType: TaskTypeOrTourType;
}
export interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  address: string;
  roles?: string[] | null;
}

export interface GetBookingDetailResponse {
  code: number;
  message: string;
  data: Booking;
}
