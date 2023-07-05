"use client";

import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  TableOptions,
} from "@tanstack/react-table";

interface Props<T> extends Omit<TableOptions<T>, "getCoreRowModel"> {}

export default function DataTable<T>({ ...props }: Props<T>) {
  const table = useReactTable({
    ...props,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="">
      <div
        role="table"
        className="table table-auto border-separate border-spacing-y-3 w-full"
      >
        <div className="table-row-group">
          {table.getHeaderGroups().map((headerGroup) => (
            <div key={headerGroup.id} className="table-row">
              {headerGroup.headers.map((header) => (
                <div
                  key={header.id}
                  className="table-cell text-xs text-gray-medium font-medium py-4 px-3"
                >
                  {header.isPlaceholder ? null : (
                    <span
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}

          {table.getRowModel().rows.map((row) => (
            <div key={row.id} className="table-row rounded-lg text-sm">
              {row.getVisibleCells().map((cell) => (
                <div
                  key={cell.id}
                  className="table-cell align-middle py-4 px-3 bg-white"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 text-sm text-[var(--grayscale-gray)]">
        <div className="mr-12">
          <span>Rows per page:</span>
          <select
            className="text-[var(--grayscale-gray-dark)] bg-transparent"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 15, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>

        <span className="flex items-center gap-1 mr-6">
          {(table.getState().pagination.pageIndex + 1) *
            table.getState().pagination.pageSize}{" "}
          of {table.getPageCount()}
        </span>

        <button
          className="flex items-center justify-center border rounded p-1 w-6 h-6"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="flex items-center justify-center border rounded p-1 w-6 h-6"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
