import Button from "../components/button"
import { Twitter, GitHub , LinkedIn } from "@mui/icons-material"
export default function Footer () {

    return(
        <footer className="relative ">
            <div className="flex justify-end lg:px-[65px] py-6 px-6 border-4 bg-[#2a2a2a] mt-[130px] border-white/55">
                 <section className='relative lg:max-w-[50%]   flex flex-col gap-5 left-0'>

<h1 className='text-[40px]  lg:text-[65px] leading-[75px] relative  font-bold'>WHAT WE DO</h1>
<p className='text-[17px] text-white/75 '>Lorem ipsum dolor sit amet, consectetur 
adipisicing elit.
 Omnis nostrum soluta voluptatibus nemo, quibusda
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis
  neque eius debitis vel deserunt, tempore consequatur </p>

  <input type="text" placeholder="Enter your email address" className="px-6 
  py-3 rounded-lg bg-white/10 valid:bg-white/10  w-full"/>
 <Button>Subscribe</Button>
</section>
</div>
   <div className="flex justify-between lg:flex-row flex-col items-center gap-8 my-10">
    <div className="text-white/30 text-[16px] space-x-4">
        <span >Terms & Condition</span>
        <span >Privacy Policy</span>
    </div>

    <div className="space-x-6 cursor-pointer">
        <Twitter/>
        <LinkedIn/>
        <GitHub/>
    </div>
  <p  className="text-white/30 text-[16px] ">© name 2024 - All Rights Reserved</p>
   </div>
</footer>
    )
}