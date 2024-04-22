'use client'
import React, { use, useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import logoBlack from '@/assets/logo/logotransparent.png'
import {Checkbox} from '@mui/material'
import AuthorizationContainer from '@/components/authotization'
import { AuthFunction } from '@/libs/authorization';
import Fuctions from '@/libs/utils'
import { AuthState } from '@/types'
import { baseUrl } from "@/constants/baseUrl";
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '@/context/Auth/authinfo'

import { useRouter } from 'next/navigation'
type AuthRequest = Pick<AuthState, 'email' | 'password'>;


export default function Authorization() {

    const [userData, setuserData] = useState<AuthRequest>({
        email: "",
        password: "",
    });

    const { dispatch } = useAuth()
    const { handleInputChange } = Fuctions()
    const{mutation}=AuthFunction()

     const { data, error, isSuccess, isError } = mutation;

     useEffect(() => {
        if(isSuccess){
            console.log('success')
            
        }
        if(isError){
            console.log('error')
        }
        }, [isSuccess, isError])

    

    return (
 
        <AuthorizationContainer>
            <TextField
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, setuserData)}
                name='email' 
                value={userData.email}
                sx={{borderColor:'#97F675'}}
                id="standard-basic"
                label="email"
                type='email'
                variant="standard"
                className='md:w-[80%] w-full'
            />
            <TextField 
            name='password'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, setuserData)}
            id="standard-basic"
            label="password"
            type='password'
            value={userData.password} 
            variant="standard"
            className='w-full md:w-[80%]' />
            <div className='w-[80%] text-start text-md'>
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
            <div className=' space-x-8'>
                <button onClick={() => mutation.mutateAsync({
                    userData: userData,
                    type: 'signin',
                    nextRoute: 'dashboard' 
                })}
                 className='border-2 hover:bg-action-green text-side-black border-action-green px-6 py-2'>Sign In</button>
                <button onClick={() => mutation.mutateAsync({
                    userData: userData,
                    type: 'signup',
                    nextRoute: 'authorization/verification'
                })}
                className='border-2 hover:bg-action-green text-side-black border-action-green px-6 py-2'>Sign Up</button>
                
            </div>
            <Link href={'authorization/resetPassword'} className='hover:border-b-2 border-action-green transition-all duration-300'>Forgot Password</Link>
            </AuthorizationContainer>

    )
}
