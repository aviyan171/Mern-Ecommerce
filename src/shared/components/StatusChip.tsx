import { ProductStatus } from 'features/admin/product-table/enum';

export function StatusChip({ status }: { status: string }) {
  const statusColor = () => {
    switch (status) {
      case 'Pending':
        return 'bg-orange-400';
      case 'Delivered':
        return 'bg-green-400';
      case ProductStatus.PUBLISHED:
        return 'bg-green-400';
      case ProductStatus.DRAFT:
        return 'bg-blue-400';
      case 'Refunded':
        return 'bg-red-400';
      default:
        return 'bg-orange-400';
    }
  };
  return (
    <div className={`rounded-2xl p-2 ${statusColor()} text-white text-center`}>
      {status}
    </div>
  );
}
