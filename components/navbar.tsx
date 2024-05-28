'use client'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { MenuToggle } from '@/context/menuContext'
import { useAuth } from '@/context/Auth/authinfo'
import withAuth from '@/hooks/withAuth'

 const Navbar = () =>{
  const { state } = useAuth()
  const { toggle, toggleMenu } = MenuToggle()
  return (
    <nav
      className="   w-full top-0 md:shadow-sm 
   right-0 md:shadow-black/[0.3]  md:bg-gen-white text-black
    text-md p-3 mt-9 md:mt-0 flex gap-4 justify-end"
    >
      <button onClick={toggle} className={`md:hidden`}>
        {toggleMenu ? <CloseIcon /> : <MenuIcon />}
      </button>
      <p className="flex items-center gap-1 text-sm ">
        <CircleNotificationsIcon sx={{ fontSize: 20 }} />
      </p>
     {state?.email && <p className="flex items-center cursor-pointer gap-1 text-sm ">
        <PersonIcon sx={{ fontSize: 20 }} />
        {state?.email}
      </p>} 
    </nav>
  )
}


export default Navbar