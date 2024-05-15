import Button from "../components/button"
import Image from "next/image"

export default function Assistants() {
  return (
    <section className="mt-[90px] 
     bg-landing-bg">
   <div className="flex justify-between">
     <div className="lg:space-y-4 space-y-7">
        <p className="text-[30px] font-bold text-white">MEET OUR ASSISTANTS</p>
        
        <p className='text-[20px] lg:max-w-[50%] text-white/75  '>Lorem ipsum dolor
         sit amet consectetur adipisicing elit. Quisquam facilis 
         obcaecati laborum accusamus hic libero quos, id veniam 
         voluptates fugit pariatur omnis doloribu</p>
         </div>
    </div>

    <div className=" flex justify-center md:flex-row-reverse flex-wrap flex-col-reverse items-center relative z-10 pb-9 gap-10 mt-12 lg:mt-[120px]">
      <div className=" z-10   bg-white/65 relative w-[300px]  h-[330px] flex items-center justify-center "><Image alt="purposeImg" 
      src={'/avatar/Nova.jpg'} width={150} height={50}  className=" object-full w-[99%]  h-[99%] relative"/> </div>
      <div className=" z-10  bg-white/65 relative  w-[300px] lg:bottom-[70px] h-[330px] flex flex-col items-center justify-center "><Image alt="purposeImg" 
      src={'/avatar/Bob.jpg'} width={150} height={50}  className=" object-full w-[99%]  h-[99%] relative"/>
       </div>
      <div className=" z-10  bg-white/65  w-[300px]  h-[330px] flex items-center justify-center "><Image alt="purposeImg" 
      src={'/avatar/Luna.jpg'} width={150} height={50}  className=" object-full w-[99%]  h-[99%] relative"/> </div>
     <div className="absolute bottom-[30px] hidden z-20"><Button>Explore More</Button></div>
    </div>


    </section>
  )
}
