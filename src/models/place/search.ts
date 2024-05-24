import { Place } from "./get";

export type SearchPlaceRequest = {
  name?: string;
  address?: string;
  activities?: string;
  offset?: number;
  pageSize?: number;
};

export interface SearchPlaceResponse {
  code: number;
  message: string;
  data: Data;
};

export interface Data {
  content: Place[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
export interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

