import React from 'react'

export default function 
Nav() {
  return (
    <nav className='   text-white/90 flex justify-between lg:px-4
     mb-12 lg:text-[18px] text-[15px] relative'>
        <ul className='flex items-center gap-4'>
            <li>Solutions</li>
            <li>Pricing</li>
        </ul>
        <div className='font-bold text-[20px] lg:text-[25px]'>
            <span>LOGO</span>
        </div>
        <button className='hidden md:block'>
            sign in
        </button>
    </nav>
  )
}
