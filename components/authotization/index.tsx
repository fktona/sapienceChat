import React from 'react'
import Image from 'next/image'
import logoBlack from '@/assets/logo/logotransparent.png'
import Identity from '@/assets/identity'
import { baseUrl } from "@/constants/baseUrl";

export default function AuthorizationContainer({children}:{children:React.ReactNode}) {

    
    return (
        <div className='  bg-background-white md:bg-action-green absolute w-[100%] left-0 min-h-full lg:px-24  py-[3rem] '>
        <div className='absolute md:hidden w-full top-0 flex justify-start bg-black z-50  p-2'>
            <Identity/>
        </div>
        <div className='md:grid block grid-cols-2 rounded-lg relative   h-full lg:shadow-xl   '>
            <div className='bg-black hidden relative md:flex items-center justify-center flex-col'>
              <Image src={logoBlack} alt='logo' width={400} height={400}/>
              <span className={` text-action-green md:hidden block lg:block text-sm  font-extrabold`}>SapienceChat</span>
            </div>
            <div className='bg-background-white rel  flex flex-col gap-9  px-10 py-14 justify-center items-center '>
            {children}
            </div>
        
        </div>
        </div>
    )
}
