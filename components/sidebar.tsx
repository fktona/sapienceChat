'use client'
import NavLink from "./navlinks"
import Image from "next/image";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ForumIcon from '@mui/icons-material/Forum';
import CodeIcon from '@mui/icons-material/Code';
import SettingsIcon from '@mui/icons-material/Settings';
import Identity from "@/assets/identity";
import Button from "./button";
import LogoutIcon from '@mui/icons-material/Logout';
import {MenuToggle} from "@/context/menuContext";
import logoBlack from '@/assets/Logo/logotransparent.png'
import Link from "next/link";
export default function Sidebar() {
  
  const {toggle, toggleMenu} = MenuToggle()
 return (
   <nav className={`fixed top-0 z-[100] min-h-[100%] 
   bg-side-black ${toggleMenu ? 'flex' : 'md:flex hidden'}  flex-col md:w-[10%]  lg:w-[20%] lg:gap-8
    gap-8  lg:px-9  items-center lg:items-start  rounded-l-md  `}>
     <div className="hidden lg:block"><Identity/></div>
    <Image src={logoBlack} alt="logo" width={60} height={60} className="lg:hidden"/>
     <ul className=' relative h-full flex flex-col space-y-3 w-full  items-center lg:items-start'>
       <NavLink href="/dashboard"><DashboardIcon/><span className="hidden lg:block">Dashboard</span></NavLink>
       <NavLink href="/analytics"><AnalyticsIcon/><span className="hidden lg:block">Analytics</span></NavLink>
       <NavLink href="/messages"><ForumIcon/><span className="hidden lg:block">Messages</span></NavLink>
       <NavLink href="/developer"><CodeIcon/><span className="hidden lg:block">Developer</span></NavLink>
       <NavLink href="/settings"><SettingsIcon/><span className="hidden lg:block">Settings</span></NavLink>
     </ul>
     <Link href="/authorization" className="absolute bottom-16 md:w-full w-[70%] flex justify-center items-center gap-2 md:left-0">
       <Button
       icons={<LogoutIcon/>}>
         <span className="hidden lg:block">Logout</span>
       </Button>
     </Link>
   </nav>
 )
}