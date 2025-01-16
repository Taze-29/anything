const PricingHero = () => {

    return (
    <div className="md:px-[8rem] flex flex-col gap-16">
      <div className= "flex flex-row ">
        <div className="w-[70%] flex items-end">
          <h1 className="md:text-[12svh] leading-[0.99] md:pb-[24px] md:mgb-[-24px]">
            Flexible Pricing,<br />
            Maximum value
          </h1>
        </div>
        <div className="w-[30%] bg-red-500 rounded-full aspect-square"></div>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center w-[50%] text-center self-center">
          <span className="font-bold md:text-[4svh]">Custom Web Development at the Right Price!</span>
          <span>Find the right custom web development plan for your needs and budget. We create tailored, high-quality websites that drive success. Start today!</span>
        </div>
        <div className="flex flex-row gap-8 md:px-[8rem]">
          <div className="bg-white w-full md:p-8 rounded-2xl flex flex-col gap-8">
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
          <div className="bg-white w-full">
            <span>Subscription</span>
          </div>
          <div className="bg-white w-full">
            <span>Custom Plan</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    )
  }
  
  export default PricingHero;