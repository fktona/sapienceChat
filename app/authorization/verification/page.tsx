'use client'
import React from 'react'
import { TextField } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import AuthorizationContainer from '@/components/authotization/index'
import emailVerification from '@/assets/Logo/emailVerification.svg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function Authorization() {
  return (
    <AuthorizationContainer>
      <Image alt="email" src={emailVerification} width={100} height={100} />
      <h3 className="font-bold text-md ">Email Verification Link Sent</h3>
      <p className=" text-sm text-gray-600">
        check your mail to verify your account
      </p>
      <div className="text-sm">
        Didn&apos;t receive the mail?
        <button className="text-action-green">Click to resend</button>
      </div>
      <Link href={'/authorization'} className="space-x-5 text-gray-600">
        <ArrowBackIcon />
        Back to Login{' '}
      </Link>
    </AuthorizationContainer>
  )
}
