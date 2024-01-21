import Button from 'shared/components/Button';

function CouponInput() {
  return (
    <div>
      <p className="mb-9 font-bold">DISCOUNT CODES</p>
      <input
        type="search"
        placeholder="Coupon code"
        className="focus:outline-none border-[1px] border-slate-200 h-[48px] px-5"
      />
      <Button text="Apply" onClick={() => ''} />
    </div>
  );
}

export default CouponInput;
