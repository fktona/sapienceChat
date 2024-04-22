import React from 'react'
import Image from 'next/image'
import logoBlack from './LogoStransparent.png'

export default function Identity() {
  return (
    <div className="flex  relative lg:left-[-1rem] items-center justify-center">
    <Image src={logoBlack} alt="logo" width={60} height={60}/>
     <p className={` text-action-green md:hidden block lg:block text-sm  font-extrabold`}>SapienceChat</p>
  </div>
  )
}
