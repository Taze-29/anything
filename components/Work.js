import Project from "./Project";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const projects = [
  {
    name: "Eleanor Wakefield",
    year: "2024",
    src: "/img/eleanorwakefield.jpg",
    desc: "We built a custom website for our client to showcase their work and services.",
    url: "https://eleanorwakefield.com",
    tags: ["Web Design", "Web Development", "Image Optimisation"],
  },
  {
    name: "Brikbloom Property Sourcing",
    year: "2024",
    src: "/img/brikbloom.png",
    desc: "We rebuilt our client's existing website to run at blazing fast speeds.",
    url: "https://brikbloom.com",
    tags: ["Web Design", "Web Development", "SEO"],
  }
]

const Work = () => {
  return (
    <div className="flex flex-col bg-black">

      <div className="flex justify-between px-36 h-[75svh] py-20">
        <div className="flex flex-col w-1/2 justify-end">
          <h1 className="text-[9vw] leading-none text-white">OUR</h1>
          <h1 className="text-[9vw] leading-none text-white pl-32">WORK</h1>
        </div>

        <div className="flex flex-col w-1/2 justify-center gap-4 pr-30">
          <h2 className="text-7xl text-white">Elevating websites to a whole new level.</h2>
          <p className="text-white text-lg">First impressions matter, and your website is your chance to impress. Why settle for average design? The best websites break the mold and push creative boundaries to engage and captivate visitors from the start.</p>
        </div>        
      </div>

    <div className="flex flex-col items-center px-36 gap-12">
      {projects.map(({ name, year, src, desc, url, tags }, index) => {
        return (
          <Project name={name} year={year} src={src} desc={desc} url={url} tags={tags} key={index} />
        );
      })}
      <div className="flex justify-center items-center w-1/2 h-24">
        <Link 
          className="border-2 border-white rounded-full py-3 px-5 text-white flex justify-center items-center leading-none gap-2 hover:bg-white hover:text-black transition duration-500"
          href="/projects"
        >
          View all projects <FiArrowRight />
        </Link>
      </div>
    </div>


    </div>
  );
}

export default Work;