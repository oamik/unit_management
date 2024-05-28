import { Box } from "@chakra-ui/react";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import DATA from "../data";
import EditableCell from "./EditableCell";
import StatusCell from "./StatusCell";
import DateCell from "./DateCell";

const columns = [
  {
    accessorKey: 'task',
    header: 'Task',
    size: 225,
    cell: EditableCell
  },
  {
    accessorKey: 'due',
    header: 'Vacant',
    cell: DateCell
  },
  {
    accessorKey: 'ready',
    header: 'Ready',
    cell: DateCell
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: StatusCell
  },
  {
    accessorKey: 'notes',
    header: 'Notes ',
    size: 225,
    cell: EditableCell
  }
]

const TaskTable = () => {
  const [data, setData] = useState(DATA);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
    meta: {
      updateData: (rowIndex, columnId, value) => setData(
        prev => prev.map(
          (row, index) =>
            index === rowIndex ? {
              ...prev[rowIndex],
              [columnId]: value
            } : row
        )
      )
    }
  });
  console.log(data)
  return <Box>
    <Box className="table" w={table.getTotalSize()}>
      {table.getHeaderGroups().map(headerGroup => (
        <Box className="tr" key={headerGroup.id} >
          {headerGroup.headers.map(
            header => (
              <Box className="th" key={header.id} w={header.getSize()}>
                {header.column.columnDef.header}
                <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`}>
                </Box>
              </Box>
            )
          )
          }
        </Box>))
      }
      {
        table.getRowModel().rows.map(row =>
          <Box className="tr" key={row.id}>
            {row.getVisibleCells().map(
              cell =>
                <Box className="td" key={cell.id} w={cell.column.getSize()}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Box>)}
          </Box>)
      }
    </Box>
  </Box>;
};
export default TaskTable;
