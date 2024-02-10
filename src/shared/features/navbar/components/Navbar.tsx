import { BsBagCheck, BsSearch } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PAGES, UI_ROUTES } from 'shared/constants';
import MaxWidthLayout from 'shared/layout/MaxWidthLayout';
import logo from '../../../assets/png/logo.png';
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeRoutes = (routes: string) => {
    return location.pathname === routes;
  };
  return (
    <div>
      <div className="py-7 bg-white ">
        <MaxWidthLayout>
          <div className="flex justify-between">
            <div
              className="cursor-pointer"
              onClick={() => navigate(UI_ROUTES.home)}
            >
              <img src={logo} alt="logo" />
            </div>
            <div>
              <ul className="flex gap-10 cursor-pointer ">
                {PAGES.map(({ name, to }) => {
                  return (
                    <div key={name}>
                      <div
                        className={`${
                          activeRoutes(to) && 'border-b-2 border-red-500 pb-1'
                        }`}
                      >
                        <Link to={to}>{name}</Link>
                      </div>
                    </div>
                  );
                })}
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
                <li
                  className="flex items-center gap-3 flex-shrink-0 cursor-pointer"
                  onClick={() => navigate(UI_ROUTES.cart)}
                >
                  <BsBagCheck />
                  <span>$ 0.00</span>
                </li>
              </ul>
            </div>
          </div>
        </MaxWidthLayout>
      </div>
    </div>
  );
}

export default Navbar;
