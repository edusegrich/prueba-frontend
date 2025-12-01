import React from 'react';
import type { FC } from 'react';
import type { TableHeaderProps } from './TableHeader.types';

import { header } from './TableHeader.css';
import { td } from '../Table.css';

const TableHeader: FC<TableHeaderProps> = ({ children }) => {
  return (
    <thead className={header}>
      <tr>
        {React.Children.map(children, (child) => (
          <td className={td}>{child}</td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
