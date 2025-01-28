import Image from 'next/image';

const SecondHero = () => {

    return (
    <div className="ipad-pro-landscape-custom bg-contact-bg bg-[length:110%] md:bg-[length:100%] lg:bg-[length:52%] h-[100vh] bg-center md:bg-[center_80%]  bg-no-repeat relative lg:bg-[left_+120px_top_100px] xl:bg-[left_+140px_top_-40px] flex"
    >
        <div className="absolute lg:top-64 lg:right-8 lg:text-left bottom-5 flex w-[100%] lg:w-auto justify-center gap-4 ">
            <h2 className="text-lg lg:text-3xl font-bold text-[#343a40] ">GET IN TOUCH</h2>
            <img 
            src="/arrow-down.svg" 
            alt="Arrow Down" 
            className=" w-6 h-6 lg:w-8 lg:h-8 lg:mx-auto "
            />
        </div>
        <h1 className="absolute px-7 lg:px-0 leading-[0.85] lg:bottom-12 lg:right-8 lg:text-right text-[13vw] top-28 lg:top-auto lg:text-[10vw]  ">
        ENHANCE<br />  YOUR<br /> VISION
        </h1>
        <span className="absolute top-52 lg:left-8 2xl:left-16 -translate-y-1/2 text-left text-sm md:text-base md:w-64 text-[#343a40] hidden lg:block">
            ELEVATING YOUR BRAND WITH BOUNDLESS IMAGINATION
        </span>
        <span className="absolute bottom-32 lg:bottom-64 xl:bottom-32 2xl:left-28 left-16 lg:left-0 xl:left-16 text-right text-sm md:text-base md:w-64 text-[#343a40] hidden lg:block">
            CREATIVE EXPERTS COMMITTED TO BRINGING YOUR VISION TO LIFE
        </span>
        <span className="absolute text-left text-[16px] bottom-[12vh] text-[#343a40] lg:hidden px-7">
            ELEVATING YOUR BRAND WITH BOUNDLESS IMAGINATION, CREATIVE EXPERTS COMMITTED TO BRINGING YOUR VISION TO LIFE
        </span>
    </div>
    
    )
  }
  
  export default SecondHero;