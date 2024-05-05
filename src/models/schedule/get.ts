export type ScheduleResponse = {
  code: number;
  message: string;
  data: Schedule[];
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
};
