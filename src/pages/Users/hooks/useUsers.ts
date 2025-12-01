import { get, ROUTES } from '@core/api';
import type { PaginatedDto } from '@core/api/types';
import useUsersStore from '@core/store';
import type { UserDto } from '@core/store/users/users.types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';

export const useUsers = () => {
  const users = useUsersStore((s) => s.users);
  const setUsers = useUsersStore((s) => s.set);
  const searchText = useUsersStore((s) => s.searchText);
  const page = useUsersStore((s) => s.page);

  const options = useMemo(
    () =>
      searchText
        ? {
            queryParams: {
              q: searchText,
              per_page: 8,
              page,
            },
          }
        : {},
    [searchText],
  );

  const { data } = useQuery({
    queryKey: ['users', searchText, 'page', page],
    queryFn: () => get<PaginatedDto<UserDto>>(ROUTES.users.findAll, options),
    enabled: !!searchText,
  });

  useEffect(() => {
    if (data) setUsers(data.items);
  }, [data, setUsers]);

  return { users };
};
