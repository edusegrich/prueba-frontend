import Avatar from '@core/components/Avatar';
import type { UserCellProps } from '@pages/Users/Users.types';
import type { FC } from 'react';

const LoginCell: FC<UserCellProps> = ({ user }) => {
  return <Avatar title={user.login} description={user.name} src={user.avatarUrl} />;
};

export default LoginCell;
