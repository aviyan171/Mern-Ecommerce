function CustomerInfo({
  img,
  name,
  additionalInfo,
}: {
  img: string;
  name: string;
  additionalInfo: string;
}) {
  return (
    <div className="flex gap-4 items-center ">
      <div className="w-[30px] h-[30px]">
        <img className="w-full rounded-sm overflow-hidden" src={img} />
      </div>
      <div>
        <div className="flex flex-col items-start text-xs gap-1 mt-2 ">
          <p className="font-bold">{name}</p>
          <p>{additionalInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
