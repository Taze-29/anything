import Link from "next/link"
import { GoArrowRight } from "react-icons/go";

const CTABanner = () => {  

  return (
    <div className="min-w-screen h-72 lg:h-64 mt-24 mb-48 lg:mb-60 lg:text-lg">
      <h2 className="text-3xl lg:text-7xl font-bold py-2">
        Transform Your Online Presence Today!
      </h2>

      <p className="p-2">
      Unlock the full potential of your website with custom development, responsive design, and ongoing support. Let’s bring your vision to life and drive success together.
      </p>      

      <p className="p-2">
        Reach out to our team for a free consultation and take the first step toward building a powerful online experience.
      </p>

      <Link href="/contact" className="ml-2 w-[200px] lg:w-[250px] my-2 px-2 py-1 lg:px-4 lg:py-2 rounded-full border border-black flex justify-center items-center gap-2 transition-all duration-300 hover:bg-black hover:text-white">Get Started Now <GoArrowRight /></Link>      
    </div>
  )
}

export default CTABanner;