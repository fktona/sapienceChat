import { useAuth } from "@/context/Auth/authinfo"


export default function 
Nav() {
  return (
    <nav className='   text-white/90 flex justify-between lg:px-4
     mb-12 lg:text-[18px] text-[15px] relative'>
        <ul className='flex items-center gap-10'>
            <li>Solutions</li>
            <li>How it works</li>
        </ul>
        <div className='font-bold text-[20px] px-8 lg:text-[25px]'>
            <span>AXIOM</span>
        </div>
        <button className='hidden md:block'>
          
        </button>
    </nav>
  )
}
