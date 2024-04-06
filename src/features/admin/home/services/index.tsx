import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Button from 'shared/components/Button';
import { StatusChip } from 'shared/components/StatusChip';

interface Order {
  customer: string;
  date: string;
  status: string;
  total: string;
  action?: VoidFunction;
  orderId: string;
}

const orders: Order[] = [
  {
    orderId: '1',
    customer: 'Malcolm Lockyer',
    date: '1961',
    total: '1212121212',
    status: 'Delivered',
  },
  {
    orderId: '2',
    customer: 'The Eagles',
    date: '1972',
    total: '1212121212',
    status: 'Pending',
  },
  {
    orderId: '3',
    customer: 'Earth, Wind, and Fire',
    date: '1975',
    total: '1212121212',
    status: 'Refunded',
  },
  {
    orderId: '4',
    customer: 'The Eagles',
    date: '1976',
    total: '1212121212',
    status: 'Delivered',
  },
  {
    orderId: '5',
    customer: 'Queen',
    date: '1975',
    total: '1212121212',
    status: 'Pending',
  },
  {
    orderId: '6',
    customer: 'Led Zeppelin',
    date: '1971',
    total: '1212121212',
    status: 'Shipped',
  },
  {
    orderId: '7',
    customer: 'John Lennon',
    date: '1971',
    total: '1212121212',
    status: 'Delivered',
  },
  {
    orderId: '8',
    customer: 'Bruce Springsteen',
    date: '1975',
    total: '1212121212',
    status: 'Shipped',
  },
  {
    orderId: '9',
    customer: 'Whitney Houston',
    date: '1992',
    total: '1212121212',
    status: 'Delivered',
  },
  {
    orderId: '10',
    customer: 'Nirvana',
    date: '1991',
    total: '1212121212',
    status: 'Pending',
  },
];

export const useOrderTable = ({
  showAllOrders,
}: {
  showAllOrders: boolean;
}) => {
  const filteredOrders = showAllOrders ? orders : orders.slice(0, 5);

  const columnHelper = createColumnHelper<Order>();

  const columns = [
    columnHelper.accessor('customer', {
      cell: (props) => props.getValue(),
      header: 'Customer',
    }),
    columnHelper.accessor('total', {
      cell: (props) => props.getValue(),
      header: 'Total',
    }),
    columnHelper.accessor('date', {
      cell: (props) => props.getValue(),
      header: 'Orderd Date',
    }),
    columnHelper.accessor('status', {
      cell: (props) => <StatusChip status={props.getValue()} />,
      header: 'Status',
    }),
    columnHelper.accessor('action', {
      cell: (p) => (
        <Button text="Manage" onClick={() => alert(p.row.original.orderId)} />
      ),
      header: 'Action',
    }),
  ];

  const table = useReactTable({
    data: filteredOrders,
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
