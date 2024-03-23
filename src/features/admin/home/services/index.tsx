import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { StatusChip } from 'shared/components/StatusChip';

interface Order {
  order: string;
  customer: string;
  date: string;
  status: string;
}

const orders: Order[] = [
  {
    order: 'The Sliding Mr. Bones (Next Stop, Pottersville)',
    customer: 'Malcolm Lockyer',
    date: '1961',
    status: 'Delivered',
  },
  {
    order: 'Witchy Woman',
    customer: 'The Eagles',
    date: '1972',
    status: 'Pending',
  },
  {
    order: 'Shining Star',
    customer: 'Earth, Wind, and Fire',
    date: '1975',
    status: 'Refunded',
  },
  {
    order: 'Hotel California',
    customer: 'The Eagles',
    date: '1976',
    status: 'Delivered',
  },
  {
    order: 'Bohemian Rhapsody',
    customer: 'Queen',
    date: '1975',
    status: 'Pending',
  },
  {
    order: 'Stairway to Heaven',
    customer: 'Led Zeppelin',
    date: '1971',
    status: 'Shipped',
  },
  {
    order: 'Imagine',
    customer: 'John Lennon',
    date: '1971',
    status: 'Delivered',
  },
  {
    order: 'Born to Run',
    customer: 'Bruce Springsteen',
    date: '1975',
    status: 'Shipped',
  },
  {
    order: 'I Will Always Love You',
    customer: 'Whitney Houston',
    date: '1992',
    status: 'Delivered',
  },
  {
    order: 'Smells Like Teen Spirit',
    customer: 'Nirvana',
    date: '1991',
    status: 'Pending',
  },
];

export const useOrderTable = () => {
  const columnHelper = createColumnHelper<Order>();

  const columns = [
    columnHelper.accessor('order', {
      cell: (props) => props.getValue(),
      header: 'Orders',
    }),
    columnHelper.accessor('customer', {
      cell: (props) => props.getValue(),
      header: 'Customer',
    }),
    columnHelper.accessor('date', {
      cell: (props) => props.getValue(),
      header: 'Date',
    }),
    columnHelper.accessor('status', {
      cell: (props) => <StatusChip status={props.getValue()} />,
      header: 'Status',
    }),
  ];

  const table = useReactTable({
    data: orders,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
  });

  return {
    ...table,
    headers: table.getHeaderGroups().map((headerGroup) =>
      headerGroup.headers.map((header) => ({
        headerName: header.column.columnDef.header?.toString(),
        ...header,
      }))
    ),
    rows: table.getRowModel().rows.map((rows) => rows.getVisibleCells()),
  };
};
