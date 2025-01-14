import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-black text-white px-32 py-24 w-full">
      <div className="flex w-full">
        <div className="flex flex-col w-1/2 gap-16">
          
          <span className="flex items-center text-9xl">🕸️</span>
          <div className="flex items-center text-xl gap-6">
            <Link href="">Contact</Link>
            <Link href="">FAQs</Link>
            <Link href="">Privacy Policy</Link>
          </div>
          <div className="flex items-center gap-6">
            <span>Our sectors:</span>
            <div className="border border-white px-4 py-1 rounded-full text-white flex justify-center items-center text-lg">
              Agencies
            </div>
            <div className="border border-white px-4 py-1 rounded-full text-white flex justify-center items-center text-lg">
              Agencies
            </div>
            <div className="border border-white px-4 py-1 rounded-full text-white flex justify-center items-center text-lg">
              Agencies
            </div>
            <div className="border border-white px-4 py-1 rounded-full text-white flex justify-center items-center text-lg">
              Agencies
            </div>
          </div>


        </div>
        <div className="flex flex-col w-1/2 justify-end items-end gap-16">
          <h1 className="text-7xl">contact@websitename.co.uk</h1>
          <div className="border border-white px-5 py-2 rounded-full text-white flex justify-center items-center text-lg hover:bg-white hover:text-black transition duration-500 cursor-pointer">
            Sign up to our newsletter
          </div>
          <span className="text-xl">
            © Website
          </span>
        </div>
      </div>        
    </div>
  )
}

export default Footer;