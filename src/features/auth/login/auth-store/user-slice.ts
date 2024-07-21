import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'shared/store/store'
import { AuthUser } from '../interface'
import { getLocal, removeLocal, setLocal } from 'shared/utils/storage'

type userState = {
  user: AuthUser | null
  isLoading: boolean
  userId: string
}

const initialState: userState = {
  user: null,
  isLoading: true,
  userId: getLocal('userId') || ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload
      state.isLoading = false
      state.userId = action.payload._id
      setLocal('userId', action.payload._id)
    },
    removeUser: state => {
      state.user = null
      state.isLoading = false
      state.userId = ''
      removeLocal('userId')
    }
  }
})

export const { removeUser, setUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user
export const isLoggedIn = (state: RootState) => !!state.user.userId
