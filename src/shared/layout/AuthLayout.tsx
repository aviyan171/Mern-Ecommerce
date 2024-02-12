import { Outlet, useLocation } from 'react-router-dom';
import { UI_ROUTES } from 'shared/constants';
import backGroundImage from '../assets/jpg/LoginBackground.jpg';

interface IProps {
  [key: string]: string;
}
function AuthLayout() {
  const location = useLocation();
  const path = location.pathname;

  const message: IProps = {
    [UI_ROUTES.login]: 'Sign in to continue to your account',
    [UI_ROUTES.register]: 'Register your account',
  };

  return (
    <div className="relative min-h-[100vh]  ">
      <img
        src={backGroundImage}
        alt="Login background"
        className="absolute inset-0 object-cover h-full w-full" // Ensure image fills the container
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm  ">
        <div className="flex justify-start items-center h-[100vh] pl-10">
          <div className=" bg-alabaster rounded-s-xl rounded-e-xl overflow-hidden ">
            <div className="flex h-full">
              <div className="flex-[3] bg-black text-white ">
                <div className="flex flex-col justify-center  px-4  h-full gap-5">
                  <p className="text-xl font-bold ">
                    Welcome Back to Abhiyan Store
                  </p>
                  <p className="text-sm ">{message[path]}</p>
                </div>
              </div>
              <div className="flex-[4] p-5">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
