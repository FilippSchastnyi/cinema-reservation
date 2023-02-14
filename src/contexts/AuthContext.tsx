import { createContext, useMemo } from 'react'
import { UserType } from '@src/ts/types'
import { useTypedDispatch, useTypedSelector } from '@src/hooks/redux'
import { userSlice } from '@src/store/reducers/userSlice'

type AuthContextType = {
  user: UserType | null
  login: (userData: UserType) => void
  logout: () => void
}

const authContext: AuthContextType = {
  user: null,
  login: (data) => {},
  logout: () => {},
}

const AuthContext = createContext(authContext)

const AuthProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const user = useTypedSelector((state) => state.user)
  const { logOutUser, logInUser } = userSlice.actions
  const dispatch = useTypedDispatch()

  authContext.login = (data) => {
    localStorage.setItem('token', data.access_token)
    dispatch(logInUser(data))
  }

  authContext.logout = () => {
    localStorage.removeItem('token')
    dispatch(logOutUser())
  }
  const value = useMemo(
    () => ({ ...authContext, user: user.data }),
    [user.data]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
