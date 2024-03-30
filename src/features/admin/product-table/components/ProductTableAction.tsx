import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export function ProductTableAction({ row, column }: { row: any; column: any }) {
  const [confirmation, setConfirmation] = useState(false);

  return (
    <div>
      {!confirmation && (
        <div
          className="cursor-pointer text-red-500"
          onClick={() => setConfirmation(true)}
        >
          <FaTrash />
        </div>
      )}
      {confirmation && (
        <div className="">
          Are you sure want to delete?{' '}
          <span
            className="cursor-pointer text-red-500"
            onClick={() => {
              column?.columnDef.meta?.deleteData(row.original.id);
              setConfirmation(false);
            }}
          >
            Yes
          </span>
          <span
            className="cursor-pointer text-green-500 ml-5"
            onClick={() => setConfirmation(false)}
          >
            Cancel
          </span>
        </div>
      )}
    </div>
  );
}
