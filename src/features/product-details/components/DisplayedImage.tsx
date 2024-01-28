function DisplayedImage({ src }: { src: string }) {
  return (
    <div>
      <img src={src} alt="img" />
    </div>
  );
}

export default DisplayedImage;
