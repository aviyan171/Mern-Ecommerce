function Avatar({
  name,
  onClick,
}: {
  name: React.ReactNode;
  onClick?: VoidFunction;
}) {
  return (
    <div
      className="text-white bg-black rounded-full p-2 h-8 w-8 cursor-pointer relative"
      onClick={onClick}
    >
      <p className="absolute left-[32%] bottom-[10%]">{name}</p>
    </div>
  );
}

export default Avatar;
