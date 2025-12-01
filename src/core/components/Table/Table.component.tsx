import type { TableProps } from './Table.types';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

import * as styles from './Table.css';

const Table = <T,>({ items, columns, renderCell }: TableProps<T>) => {
  return (
    <table className={items.length ? styles.table : styles.emptyTable}>
      <TableHeader>
        {columns.map(({ label }) => (
          <th key={label}>{label}</th>
        ))}
      </TableHeader>
      <TableBody>
        {items?.length ? (
          items.map((item) => (
            <TableRow>{columns.map(({ uid }) => renderCell(uid, item))}</TableRow>
          ))
        ) : (
          <TableRow>No data to render</TableRow>
        )}
      </TableBody>
    </table>
  );
};

export default Table;
