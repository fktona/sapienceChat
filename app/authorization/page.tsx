'use client'
import React, { use, useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import Link from 'next/link'
import { Checkbox } from '@mui/material'
import AuthorizationContainer from '@/components/authotization'
import { AuthFunction } from '@/libs/authorization'
import Fuctions from '@/libs/utils'
import { AuthState } from '@/types'
import { useAuth } from '@/context/Auth/authinfo'
import Notify from '@/components/authotization/notify'

type AuthRequest = Pick<AuthState, 'email' | 'password'>

export default function Authorization() {
  const [userData, setuserData] = useState<AuthRequest>({
    email: '',
    password: '',
  })

  const { dispatch } = useAuth()
  const { handleInputChange } = Fuctions()
  const { mutation } = AuthFunction()

  const { data, error, isSuccess, isError } = mutation

  useEffect(() => {
    if (isSuccess) {
      console.log('success')
    }
    if (isError) {
      console.log('error')
    }
  }, [isSuccess, isError])

  return (
    <AuthorizationContainer>
      <Notify
        open={isError}
        onClose={() => mutation.reset()}
        severity="error"
        autoHideDuration={5000}
      >
        {error?.response?.data.message || error?.message}
      </Notify>
      <Notify
        open={isSuccess}
        onClose={() => mutation.reset()}
        severity="success"
        autoHideDuration={5000} 
      >
        {data?.message}
      </Notify>
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, setuserData)
        }
        name="email"
        value={userData.email}
        sx={{ borderColor: '#97F675' }}
        id="password"
        label="email"
        type="email"
        variant="standard"
        className="md:w-[80%] w-full"
      />
      <TextField
        name="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, setuserData)
        }
        id="password"
        label="password"
        type="password"
        value={userData.password}
        variant="standard"
        className="w-full md:w-[80%]"
      />
      <div className="w-[80%] text-start text-md">
        <Checkbox
          // {...label}
          defaultChecked
          sx={{
            '&.Mui-checked': {
              color: '#97F675',
            },
          }}
        />
        Accept Terms And Conditions
      </div>
      <div className=" space-x-8">
        <button
          onClick={() =>
            mutation.mutateAsync({
              userData: userData,
              type: 'signin',
              nextRoute: 'dashboard',
            })
          }
          className="border-2 hover:bg-action-green text-side-black border-action-green px-6 py-2"
        >
          Sign In
        </button>
        <button
          onClick={() =>
            mutation.mutateAsync({
              userData: userData,
              type: 'signup',
              nextRoute: 'authorization/verification',
            })
          }
          className="border-2 hover:bg-action-green text-side-black border-action-green px-6 py-2"
        >
          Sign Up
        </button>
      </div>
      <Link
        href={'authorization/resetPassword'}
        className="hover:border-b-2 border-action-green transition-all duration-300"
      >
        Forgot Password
      </Link>
    </AuthorizationContainer>
  )
}
