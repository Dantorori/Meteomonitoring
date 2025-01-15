import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { PoleData } from "../types/meteoResponse";
import { getRouteApi } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import Button from "@ui/Button";
import styled from "styled-components";

const TableContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.gray[200]};
  border-radius: 0.8rem;
  margin: 0.8rem;
  overflow: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 0.8rem 0 0.8rem;
  align-items: center;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  text-align: left;
  color: #222222;
  font-size: 0.833rem;
`;
const TableHeader = styled.thead``;
const TableRow = styled.tr`
  background-color: ${(props) => props.theme.colors.gray[100]};
`;
const TableHead = styled.th`
  font-weight: 500;
  padding: 0.8rem 0 0.8rem 0.8rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[200]};
`;

const TableData = styled.td`
  padding: 1rem 0 1rem 0.8rem;
`;

export function Meteotable() {
  const routeApi = getRouteApi("/table");
  const fetchData = routeApi.useLoaderData();

  const [data] = useState(() => [...fetchData]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns = useMemo<ColumnDef<PoleData>[]>(
    () => [
      {
        accessorKey: "pole_id",
        header: "Номер опоры",
      },
      {
        accessorKey: "line_name",
        header: "Наименование линии",
      },
      {
        accessorKey: "created_at",
        header: "Последнее время предсказания",
      },
      {
        accessorKey: "max_probability",
        header: "Вероятность обледенения на завтра",
      },
    ],
    [],
  );

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    initialState: {
      sorting: [
        {
          id: "max_probability",
          desc: true,
        },
      ],
    },
    state: {
      pagination,
    },
  });

  return (
    <>
      <TableContainer>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableData key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableData>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
      <ButtonContainer>
        <Button onClick={() => table.firstPage()}>{"<<"}</Button>
        <Button onClick={() => table.previousPage()}>{"<"}</Button>
        <Button onClick={() => table.nextPage()}>{">"}</Button>
        <Button onClick={() => table.lastPage()}>{">>"}</Button>
        <span>
          Страница {table.getState().pagination.pageIndex + 1} из{" "}
          {table.getPageCount().toLocaleString()}
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}>
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option
              key={pageSize}
              value={pageSize}>
              Показать {pageSize}
            </option>
          ))}
        </select>
      </ButtonContainer>
    </>
  );
}
