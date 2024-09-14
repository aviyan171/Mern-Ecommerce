import { selectUser } from 'features/auth/login/auth-store/user-slice'
import { useAppSelector } from 'shared/store/hooks'

function useCheckUserIsLoggedIn() {
  const user = useAppSelector(selectUser)
  return !!user?._id
}

export default useCheckUserIsLoggedIn
