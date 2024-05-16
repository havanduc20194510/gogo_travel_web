export type CreateTaskRequest = {
  tourScheduleId: number;
  name: string;
  description: string;
  coin: number;
  reward: string;
  taskTypeName: string;
};
