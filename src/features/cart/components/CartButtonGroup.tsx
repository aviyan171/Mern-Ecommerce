import { FaSpinner } from 'react-icons/fa';
import Button from 'shared/components/Button';

function CartButtonGroup() {
  return (
    <div className="flex justify-between">
      <Button text="Continue Shopping" onClick={() => ''} background="white" />
      <Button
        text="Update Cart"
        onClick={() => ''}
        background="black"
        suffix
        icon={<FaSpinner />}
      />
    </div>
  );
}

export default CartButtonGroup;
