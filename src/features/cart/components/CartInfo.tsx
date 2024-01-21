function CartInfo() {
  return (
    <div className="uppercase font-bold mb-7 flex justify-between">
      <div className="flex-[4]">product</div>
      <div className="flex-[3] text-center">Quantity</div>
      <div className="flex-[3]">
        <p className="ml-10">total</p>
      </div>
    </div>
  );
}

export default CartInfo;
