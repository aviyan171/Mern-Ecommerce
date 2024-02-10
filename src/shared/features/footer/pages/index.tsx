import { BsEnvelope } from 'react-icons/bs';
import MaxWidthLayout from 'shared/layout/MaxWidthLayout';
import logo from '../../../assets/png/footer-logo.png';
import payment from '../../../assets/png/payment.png';

const Footer = () => {
  return (
    <div className=" bg-black pt-[70px] text-white ">
      <MaxWidthLayout>
        <div className="grid grid-cols-4 gap-22 pb-[50px]">
          <div className="flex flex-col gap-8">
            <img src={logo} alt="logo" />
            <p className="text-gray-500 text-sm">
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <img src={payment} alt="payment" />
          </div>
          <div>
            <p className="uppercase mb-8">shopping</p>
            <div className="flex flex-col text-gray-500 gap-2 ">
              <p>Clothing Store</p>
              <p>Trending Shoes</p>
              <p>Accessories</p>
              <p>Sale</p>
            </div>
          </div>
          <div>
            <p className="uppercase mb-8">shopping</p>
            <div className="flex flex-col text-gray-500 gap-2 ">
              <p>Contact Us</p>
              <p>Payment Methods</p>
              <p>Delivery</p>
              <p>Return & Exchanges</p>
            </div>
          </div>
          <div>
            <p className="uppercase mb-8">NewLetter</p>
            <p className="text-gray-500 mb-4">
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>
            <div className="relative">
              <input
                type="text"
                className="text-gray-500 relative text-sm py-4 bg-transparent w-[100%] border-b-2 border-gray-500  focus:outline-none focus:border-b-2 focus:border-gray-500"
                placeholder="Your email"
              />
              <div className="absolute right-0 bottom-4">
                <BsEnvelope />
              </div>
            </div>
          </div>
        </div>
        <div className="border-solid border-[1px] border-gray-500" />
        <div className="py-6 ">
          <p className="text-center">
            Copyright © 20242020 All rights reserved
          </p>
        </div>
      </MaxWidthLayout>
    </div>
  );
};

export default Footer;
