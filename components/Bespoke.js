import HoverArea from "@/components/HoverArea"

import Paragraph from "@/components/Character";

const Bespoke = () => {  

  return (
    <div className="overflow-hidden">
    <div className="w-full flex justify-center items-center text-3xl lg:text-8xl mt-32 mb-24 px-8 lg:px-16 xl:px-0">
      <div className="text-center text-balance xl:w-[1000px]">
        <Paragraph paragraph={"We create custom websites with a focus on three key elements"} />                    
      </div>
    </div>
    <HoverArea />
    </div>
  )
}

export default Bespoke;