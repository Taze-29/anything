const Hero = () => {

  return (
    <div className="relative flex flex-col w-full font-bold md:leading-[25svh]">

      <div className="text-[25vw] md:text-[25svh] md:pl-[8rem]"> 
        Hero
      </div>
      <div className="text-[25vw] md:text-[25svh] md:pl-[30rem]">
        Title
      </div>
      <div className="text-[25vw] md:text-[25svh] md:pl-[12rem]">
        Here
      </div>

      <div className="absolute bottom-0 right-0 leading-normal h-24 w-[30%] flex justify-center items-center pr-[12rem] pb-[2rem] text-xl">
        <span className="font-normal">We’re a creative web design and branding agency based in London that crafts beautiful work for brands who <span className="font-bold">refuse to blend in.</span></span>
      </div>

    </div>
  )
}

export default Hero;