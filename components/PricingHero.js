const PricingHero = () => {

    return (
    <div className="relative flex flex-col md:mt-[-2rem] ">

      <div className="absolute inset-0 flex justify-center top-20">
        <div className="bg-teal relative opacity-50 rounded-full w-[400px] h-[400px] absolute animate-one blur-[100px]"></div>
        <div className="bg-primary relative opacity-50 rounded-full w-[300px] h-[300px] absolute animate-two blur-[90px]"></div>
        <div className="bg-purple relative opacity-50 rounded-full w-[400px] h-[400px] absolute animate-one blur-[90px]"></div>
      </div>


      <div className="flex flex-col gap-16 relative md:px-[8rem] relative ">
        <div className= "flex flex-row md:pb-[24px]">
          <div className="w-[70%] flex items-end">
            <h1 className="md:text-[12svh] leading-[0.99]  md:mgb-[-24px] z-20 sh">
              Flexible Pricing,<br />
              Maximum value
            </h1>
          </div>
          <div
            className="w-[30%] bg-[url('/img/beauty.webp')] bg-cover bg-center rounded-full aspect-square"
          ></div>
        </div>
        <div className="flex flex-row pb-8">
          <div className="w-full"></div>
          <div className="w-full">
            <span className="w-[55%] block md:text-[2svh]">Creating custom websites with advanced design and development, optimized for performance, user experience, and business growth.</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[200px]"
        >
          <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="fill-white"></path>
        </svg>
      </div>
      </div>
      <div className="flex flex-col gap-16 md:px-[8rem] z-20 py-16 bg-white">
        <div className="flex flex-col items-center w-[60%] text-center self-center">
          <span className="font-bold md:text-[4svh] ">Custom Web Development at the Right Price!</span>
          <span>Find the right custom web development plan for your needs and budget. We create tailored, high-quality websites that drive success. Start today!</span>
        </div>
        <div className="flex flex-row gap-8 md:px-[8rem]">
          <div className="bg-[#f2f2f2] w-full md:p-8 rounded-2xl flex flex-col gap-8 shadow">
            <div className="flex flex-col gap-6 border-b-2 md:pb-8">
              <div className="flex justify-center self-start bg-black text-white md:p-3 rounded-2xl">
                <span className="font-semibold leading-none">Single Payment</span>
              </div>
              <span >Get a fully custom-built website tailored to your business needs. Pay once and own your website with no ongoing fees.</span>
              <div className="">
                <span className="font-semibold md:text-[5svh]">£2000</span><span className=""> +£25/mo Hosting</span>
              </div>
            </div>
            <div className="flex flex-col border-b-2 md:pb-8">
              <ul className="flex flex-col gap-4 font-medium">
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Feature or benefit text here</span>
                </li>
                <li className="flex gap-4 ">
                  <span>✔</span>
                  <span>Feature or benefit text here</span>
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
            </div>
            <div className="flex justify-center md:p-2 border-2 rounded-xl font-medium">
              <span>Get Started</span>
            </div>
          </div>
          <div className="bg-white w-full shadow">
            <span>Subscription</span>
          </div>
          <div className="bg-white w-full shadow">
            <span>Custom Plan</span>
          </div>
        </div>
      </div>
      <div></div>
      
      
    </div>
    
    )
  }
  
  export default PricingHero;