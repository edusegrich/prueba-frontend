export type RequestOptions = RequestInit & {
  baseUrl?: string;
  body?: Record<string, unknown>;
  queryParams?: Record<string, unknown>;
};
