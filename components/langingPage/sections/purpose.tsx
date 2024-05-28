import Image from "next/image"

export default function Purpose() {
  return (
    <section className="mt-[40px] border-t-2 border-t-white/75
     bg-landing-bg py-12">
   <div className="flex justify-between flex-col gap-5 lg:flex-row">
     <div className="lg:space-y-4 space-y-7">
        <p className='lg:text-[15px] text-[12px] mb-2   bg-[#2a2a2a] py-2 rounded-[70px] text-center'>Impact of name on business</p>
        <p className="text-[30px] font-bold text-white">GROW YOUR BUSINESS WITH </p>
        </div>
        <p className='text-[20px] lg:max-w-[50%] text-white/75  '>Lorem ipsum dolor
        
         sit amet consectetur adipisicing elit. Quisquam facilis 
         obcaecati laborum accusamus hic libero quos, id veniam 
         voluptates fugit pariatur omnis doloribus ipsam dolore, 
         issimos exercitationem quae fuga ipsa 
        error eius doloremque voluptatem corrupti!</p>
    </div>

    <div className=" flex justify-center md:flex-row flex-wrap flex-col items-center gap-10 mt-12">
      <div className=" z-10 imgclip bg-white/65 w-[300px]  h-[350px] flex items-center justify-center "><Image alt="purposeImg" 
      src={'/purposeImg3.jpg'} width={150} height={50}  className=" object-full w-[90%] imgclip h-[90%] relative"/> </div>
      <div className=" z-10 imgclip bg-white/65  w-[300px] lg:-bottom-10 h-[350px] flex items-center justify-center "><Image alt="purposeImg" 
      src={'/purposeImg.jpg'} width={150} height={50}  className=" object-full w-[90%] imgclip h-[90%] relative"/> </div>
      <div className=" z-10 imgclip bg-white/65  w-[300px]  h-[350px] flex items-center justify-center "><Image alt="purposeImg" 
      src={'/purposeImg3.jpg'} width={150} height={50}  className=" object-full w-[90%] imgclip h-[90%] relative"/> </div>
    </div>

    </section>
  )
}
