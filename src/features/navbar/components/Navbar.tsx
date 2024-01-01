import { BsBagCheck, BsSearch } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import logo from '../../../shared/assets/png/logo.png';
function Navbar() {
  return (
    <div>
      <div className="py-7 bg-white ">
        <div className="max-w-NAVBAR_INNER_WIDTH mx-auto">
          <div className="flex justify-between">
            <div className="">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <ul className="grid grid-cols-6 cursor-pointer">
                <li>Home</li>
                <li>Shop</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contacts</li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-6 items-center">
                <li>
                  <BsSearch />
                </li>
                <li>
                  <FaRegHeart />
                </li>
                <li className="flex items-center gap-3 flex-shrink-0">
                  <BsBagCheck />
                  <span>$ 0.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
