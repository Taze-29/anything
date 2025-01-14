import Project from "./Project";
import { FiArrowRight } from "react-icons/fi";


const projects = [
  {
    name: "My project",
    year: "2024",
    src: "/img/blavatnik/img6.jpg",
    desc: "We created the visual and verbal brand for this new flight loan company.",
    tags: ["Branding", "Web Design", "Web Development"],
  },
  {
    name: "My project",
    year: "2024",
    src: "/img/blavatnik/img6.jpg",
    desc: "We created the visual and verbal brand for this new flight loan company.",
    tags: ["Branding", "Web Design", "Web Development"],
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

        <div className="flex flex-col w-1/2 justify-center gap-4">
          <h2 className="text-7xl text-white">Making brands a damn site better.</h2>
          <p className="text-white text-lg">Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why choose bad design? Brands win over fans when they’re brave enough to go beyond their creative comfort zone.</p>
        </div>        
      </div>

    <div className="flex flex-col items-center px-36 gap-12">
      {projects.map(({ name, year, src, desc, tags }, index) => {
        return (
          <Project name={name} year={year} src={src} desc={desc} tags={tags} key={index} />
        );
      })}
      <div className="flex justify-center items-center w-1/2 h-24">
        <button className="border-2 border-white rounded-full py-3 px-5 text-white flex justify-center items-center leading-none gap-2 hover:bg-white hover:text-black transition duration-500">View all projects <FiArrowRight /></button>
      </div>
    </div>


    </div>
  );
}

export default Work;