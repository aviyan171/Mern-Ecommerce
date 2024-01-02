import banner1 from '../../../../shared/assets/jpg/banner-1.jpg';
import banner2 from '../../../../shared/assets/jpg/banner-2.jpg';
import banner3 from '../../../../shared/assets/jpg/banner-3.jpg';
import BannerImage from './BannerImage';
function Banner() {
  return (
    <div className="py-25">
      <div className="max-w-NAVBAR_INNER_WIDTH mx-auto ">
        <BannerImage image={banner1} name="Clothing Collections 2030" />
        <div className="flex justify-between">
          <div className="relative bottom-0 md:bottom-12 ">
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
            <BannerImage image={banner3} name="Shoes Spring 2030" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
