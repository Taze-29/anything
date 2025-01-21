import Link from "next/link"
import Faq from "./Faq";

const Footer = () => {
  return (
    <>
    <Faq />
    <div className="bg-black text-white px-8 md:px-32 pt-24 pb-8 md:py-24 w-full flex flex-col md:gap-16">
      <div className="flex w-full justify-center md:justify-between items-center gap-6">
        <img src="/logoWhite.svg" alt="Logo" className="w-28 h-28 p-6 -m-6 md:m-0 md:p-0" />
        <Link href="mailto:contact@hopzag.co.uk" className="text-xl md:text-7xl">contact@hopzag.co.uk</Link>        
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-0 justify-between items-center">
        <div className="flex items-center gap-6 md:text-xl mt-8 mb-4 md:my-0">
          <Link href="/contact">Contact</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/privacypolicy">Privacy Policy</Link>
        </div>
        <div className="border border-white mb-6 px-5 py-2 rounded-full text-white flex justify-center items-center md:text-lg hover:bg-white hover:text-black transition duration-500 cursor-pointer">
          Sign up to our newsletter
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-end items-center gap-4">
        <span className="text-xl">
          © {new Date().getFullYear()} Hopzag
        </span>        
      </div>
    </div>
    </>
  )
}

export default Footer;