'use client'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
// import { useState } from 'react';
import { MenuToggle } from '@/context/menuContext'
import Identity from '@/assets/identity'

export default function Navbar() {
  const { toggle, toggleMenu } = MenuToggle()
  return (
    <nav
      className=" fixed  w-full top-0 md:shadow-sm 
   right-0 md:shadow-black/[0.3]  md:bg-gen-white text-black
    text-md p-3 mt-9 md:mt-0 flex gap-4 justify-end"
    >
      <button onClick={toggle} className={`md:hidden`}>
        {toggleMenu ? <CloseIcon /> : <MenuIcon />}
      </button>
      <p className="flex items-center gap-1 text-sm ">
        <CircleNotificationsIcon sx={{ fontSize: 20 }} />
      </p>
      <p className="flex items-center gap-1 text-sm ">
        <PersonIcon sx={{ fontSize: 20 }} />
        kenny
      </p>
    </nav>
  )
}
