import { BsApple, BsFacebook, BsGoogle } from 'react-icons/bs';
import Divider from 'shared/components/Divider';
import LoginFields from './LoginFields';
import SocialAccoutLoginButton from './SocialAccoutLoginButton';

export const LoginForm = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <SocialAccoutLoginButton icon={<BsFacebook />} text="facebook" />
        <SocialAccoutLoginButton icon={<BsGoogle />} text="google" />
        <SocialAccoutLoginButton icon={<BsApple />} text="apple" />
        <div className="py-4">
          <Divider />
        </div>
        <LoginFields />
      </div>
    </div>
  );
};
