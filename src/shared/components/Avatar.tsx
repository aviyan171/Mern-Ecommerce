function Avatar({
  name,
  onClick,
  height = '8',
  width = '8'
}: {
  name: React.ReactNode
  onClick?: VoidFunction
  height?: string
  width?: string
}) {
  return (
    <div
      className={`text-white bg-black rounded-full  h-${height} w-${width} cursor-pointer flex justify-center items-center`}
      onClick={onClick}
    >
      <p className="">{name}</p>
    </div>
  )
}

export default Avatar
