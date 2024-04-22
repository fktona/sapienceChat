'use client'

import {
  useContext,
  useReducer,
  createContext,
  ReactNode,
  Dispatch,
} from 'react'
import { AuthReducer } from './authReducer'
import { AuthState } from '@/types'

interface AuthContextProps {
  state: AuthState
  dispatch: Dispatch<any>
}

const AuthContext = createContext<AuthContextProps | null>(null)

const intialState: AuthState = {
  userId: null,
  email: null,
  token: null,
  verified: false,
}

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, intialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export const useAuth = () => useContext(AuthContext)!
