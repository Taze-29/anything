import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Index({ modal, projects, project }) {
  /* Move modal with mouse */
  const container = useRef(null);
  const modalImg = useRef(null);
  const yOffset = 125;

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (container.current) {
        container.current.style.left = e.clientX + "px";
        container.current.style.top =
          window.scrollY - yOffset + e.clientY + "px";
      }
    });

    //Set initial y translate
    if (modalImg.current) {
      modalImg.current.style.transform = `translate(200%, ${-project * 100}%)`;
    }
  }, [modal]);

  //translate modal in x every .3 seconds while active
  useEffect(() => {    
    const interval = setInterval(() => {
      if (modalImg.current && modal) {
        modalImg.current.style.transform = `translate(0%, ${
          -project * 100
        }%)`;  
      }
    }, 300);

    return () => clearInterval(interval);
  });


  const images = projects.map(({ name, srcs }, index) => {
    return (
      <div className="w-[200px] h-[300px]" key={index}>
        {srcs.map((src, index) => {
          return (
            <Image src={src} alt={name} key={index} width={200} height={300} />
          );
        })}
      </div>
    );
  });

  return (
    <div ref={container} 
      className={`${modal ? "opacity-100 scale-[1.2] h-[300px]" : "opacity-0 scale-1 h-[0px]"} absolute overflow-hidden transition-opacity-0.5s transition-scale-0.2s transition-transform-0s pointer-events-none z-30`}      
    >
      <div ref={modalImg} className="relative flex flex-col justify-start items-center h-[300px] w-[200px]">
        {images}
      </div>
    </div>
  );
}

