import { BsGoogle } from 'react-icons/bs'
import Divider from 'shared/components/Divider'
import LoginFields from './LoginFields'
import SocialAccountLoginButton from './SocialAccoutLoginButton'

export const LoginForm = () => {
  return (
    <div>
      <div className="flex flex-col gap-2  ">
        <p className="font-normal text-sm">If you have already logged in ? </p>
        <SocialAccountLoginButton icon={<BsGoogle />} text="google" type="submit" />
        <div className="py-4">
          <Divider />
        </div>
        <p className="font-normal text-sm">New here ? </p>
        <p className="font-normal text-sm">Please select the credential and continue with google </p>
        <LoginFields />
      </div>
    </div>
  )
}
