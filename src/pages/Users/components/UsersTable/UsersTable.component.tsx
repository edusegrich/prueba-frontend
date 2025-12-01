import type { FC } from 'react';
import Table from '@components/Table';
import type { UserDto } from '@core/store/users/users.types';
import { COLUMNS, USER_CELL_COMPONENT, UsersTableColumnUid } from '../../constants';
import { useUsers } from '../../hooks/useUsers';

const UsersTable: FC = () => {
  const { users } = useUsers();

  const renderCell = (column: string, user: UserDto) => {
    const Comp = USER_CELL_COMPONENT[column as UsersTableColumnUid];
    return <Comp user={user} />;
  };

  return <Table<UserDto> items={users} columns={COLUMNS} renderCell={renderCell} />;
};

export default UsersTable;
