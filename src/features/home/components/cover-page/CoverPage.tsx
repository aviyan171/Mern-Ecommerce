import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';
import Button from 'shared/components/Button';
import landingImage from '../../../../shared/assets/jpg/landingimage.jpg';
function CoverPage() {
  const handleShopNow = () => {};
  return (
    <div
      className="min-h-[800px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${landingImage})` }}
    >
      <div className="max-w-NAVBAR_INNER_WIDTH mx-auto pt-58 ">
        <div className=" max-w-[682px] ">
          <p className="text-sm text-red-500 mb-7 font-medium ">
            SUMMER COLLECTION
          </p>
          <h2 className="text-5xl leading-tight font-medium mb-7">
            Fall - Winter Collections 2030
          </h2>
          <p className="text-balance leading-7 mb-9">
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>
          <Button onClick={handleShopNow} text="shop now" />
          <div className="flex gap-9 mt-50 cursor-pointer">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverPage;
