import Link from "next/link";

const PricingHero = () => {

    return (
      <div className="relative flex flex-col xl:mt-[rem] lg:mt-[1rem] md:mt-[0rem] pt-[9rem] xl:pt-[0rem]">

      <div className="absolute sm:inset-0 flex flex-col sm:flex-row  justify-center md:top-[-80px] lg:top-[-40px] xl:top-20 top-0">
        <div className="bg-teal relative opacity-60 rounded-full w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] absolute animate-one blur-[40px] lg:blur-[100px]"></div>
        <div className="bg-primary relative opacity-60 rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] absolute animate-two blur-[40px] lg:blur-[90px]"></div>
        <div className="bg-purple relative opacity-40 rounded-full w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] absolute animate-one blur-[40px] lg:blur-[90px]"></div>
      </div>

      <div className="flex flex-col xl:gap-16 relative lg:px-[8rem] md:px-[3rem] sm:px-[4rem] px-[2rem] relative ">
        <div className= "flex flex-col xl:flex-row md:pb-[24px] xl:h-[60vh] lg:h-[40vh] sm:h-[30vh] h-[70vh]">
          <div className=" xl:w-[70%] flex items-end xl:pb-[10rem] lg:pb-[3rem] pb-[4rem]">
            <h1 className="2xl:text-[13svh] xl:text-[10svh] lg:text-[10svh] md:text-[7svh] sm:text-[7svh] text-[14vw] leading-[0.99] md:mgb-[-24px] z-20">
              Flexible Pricing,<br />
              Maximum value
            </h1>
          </div>
          <div className=" xl:w-[30%]  flex justify-end items-end">
            <span className="md:w-[60%] w-[80%] xl:w-[80%] block text-[12px] md:text-[1.5svh] lg:text-[2svh] text-right sm:text-left">Creating custom websites with advanced design and development, optimized for performance, user experience, and business growth.</span>
          </div>
        </div>
        <div className="flex flex-row pb-8 relative">
          <div className="w-full"></div>
          
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[200px]"
        >
          <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="fill-white"></path>
        </svg>
      </div>
      </div>
      <div className="flex flex-col gap-16 2xl:px-[6rem] z-20 py-16 bg-white">
        <div className="flex flex-col items-center text-center self-center gap-2 lg:gap-2">
          <span className="font-bold text-[16px] md:text-[4svh] lg:text-[4svh] lg:px-[4rem] md:px-[3rem] px-[1rem]">Custom Web Development at the Right Price</span>
          <span className="text-[12px] md:text-[16px] lg:text-[14px] xl:text-[16px] xl:px-[25vw] 2xl:px-[20vw] lg:px-[8rem] md:px-[6rem] px-[1rem]">Find the right custom web development plan for your needs and budget. We create tailored, high-quality websites that drive success. Start today!</span>
        </div>
        <div className="flex flex-col md:px-[11rem] lg:px-8 lg:flex-row gap-16 lg:gap-6 2xl:px-[8rem] xl:px-[6rem] md:px-[10rem] px-[1.5rem] md:pb-8 md:items-stretch">
          <div className="bg-[#f2f2f2] w-full md:p-8 p-4 rounded-2xl flex flex-col gap-8 shadow-lg ">
            <div className="flex flex-col gap-6 border-b-2 border-black md:pb-8 pb-4">
              <div className="flex justify-center self-start bg-black text-white md:p-3 p-2 rounded-2xl shadow">
                <span className="font-semibold leading-none text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px]">Single Payment</span>
              </div>
              <span className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px]">Get a fully custom-designed website with clean, efficient code built for long-term reliability. Pay once, own forever, with no recurring charges.</span>
              <div className="">
                <span className="font-semibold md:text-[5svh] lg:text-[4svh] xl:text-[5svh]">£2000</span><span className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px]"> +£25/mo Hosting</span>
              </div>
            </div>
            <div className="flex flex-col ">
              <ul className="flex flex-col gap-4 font-medium text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px]">
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Design and Custom Development</span>
                </li>
                <li className="flex gap-4 ">
                  <span>✔</span>
                  <span>No Third-Party Builders, Fully Custom-Crafted</span>
                </li>
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Feature or benefit text here</span>
                </li>
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>+ £100 per/page after 5</span>
                </li>
                <li className="flex gap-4">
                  <span>✖</span>
                  <span className="text-[#343a40]">24/7 Support</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto border-t-2 border-black md:pt-8 pt-4">
            <Link href="/contact" className="flex justify-center md:p-2 p-1 border-2 border-black rounded-xl font-medium text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              <span>Get Started</span>
            </Link>
            </div>
          </div>
          <div className="bg-[#f2f2f2] w-full p-4 md:p-8 rounded-2xl flex flex-col gap-8 shadow-lg ">
            <div className="flex flex-col gap-6 border-b-2 border-black md:pb-8 pb-4">
              <div className="flex justify-center self-start bg-black text-white md:p-3 p-2 rounded-2xl shadow">
                <span className="font-semibold leading-none text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px]">Subscription</span>
              </div>
              <span className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px]">Get a fully custom-built website with everything included in (get chat gpt to write) monthly payment. No hidden fees, just ongoing support and updates.</span>
              <div className="">
                <span className="font-semibold md:text-[5svh] lg:text-[4svh] xl:text-[5svh]">£185</span><span className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px]">/mo. </span>
              </div>
            </div>
            <div className="flex flex-col ">
              <ul className="flex flex-col gap-4 font-medium text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px]">
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Design and Custom Development</span>
                </li>
                <li className="flex gap-4 ">
                  <span>✔</span>
                  <span>24/7 Support</span>
                </li>
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Hosting Included</span>
                </li>
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Unlimited Updates</span>
                </li>
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>+ £100 per/page after 5</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto border-t-2 border-black md:pt-8 pt-4">
            <Link href="/contact" className="flex justify-center md:p-2 p-1 border-2 border-black rounded-xl font-medium text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              <span>Get Started</span>
            </Link>
            </div>
          </div>
          <div className="bg-[#f2f2f2] w-full p-4 md:p-8 rounded-2xl flex flex-col gap-8 shadow-lg min-h-[480px] md:min-h-[620px]"
          style={{
            background: "linear-gradient(to bottom, rgba(155, 48, 255, 0.3) 0%, rgba(255, 0, 179, 0.3) 50%, #f2f2f2 90%)",
          }}>
            <div className="flex flex-col gap-6 ">
              <div className="flex justify-center self-start bg-white p-2 md:p-3 rounded-2xl shadow">
                <span className="font-semibold leading-none text-black text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px]">Custom Plan</span>
              </div>
              <span className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px]">Let’s connect to explore how we can craft a website perfectly tailored to your unique goals and vision.</span>
              <div className="">
                <span className="font-semibold md:text-[5svh] lg:text-[4svh] xl:text-[5svh] ">Get in Touch</span><span className=""></span>
              </div>
            </div>
            {/* <div className="flex flex-col border-b-2 border-black md:pb-8">
              <ul className="flex flex-col gap-4 font-medium ">
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Custom Design and Development</span>
                </li>
                <li className="flex gap-4 ">
                  <span>✔</span>
                  <span>No Third-Party Builders, Fully Custom-Crafted</span>
                </li>
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Feature or benefit text here</span>
                </li>
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Feature or benefit text here</span>
                </li>
              </ul>
            </div> */}
            <div className="mt-auto border-t-2 border-black md:pt-8 pt-4">
            <Link href="/contact" className="flex justify-center md:p-2 p-1 border-2 border-black rounded-xl font-medium text-white bg-black text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] hover:bg-inherit hover:text-black transition-all duration-300 cursor-pointer">
              <span>Get Started</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      
      
    </div>
    
    )
  }
  
  export default PricingHero;