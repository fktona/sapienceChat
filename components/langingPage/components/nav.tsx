import React from 'react'

export default function 
Nav() {
  return (
    <nav className='   text-white/90 flex justify-between px-4
     mb-12 text-[18px] relative'>
        <ul className='flex items-center gap-4'>
            <li>Solutions</li>
            <li>Pricing</li>
        </ul>
        <div className='font-bold text-[25px]'>
            <span>LOGO</span>
        </div>
        <button>
            sign in
        </button>
    </nav>
  )
}
