import { useAppSelector } from 'shared/store/hooks'
import { isLoggedIn, selectUser } from '../login/auth-store/user-slice'
import { ROLE } from '../login/enum/login-enum'

export function useCheckIsAdmin() {
  const isSignedIn = useAppSelector(isLoggedIn)
  const isAdmin = useAppSelector(selectUser)?.role === ROLE.ADMIN
  const isAuthenticated = isSignedIn && isAdmin
  return isAuthenticated
}
