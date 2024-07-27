import { getUserById } from 'features/auth/api/user-api'
import { removeUser } from 'features/auth/login/auth-store/user-slice'
import { firebaseAuth } from 'features/auth/login/firebase/firebase'
import { AuthUser } from 'features/auth/login/interface'
import { setAuthState } from 'features/auth/utils/auth-utils'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect } from 'react'
import { LoaderWithBgBlur } from 'shared/components/LoaderWithBgBlur'

import { useAppDispatch } from 'shared/store/hooks'

type Props = {
  children: React.ReactNode
}

export function AuthWrapper({ children }: Props) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const isIdExists = async (event: StorageEvent) => {
      if (event.key === 'userId') {
        await signOut(firebaseAuth)
        dispatch(removeUser())
        window.location.reload()
      }
    }
    window.addEventListener('storage', isIdExists)
  }, [])

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async user => {
      if (user) {
        try {
          const userById = (await getUserById(user.uid)) as unknown as AuthUser
          setAuthState({ dispatch, user: userById })
        } catch (error) {
          dispatch(removeUser())
        }
      } else {
        dispatch(removeUser())
      }
    })
  }, [onAuthStateChanged])

  return <LoaderWithBgBlur>{children}</LoaderWithBgBlur>
}
