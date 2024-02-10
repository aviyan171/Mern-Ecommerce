import { Outlet } from 'react-router-dom';
import backGroundImage from '../assets/jpg/LoginBackground.jpg';

function AuthLayout() {
  return (
    <div className="relative min-h-[100vh] ">
      <img
        src={backGroundImage}
        alt="Login background"
        className="absolute inset-0 object-cover h-full w-full" // Ensure image fills the container
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm  ">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
