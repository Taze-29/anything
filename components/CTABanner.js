import Link from "next/link"
import { GoArrowRight } from "react-icons/go";

const CTABanner = () => {  

  return (
    <div className="min-w-screen h-72 md:h-64 mt-24 mb-48">
      <h2 className="text-3xl md:text-7xl font-bold py-2">
        Transform Your Online Presence Today!
      </h2>

      <p className="p-2">
      Unlock the full potential of your website with custom development, responsive design, and ongoing support. Let’s bring your vision to life and drive success together.
      </p>      

      <p className="p-2">
        Reach out to our team for a free consultation and take the first step toward building a powerful online experience.
      </p>

      <Link href="/contact" className="ml-2 w-[200px] my-2 px-2 py-1 rounded-full border border-black flex justify-center items-center gap-2 hover:bg-black hover:text-white">Get Started Now <GoArrowRight /></Link>      
    </div>
  )
}

export default CTABanner;