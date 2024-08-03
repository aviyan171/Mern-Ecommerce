interface IProps {
  src: string
  onClick: (currentImage: string) => void
}
function CurrentImages({ src, onClick }: IProps) {
  return (
    <div>
      <div className="  cursor-pointer " onClick={() => onClick(src)}>
        <img src={src} alt="img" className="h-30 w-30 object-contain" />
      </div>
    </div>
  )
}

export default CurrentImages
