import Image from 'next/image';

const SecondHero = () => {

    return (
    <div className="bg-contact-bg  md:h-[calc(100vh-7rem)] bg-no-repeat relative md:bg-[left_+120px_top_-130px] flex"
    style={{
        backgroundSize: "52%",
      }}>
        <div className="absolute top-64 right-8 text-left flex gap-4">
            <h2 className="text-lg md:text-3xl font-bold text-[#343a40]">GET IN TOUCH</h2>
            <img 
            src="/arrow-down.svg" 
            alt="Arrow Down" 
            className=" w-6 h-6 md:w-8 md:h-8 mx-auto "
            />
        </div>
        <h1 className="absolute md:leading-[0.85] bottom-12 right-8 text-right text-[12svh] md:text-[11rem] ">
            LIMITLESS<br /> DESIGN<br /> SOLUTIONS
        </h1>
        <span className="absolute top-32 left-16 -translate-y-1/2 text-left text-sm md:text-base md:w-52 text-[#343a40]">
            UNLEASHING BOUNDLESS CREATIVITY FOR YOUR BRAND
        </span>
        <span className="absolute bottom-32 left-28 text-right text-sm md:text-base md:w-72 text-[#343a40]">
            VISIONARY DESIGNERS DEDICATED TO TRANSFORMING YOUR IDEAS INTO VISUALS
        </span>
    </div>
    
    )
  }
  
  export default SecondHero;