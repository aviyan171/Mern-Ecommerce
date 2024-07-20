import { BsGoogle } from 'react-icons/bs'
import Divider from 'shared/components/Divider'
import LoginFields from './LoginFields'
import SocialAccountLoginButton from './SocialAccoutLoginButton'
import { useLoginWithGoogleMutation } from 'features/auth/login/service/authService'

export const LoginForm = () => {
  const googleLoginMutation = useLoginWithGoogleMutation()

  const onGoogleLogin = () => {
    googleLoginMutation.mutate()
  }

  return (
    <div>
      <div className="flex flex-col gap-2  ">
        {/* <SocialAccoutLoginButton icon={<BsFacebook />} text="facebook" /> */}
        <SocialAccountLoginButton icon={<BsGoogle />} text="google" onClick={onGoogleLogin} />
        {/* <SocialAccoutLoginButton icon={<BsApple />} text="apple" /> */}
        <div className="py-4">
          <Divider />
        </div>
        <LoginFields />
      </div>
    </div>
  )
}
