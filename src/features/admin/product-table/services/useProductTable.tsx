import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { StatusChip } from 'shared/components/StatusChip';
import { ProductTableAction } from '../components/ProductTableAction';
import { ProductStatus } from '../enum';

interface IProducts {
  productImg: string;
  productName: string;
  price: number;
  stock: number;
  status: ProductStatus;
  action?: string;
  id?: string;
}
const products: IProducts[] = [
  {
    productImg:
      'data:image/jpeg;base64,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',
    productName: 'Product 1',
    price: 10.99,
    stock: 50,
    id: '123',

    status: ProductStatus.DRAFT,
  },
  {
    productImg:
      'https://i.pinimg.com/564x/33/9d/0e/339d0e68e577beefbf9ee8ae615b83cd.jpg',
    productName: 'Product 2',
    price: 19.99,
    stock: 20,
    id: '456',

    status: ProductStatus.PUBLISHED,
  },
  // Add more products as needed
  {
    productImg:
      'data:image/jpeg;base64,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',
    productName: 'Product 3',
    price: 5.99,
    stock: 0,
    id: '789',
    status: ProductStatus.DRAFT,
  },
  {
    productImg:
      'data:image/jpeg;base64,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',
    productName: 'Product 4',
    price: 15.99,
    stock: 10,
    id: '10,11,12',

    status: ProductStatus.PUBLISHED,
  },
  // Add more products as needed
];

const columnHelper = createColumnHelper<IProducts>();
export const useProductTable = () => {
  const [data, setData] = useState<IProducts[]>(products);
  const columns = [
    columnHelper.accessor((row) => row.productImg, {
      cell: (info) => (
        <img
          src={info.getValue()}
          alt={info.getValue()}
          className="w-[50px] h-[50px]"
        />
      ),
      header: 'Product',
    }),
    columnHelper.accessor((row) => row.productName, {
      cell: (info) => info.getValue(),
      header: 'Name',
    }),
    columnHelper.accessor((row) => row.price, {
      cell: (info) => info.getValue(),
      header: 'Price',
    }),
    columnHelper.accessor((row) => row.stock, {
      cell: (info) => info.getValue(),
      header: 'Quantity',
    }),
    columnHelper.accessor((row) => row.status, {
      cell: (info) => (
        <div className="w-[50%]">
          <StatusChip status={info.getValue()} />
        </div>
      ),
      header: 'Status',
    }),
    columnHelper.accessor('action', {
      cell: ProductTableAction,
      header: 'Action',
      meta: {
        deleteData: (id: string) => {
          setData((prevData) =>
            prevData.filter((product) => product.id !== id)
          );
        },
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return {
    ...table,
  };
};