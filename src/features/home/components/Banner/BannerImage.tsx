function BannerImage({ image, name }: { image: string; name: string }) {
  return (
    <div className="flex justify-end">
      <div className="flex md:flex-row ">
        <div className="self-center  ">
          <p className="font-bold text-3xl leading-10 relative left-20 z-10">
            {name}
          </p>
          <div className="uppercase mt-2 tracking-[4px] relative left-20 z-10 cursor-pointer group">
            <p>Shop now</p>
            <div className="border-b-2 border-black w-28 transition-all group-hover:w-15 group-hover:border-red-500" />
          </div>
        </div>
        <img src={image} alt="banner1" />
      </div>
    </div>
  );
}

export default BannerImage;
