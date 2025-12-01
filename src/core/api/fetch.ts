import camelcaseKeys from 'camelcase-keys';
import { BASE_URL } from './constants';
import { Method } from './methods';
import type { RequestOptions } from './request';

const getUri = (params: {
  url: string;
  queryParams: RequestOptions['queryParams'];
  baseUrl?: string;
}): string => {
  const { url, queryParams, baseUrl } = params;
  const uri = (baseUrl ?? BASE_URL) + url;

  const searchParams = new URLSearchParams();

  if (queryParams) {
    Object.keys(queryParams).forEach((key) => {
      searchParams.append(key, String((queryParams as Record<string, string>)[key]));
    });
  }

  return queryParams ? `${uri}?${searchParams}` : uri;
};

const commonFetch = async <T>(url: string, options?: RequestOptions) => {
  const uri = getUri({ url, queryParams: options?.queryParams, baseUrl: options?.baseUrl });
  const result = await fetch(uri, {
    ...options,
  });
  const data = await result.json();
  return camelcaseKeys(data, { deep: true }) as T;
};

export const get = async <T>(url: string, options: RequestOptions) => commonFetch<T>(url, options);

export const post = async <T>(url: string, options: RequestOptions) =>
  commonFetch<T>(url, { ...options, method: Method.Post });

export const put = async <T>(url: string, options: RequestOptions) =>
  commonFetch<T>(url, { ...options, method: Method.Put });

export const patch = async <T>(url: string, options: RequestOptions) =>
  commonFetch<T>(url, { ...options, method: Method.Patch });

export const remove = async <T>(url: string, options: RequestOptions) =>
  commonFetch<T>(url, { ...options, method: Method.Delete });
