import { BsArrowRight } from 'react-icons/bs';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';
import Button from 'shared/components/Button';
import MaxWidthLayout from 'shared/layout/MaxWidthLayout';
import landingImage from '../../../../shared/assets/jpg/landingimage.jpg';
function CoverPage() {
  const handleShopNow = () => {};
  return (
    <div
      className="min-h-[800px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${landingImage})` }}
    >
      <MaxWidthLayout>
        <div className=" max-w-[682px] pt-58  ">
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
          <Button
            onClick={handleShopNow}
            text="shop now"
            prefix
            icon={<BsArrowRight />}
          />
          <div className="flex gap-9 mt-50 cursor-pointer">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
          </div>
        </div>
      </MaxWidthLayout>
    </div>
  );
}

export default CoverPage;
