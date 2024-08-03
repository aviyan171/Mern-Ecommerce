function DisplayedImage({ src }: { src: string }) {
  return (
    <div>
      <img src={src} loading="lazy" alt="img" className="bg-transparent" />
    </div>
  )
}

export default DisplayedImage
