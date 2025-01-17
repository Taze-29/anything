import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-black text-white px-32 py-24 w-full">
      <div className="flex w-full">
        <div className="flex flex-col w-1/2 gap-16">
                    
          <img src="/logoWhite.svg" alt="Logo" className="w-28 h-28" />
          <div className="flex items-center text-xl gap-6">
            <Link href="/contact">Contact</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/privacypolicy">Privacy Policy</Link>
          </div>
          <div className="flex items-center gap-6">
            <span>Our sectors:</span>
            <div className="border border-white px-4 py-1 rounded-full text-white flex justify-center items-center text-lg">
              Photography
            </div>
            <div className="border border-white px-4 py-1 rounded-full text-white flex justify-center items-center text-lg">
              Property
            </div>            
          </div>


        </div>
        <div className="flex flex-col w-1/2 justify-end items-end gap-16">
          <Link className="text-7xl" href="mailto:contact@hopzag.co.uk">contact@hopzag.co.uk</Link>
          <div className="border border-white px-5 py-2 rounded-full text-white flex justify-center items-center text-lg hover:bg-white hover:text-black transition duration-500 cursor-pointer">
            Sign up to our newsletter
          </div>
          <span className="text-xl">
            © {new Date().getFullYear()} Hopzag
          </span>
        </div>
      </div>        
    </div>
  )
}

export default Footer;