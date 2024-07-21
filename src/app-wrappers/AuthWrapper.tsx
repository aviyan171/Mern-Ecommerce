import { getUserById } from 'features/auth/api/user-api'
import { removeUser, setUser } from 'features/auth/login/auth-store/user-slice'
import { firebaseAuth } from 'features/auth/login/firebase/firebase'
import { AuthUser } from 'features/auth/login/interface'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect } from 'react'

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
        const userById = (await getUserById(user.uid)) as unknown as AuthUser
        if (userById) dispatch(setUser(userById))
      } else {
        dispatch(removeUser())
      }
    })
  }, [onAuthStateChanged])

  return <div>{children}</div>
}
