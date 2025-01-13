import {
  Column,
  ColumnDef,
  PaginationState,
  Table,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { PoleData } from "../types/meteoResponse";
import { getRouteApi } from "@tanstack/react-router";
import React, { useMemo, useState } from "react";

export function Meteotable() {
  const routeApi = getRouteApi("/table");
  const fetchData = routeApi.useLoaderData();

  const [data, setData] = useState(() => [...fetchData]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns = useMemo<ColumnDef<PoleData>[]>(
    () => [
      {
        accessorKey: "pole_id",
      },
      {
        accessorKey: "line_name",
      },
      {
        accessorKey: "created_at",
      },
      {
        accessorKey: "max_probability",
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
    state: {
      pagination,
    },
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th
                  key={header.id}
                  colSpan={header.colSpan}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
    </table>
  );
}
