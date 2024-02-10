import CurrentPagesIndicator from 'shared/components/CurrentPagesIndicator';
import MaxWidthLayout from 'shared/layout/MaxWidthLayout';
import ProductImages from '../components/ProductImages';
import ProductInformation from '../components/ProductInformation';

function ProductDetails() {
  return (
    <div>
      <CurrentPagesIndicator center>
        <ProductImages />
      </CurrentPagesIndicator>
      <div className="mt-25 mb-13">
        <MaxWidthLayout>
          <ProductInformation />
        </MaxWidthLayout>
      </div>
    </div>
  );
}

export default ProductDetails;
