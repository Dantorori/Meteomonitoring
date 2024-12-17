import { Table } from "@tanstack/react-table";

interface TemplTableProps<T> {
  table: Table<T>;
}

export default function TableTemplate<T>({ table }: TemplTableProps<T>) {
  return <div>TableTemplate</div>;
}
