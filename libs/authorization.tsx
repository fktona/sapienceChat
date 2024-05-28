import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { baseUrl } from '@/constants/baseUrl'
import { AuthState } from '@/types'
import { useAuth } from '@/context/Auth/authinfo'
import { AuthResponse } from '@/types'
import useNextRoute from '@/hooks/useNextRoute'
import { useQueryClient } from '@tanstack/react-query'
import { isError } from 'react-query'

type AuthRequest = Pick<AuthState, 'email' | 'password'>

export const AuthFunction = () => {
  const queryClient = useQueryClient()
  const { dispatch } = useAuth()
  const { navigateToPage } = useNextRoute()
  const mutation = useMutation<
    AuthResponse,
    Error,
    { userData: AuthRequest; type: string; nextRoute?: string },
    unknown
  >({
    mutationFn: async ({ userData, type, nextRoute }) => {
      const res = await axios.post(`${baseUrl}/api/auth/${type}`, userData)
      console.log(res)

      return res.data
    },
    onError: (error) => {
      console.log('ttt', error)
    },
    onSuccess: async (
      data: AuthResponse,
      variables: { userData: AuthRequest; type: string; nextRoute?: string },
    ) => {
      queryClient.invalidateQueries({queryKey:['bots']})
      const { accessToken, _id, email, verified } = data
      dispatch({
        type: variables.type,
        payload: {
          token: accessToken,
          userId: _id,
          email: email,
          verified: verified,
        },
      })
      if (variables.nextRoute) {
        navigateToPage(variables.nextRoute)
      }
      console.log('iii', data)
    },
  })
  return {
    mutation,
  }
}
