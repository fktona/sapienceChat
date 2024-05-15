import React from 'react'
import Link from 'next/link'

export default function Button ({children}: {children: React.ReactNode}) {
  return (
    
   <Link href={'/authorization'} target='_blank' className='relative'>
    <button className='btnclip bg-white pl-5 py-3 pr-12 text-black '>
        {children}
    </button>
    </Link>
    
  )
}
