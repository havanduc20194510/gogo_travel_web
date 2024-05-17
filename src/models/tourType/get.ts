export interface GetTourTypeResponse {
  code: number;
  message: string;
  data: TourType[];
}
export interface TourType {
  id: number;
  name: string;
}
