import { flexRender } from '@tanstack/react-table';
import { useProductTable } from '../services/useProductTable';

export function ProductTableItems() {
  const productTable = useProductTable();

  return (
    <table className="table-auto w-full">
      <thead>
        {productTable.getHeaderGroups().map((headerGroup) => (
          <tr className="border-b-[1px] p-2" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="text-start">
                {header.column.columnDef.header as string}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {productTable.getRowModel().rows.map((rows) => (
          <tr key={rows.id} className="odd:bg-white even:bg-slate-100">
            {rows.getVisibleCells().map((cells) => (
              <td key={cells.id} className="py-2">
                {flexRender(cells.column.columnDef.cell, cells.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
