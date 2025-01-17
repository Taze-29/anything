import HoverArea from "@/components/HoverArea"

import Paragraph from "@/components/Character";

const Bespoke = () => {  

  return (
    <div className="overflow-hidden">
    <div className="w-full flex justify-center items-center text-8xl mt-32 mb-24">
      <div className="w-[75%] text-center">        
        <Paragraph paragraph={"We create custom websites with a focus on three key elements"} />                    
      </div>
    </div>
    <HoverArea />
    </div>
  )
}

export default Bespoke;