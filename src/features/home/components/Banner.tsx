import banner1 from '../../../shared/assets/jpg/banner-1.jpg';
import banner2 from '../../../shared/assets/jpg/banner-2.jpg';
import banner3 from '../../../shared/assets/jpg/banner-3.jpg';
function Banner() {
  return (
    <div className="py-25">
      <div className="max-w-NAVBAR_INNER_WIDTH mx-auto ">
        <div className="flex justify-end">
          <div className="flex md:flex-row ">
            <div className="self-center  ">
              <p className="font-bold text-3xl leading-10 relative left-15 z-10">
                Clothing Collections 2030
              </p>
              <div className="uppercase mt-2 tracking-[4px] relative left-15 z-10 cursor-pointer group">
                <p>Shop now</p>
                <div className="border-b-2 border-black w-28 transition-all group-hover:w-15 group-hover:border-red-500" />
              </div>
            </div>
            <img src={banner1} alt="banner1" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="relative bottom-0 md:bottom-12 md:left-12">
            <img src={banner2} alt="banner1" />
            <div className="mt-5">
              <p className="font-bold text-3xl mb-3 ">Accessories</p>
              <div className="uppercase mt-2 tracking-[4px] cursor-pointer group">
                <p>Shop now</p>
                <div className="border-b-2 border-black w-28 transition-all group-hover:w-15 group-hover:border-red-500" />
              </div>
            </div>
          </div>
          <div className="relative top-15">
            <div className="flex md:flex-row overflow-hidden ">
              <div className="self-center  ">
                <p className="font-bold text-3xl leading-10 relative left-20 z-10">
                  Shoes Spring 2030
                </p>
                <div className="uppercase mt-2 tracking-[4px] relative left-20 z-10 cursor-pointer group">
                  <p>Shop now</p>
                  <div className="border-b-2 border-black w-28 transition-all group-hover:w-15 group-hover:border-red-500" />
                </div>
              </div>
              <img src={banner3} alt="banner1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
