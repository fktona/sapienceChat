import React from 'react'
import { TextField } from '@mui/material'
import Link from 'next/link'
import AuthorizationContainer from '@/components/authotization'


export default function ResetPassword() {
    return (
 
        <AuthorizationContainer>
            <p  className='w-[80%] text-start left-0'>Reset Password</p>
            <TextField sx={{borderColor:'#97F675'}} id="standard-basic" label="email" type='email' variant="standard" className='md:w-[80%] w-full'/>
            <div className=' space-x-8'>
                <button className='border-2 hover:bg-action-green text-side-black border-action-green px-6 py-2'>Send</button>   
            </div>
            <Link href={'/authorization'} className='hover:border-b-2 border-action-green transition-all duration-300'>Sign in</Link>
            </AuthorizationContainer>

    )
}
