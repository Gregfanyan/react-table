import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./Columns";
import "./table.css";

const SortingTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
    footerGroups,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups &&
          headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows &&
          rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row &&
                  row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")} </td>
                    );
                  })}
              </tr>
            );
          })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps()}>{column.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};

export default SortingTable;
