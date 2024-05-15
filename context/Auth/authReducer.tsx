import { authAction } from '@/types'
export const AuthReducer = (state: any, action: authAction) => {
  const { type, payload } = action
  switch (type) {
    case 'signup':
    case 'signin':
    case 'refresh':
      if (payload?.token && type !== 'refresh') {
        localStorage.setItem('token', payload?.token)
      }

      return {
        ...state,
        userId: payload?.userId,
        email: payload?.email,
        token: payload?.token,
        verified: payload?.verified,
      }
    case 'LOGOUT':
    // ...
  
  default:
  return state;
    }
}
