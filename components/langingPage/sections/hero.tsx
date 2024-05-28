import Nav from "../components/nav";
import Button from "../components/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-landing-bg text-start pb-8 relative
    h-full py-4  lg:text-[25px] px-[22px] lg:pl-[55px]  overflow-hidden text-[18px]'>
      ">
        <Nav /> 

    <div className='flex justify-start   gap-[36px]  items-start'>
      <div className='flex flex-col  z-10 items-start lg:max-w-[60%]  justify-center
       gap-2'>
        <div>
        <p className='lg:text-[15px] text-[12px] mb-6 lg:mb-3 lg:w-[50%] w-[90%] bg-[#2a2a2a] py-2 rounded-[70px] text-center'>Specially designed for business</p>
        <h1 className=' text-[50px] lg:text-[55px] lg:leading-[75px] leading-[100%] font-bold '>TRANSFORM YOUR BUSINESS WITH POWER OF AI</h1>
        </div>
        <p className='md:text-[20px] text-[17px] text-white/75  '>Using the power of ai to provide quick and accurate answers to your audience, increasing the business growth</p>
        <Button>Explore More</Button>
      </div>
        <div className='relative -right-[20px] robot '>
            <Image src='/ball.png' alt="ai" width={400} height={400} className=" robot  relative top-[30px] left-8 animate-spin" />
            <Image src='/hand.png' alt="ai" width={1300} height={800} className="  hue-rotate-90 relative bottom-[100px]"  />
        </div>

        
    </div>
    <div className=" left-0  absolute w-full h-full p-0 overflow-hidden top-0 flex   flex-wrap gap-2 ">
            {
                Array(10000).fill(0).map((_, i) => (
                    <div key={i} className={`w-[1px] h-[1px] bg-white/15  relative top-0 left-0 
                    rounded-full`} style={{animationDelay: `${i * 0.5}s ` } }></div>
                ))

            }

        </div>
    </section>
  )
}