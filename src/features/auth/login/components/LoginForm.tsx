import { BsApple, BsFacebook, BsGoogle } from 'react-icons/bs';
import Divider from 'shared/components/Divider';
import LoginFields from './LoginFields';
import SocialAccoutLoginButton from './SocialAccoutLoginButton';

export const LoginForm = () => {
  return (
    <div className="flex justify-start items-center h-[100vh] pl-10">
      <div className=" bg-alabaster rounded-s-xl rounded-e-xl overflow-hidden ">
        <div className="flex h-full">
          <div className="flex-[3] bg-black text-white ">
            <div className="flex flex-col justify-center px-4  h-full gap-5">
              <p className="text-xl font-bold ">
                Welcome Back to Abhiyan Store
              </p>
              <p className="text-sm ">Sign in to continue to your account</p>
            </div>
          </div>
          <div className="flex-[4] p-5">
            <div className="flex flex-col gap-2">
              <SocialAccoutLoginButton icon={<BsFacebook />} text="facebook" />
              <SocialAccoutLoginButton icon={<BsGoogle />} text="google" />
              <SocialAccoutLoginButton icon={<BsApple />} text="apple" />
            </div>
            <div className="py-4">
              <Divider />
            </div>
            <LoginFields />
          </div>
        </div>
      </div>
    </div>
  );
};
