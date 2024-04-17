import NavLink from "./navlinks"
import Image from "next/image";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ForumIcon from '@mui/icons-material/Forum';
import CodeIcon from '@mui/icons-material/Code';
import SettingsIcon from '@mui/icons-material/Settings';
import logoBlack from '../assets/logo/logotransparent.png'
import Button from "./button";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  return (
    <nav className='fixed sm:hidden   top-0 z-[100] min-h-[100%] 
    bg-side-black md:flex flex-col md:w-[10%]  lg:w-[20%] lg:gap-6 md:gap-8  lg:px-9  md:items-center lg:items-start  md:rounded-l-md'>
      <div className="flex relative lg:left-[-1rem] items-center justify-center mb-5">
        <Image src={logoBlack} alt="logo" width={60} height={60}/>
        <span className="text-action-green hidden lg:block text-sm  font-extrabold">SapienceChat</span>
      </div>
      <ul className=' relative h-full flex flex-col space-y-3 w-full  md:items-center lg:items-start'>
        <NavLink href="/dashboard"><DashboardIcon/><span className="hidden lg:block">Dashboard </span></NavLink>
        <NavLink href="/notificaions"><AnalyticsIcon/><span className="hidden lg:block">Analytics</span></NavLink>
        <NavLink href="/messages"><ForumIcon/><span className="hidden lg:block">Messages</span></NavLink>
        <NavLink href="/developer"><CodeIcon/><span className="hidden lg:block">Developer</span></NavLink>
        <NavLink href="/account"><SettingsIcon/><span className="hidden lg:block">Settings</span></NavLink>
      </ul>
      <div className="absolute bottom-16 w-full flex justify-center items-center gap-2 left-0">
        <Button
        icons={<LogoutIcon/>}>
          <span className="hidden lg:block">Logout</span>
        </Button>
      </div>
    </nav>
  )
  
} 