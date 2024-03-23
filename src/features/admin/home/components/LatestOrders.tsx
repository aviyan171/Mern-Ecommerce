import { flexRender } from '@tanstack/react-table';
import { useOrderTable } from '../services';

export function LatestOrders() {
  const { headers, rows } = useOrderTable();
  return (
    <div className="bg-white rounded-lg shadow-lg px-6 pt-6 pb-4  -z-10">
      <div className="p-2">
        <p className="text-xl">Latest Orders</p>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            {headers.map((i) =>
              i.map((data, index) => {
                return (
                  <th className="text-start border-b-[1px] p-2" key={index}>
                    {data.headerName}
                    <div
                      onMouseDown={data.getResizeHandler()}
                      onTouchStart={data.getResizeHandler()}
                    ></div>
                  </th>
                );
              })
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-white even:bg-slate-50">
              {row.map((cell, cellIndex) => (
                <td className="p-2" key={cellIndex}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
