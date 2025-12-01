import { QueryClient } from '@tanstack/react-query';
import { REACT_QUERY_CACHING_TIMES } from './constants';

const AppQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: REACT_QUERY_CACHING_TIMES.TEN_SECONDS,
      refetchOnWindowFocus: false,
    },
  },
});

export default AppQueryClient;
