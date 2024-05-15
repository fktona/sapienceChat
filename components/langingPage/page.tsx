import Hero from "./sections/hero"
import Purpose from "./sections/purpose"
import Impact from "./sections/impact"
import Reason from "./sections/Reason"
import Assistants from "./sections/assistant"
import Footer from "./sections/footer"

export default function LandingPage() {
  return (
    <main className=" top-0 text-white  
    absolute w-full left-0  bg-landing-bg">
        <Hero />
        <div className="md:px-[55px] px-[22px]">
        <Purpose />
        <Impact/>
        <Reason/>
        <Assistants/>
        <Footer/>
        </div>
    </main>
  )
}
