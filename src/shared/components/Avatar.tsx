function Avatar({
  name,
  onClick,
}: {
  name: React.ReactNode;
  onClick?: VoidFunction;
}) {
  return (
    <div
      className="text-white bg-black rounded-full p-2 h-8 w-8 cursor-pointer"
      onClick={onClick}
    >
      <p className="mr-[2px] mt-[-3px]">{name}</p>
    </div>
  );
}

export default Avatar;
