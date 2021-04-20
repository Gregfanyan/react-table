import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./Columns";
import { CheckBox } from "./CheckBox";
import "./table.css";

const ColumnHiding = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
    footerGroups,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable({
    columns,
    data,
  });

  //console.log(TableInstance);

  return (
    <>
      <div>
        <div>
          <CheckBox {...getToggleHideAllColumnsProps()} />
          Toggle All
        </div>
        {allColumns.map((column) => (
          <div key={column.id}>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />
              {column.Header}
            </label>
          </div>
        ))}
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups &&
            headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup &&
                  headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
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
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
    </>
  );
};

export default ColumnHiding;
