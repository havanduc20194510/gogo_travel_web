export type TourListResponse = {
  code: number;
  message: string;
  data: Tour[];
};

export type Tour = {
  tourId: string;
  name: string;
  adultPrice: number;
  childPrice: number;
  babyPrice: number;
  unit: string;
  description: string;
  numberOfDays: number;
  numberOfNights: number;
  vehicle: string;
  departureLocation: string;
  hotelStar: number;
  numberOfSeats: number;
  availableSeats: number;
  status: string;
  note: string;
  tourType: {
    id: number;
    name: string;
  };
  images?: Image[];
  departureTimes?: [
    {
      id: number;
      startDate: string;
    }
  ];
  schedules: Schedule[];
};

export type Image = {
  id: number;
  url?: string;
};

export type Schedule = {
  id: number;
  timeInDays: string;
  title: string;
  scheduleDetail: ScheduleDetail[];
  task: {
    id: number;
    name: string;
    description: string;
    coin: number;
    reward: string;
    deadline: string;
    status: string;
    taskType: {
      id: number;
      name: string;
    };
  };
};

export type ScheduleDetail = {
  id: number;
  timeLine: string;
  place: string;
  activity: string;
  task: {
    id: number;
    name: string;
    description: string;
    coin: number;
    reward: string;
    deadline: string;
    status: string;
    taskType: {
      id: number;
      name: string;
    };
  };
};

export type TourResponse = {
  code: number;
  message: string;
  data: Tour;
};

export type TourSearchRequest = {
  destination: string;
  departureLocation: string;
  startDate: string;
  numberOfDay: string;
  offset?: number;
  pageSize?: number;
};
