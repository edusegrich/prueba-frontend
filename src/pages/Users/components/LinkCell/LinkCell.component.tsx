import type { FC } from 'react';
import type { UserCellProps } from '@pages/Users/Users.types';

const LinkCell: FC<UserCellProps> = ({ user }) => {
  return (
    <a href={user.htmlUrl} target="_blank">
      {user.htmlUrl}
    </a>
  );
};

export default LinkCell;
