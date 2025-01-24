import Link from "next/link"
import Faq from "./Faq";

const Footer = () => {
  return (
    <>
    <section>
      <Faq />
    </section>
    <section>
      <div className="bg-black text-white px-8 lg:px-32 pt-24 pb-8 lg:py-24 w-full flex flex-col lg:gap-16">
        <div className="flex w-full justify-center lg:justify-between items-center gap-6">
          <img src="/logoWhite.svg" alt="Logo" className="w-28 h-28 p-6 -m-6 lg:m-0 lg:p-0" />
          <Link href="mailto:contact@hopzag.co.uk" className="text-xl lg:text-5xl xl:text-7xl">contact@hopzag.co.uk</Link>        
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-0 justify-between items-center">
          <div className="flex items-center gap-6 lg:text-xl mt-8 mb-4 lg:my-0">
            <Link href="/contact">Contact</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/privacypolicy">Privacy Policy</Link>
          </div>
          <div className="border border-white mb-6 px-5 py-2 rounded-full text-white flex justify-center items-center lg:text-lg hover:bg-white hover:text-black transition duration-500 cursor-pointer">
            Sign up to our newsletter
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-end items-center gap-4">
          <span className="text-xl">
            © {new Date().getFullYear()} Hopzag
          </span>        
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer;