import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

export default function Navbar() {
  return (
   <nav className=' fixed w-full top-0 shadow-sm shadow-black/[0.3] bg-white bg-gen-white  text-black text-md p-3 flex gap-4 justify-end'>
    <p className='flex items-center gap-1 text-sm '><CircleNotificationsIcon sx={{ fontSize: 20 }}/></p>
    <p className='flex items-center gap-1 text-sm '><PersonIcon sx={{ fontSize: 20 }}/>kenny</p>
   </nav>
  )
}
