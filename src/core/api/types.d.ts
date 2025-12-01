export type PaginatedDto<T> = {
  items: T[];
  incompleteResults: boolean;
  totalCount: number;
};
