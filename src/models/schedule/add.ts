export type CreateScheduleRequest = {
  timeInDays: string;
  title: string;
  tourId: string;
};

export type CreateScheduleDetailRequest = {
  tourScheduleId: number;
  timeLine: string;
  place: string;
  activity: string;
};
