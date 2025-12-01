import type { UserCellProps } from '@pages/Users/Users.types';
import type { FC } from 'react';

import { textCell } from './TextCell.css';

const TextCell: FC<UserCellProps> = ({ user }) => {
  return <div className={textCell}>{user.type}</div>;
};

export default TextCell;
