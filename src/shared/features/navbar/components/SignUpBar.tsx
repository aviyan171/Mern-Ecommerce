import { Logout_MESSAGES } from 'features/auth/constants/user-constants'
import { isLoggedIn, selectUser } from 'features/auth/login/auth-store/user-slice'
import { firebaseAuth } from 'features/auth/login/firebase/firebase'
import { signOut } from 'firebase/auth'
import { FaChevronDown, FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from 'shared/components/Button'
import { Dialog } from 'shared/components/Dialog'
import { Popup } from 'shared/components/Popup'
import { UI_ROUTES } from 'shared/constants'
import MaxWidthLayout from 'shared/layout/MaxWidthLayout'
import { useAppSelector } from 'shared/store/hooks'

function SignUpBar() {
  const userName = useAppSelector(selectUser)?.name
  const isSignedIn = useAppSelector(isLoggedIn)
  const navigate = useNavigate()

  const handleAuthentication = async () => {
    if (isSignedIn) {
      await signOut(firebaseAuth)
      toast(Logout_MESSAGES.SUCCESS, { type: 'success' })
      navigate(UI_ROUTES.login)
    } else {
      navigate(UI_ROUTES.login)
    }
  }

  const ButtonElement = () => {
    return (
      <div className="flex gap-7 cursor-pointer">
        <p onClick={isSignedIn ? undefined : handleAuthentication}> {!isSignedIn ? 'Sign In' : userName} </p>
        <span className="flex items-center gap-3 flex-shrink-0">
          <FaChevronDown />
        </span>
      </div>
    )
  }

  const PopUpContent = () => {
    return (
      <Dialog
        dialogTrigger={
          <div>
            <div className="flex justify-center items-center gap-10 p-2 cursor-pointer hover:bg-slate-100">
              <p>Sign out</p>
              <FaSignOutAlt />
            </div>
          </div>
        }
        description={
          <div className="mt-2">
            <p className="mb-2">Are your sure want to sign out?</p>
            <div className="text-right">
              <Button text="Confirm" onClick={handleAuthentication} />
            </div>
          </div>
        }
        title="Sign out"
      />
    )
  }

  return (
    <div>
      <div className="bg-black py-3 h-[45.6px] text-white">
        <MaxWidthLayout>
          <div className="flex justify-between">
            <div>Free shipping, 30-day return or refund guarantee.</div>
            {!isSignedIn ? ButtonElement() : <Popup content={PopUpContent()} triggerElement={ButtonElement()} />}
          </div>
        </MaxWidthLayout>
      </div>
    </div>
  )
}

export default SignUpBar
