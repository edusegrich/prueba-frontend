export type TableColumnProps = {
  uid: string;
  label: string;
};

export type TableProps<T = { id: string } | string> = {
  items: T[];
  columns: TableColumnProps[];
  renderCell: (column: string, item: T) => ReactNode;
};
