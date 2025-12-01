import type { FC } from 'react';
import type { TableBodyProps } from './TableBody.types';

const TableBody: FC<TableBodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
