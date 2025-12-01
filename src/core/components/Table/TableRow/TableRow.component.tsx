import React from 'react';
import type { FC } from 'react';
import type { TableRowProps } from './TableRow.types';

import { td } from '../Table.css';

const TableRow: FC<TableRowProps> = ({ children }) => {
  return (
    <tr>
      {React.Children.map(children, (child) => (
        <td className={td}>{child}</td>
      ))}
    </tr>
  );
};

export default TableRow;
