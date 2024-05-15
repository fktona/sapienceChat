import Nav from "../components/nav";
import Button from "../components/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-landing-bg text-start pb-8 relative
    h-full py-4  lg:text-[25px] px-[22px]   overflow-hidden text-[18px]'>
      ">
        <Nav /> 

    <div className='flex justify-start   gap-[36px]'>
      <div className='flex flex-col  z-10 items-start mt-8 justify-center
       gap-8'>
        <div>
        <p className='lg:text-[15px] text-[12px] mb-6 lg:mb-3 lg:w-[50%] w-[90%] bg-[#2a2a2a] py-2 rounded-[70px] text-center'>Specially designed for business</p>
        <h1 className=' text-[50px] lg:text-[65px] lg:leading-[75px] leading-[100%] font-bold '>TRANSFORM YOUR BUSINESS WITH POWER OF AI</h1>
        </div>
        <p className='md:text-[20px] text-[17px] text-white/75  '>Using the power of ai to provide quick and accurate answers to your audience, increasing the business growth</p>
        <Button>Explore More</Button>
      </div>
        <div className=''>
            <Image src='/ai.png' alt="ai" width={1000} height={1000} />
        </div>

        
    </div>
    <div className=" left-0  absolute w-full max-h-[100vh] overflow-hidden top-0 flex  flex-wrap gap-2 ">
            {
                Array(10000).fill(0).map((_, i) => (
                    <div key={i} className={`w-[1px] h-[1px] bg-white/15  relative top-0 left-0  
                    rounded-full`} style={{animationDelay: `${i * 0.5}s`}}></div>
                ))

            }

        </div>
    </section>
  )
}