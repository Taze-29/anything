"use client";
import { useEffect, useState, useRef } from "react";

import Macbook from "@/components/anim/mac";
import Cogs from "@/components/anim/cogs";
import SEO from "@/components/anim/seo";

const ServicesLarge = () => {

  const [scrollY, setScrollY] = useState(0);

  const heightRef = useRef(null);
  const title1 = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);

  const [active, setActive] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {      
      setScrollY(window.scrollY);
    })
    return () => {
      window.removeEventListener('scroll', () => {
        setScrollY(window.scrollY);
      }
    )};
  })

  useEffect(() => {    
    if (!title1.current && !title2.current && !title3.current) {
      return;
    }

    if (scrollY > title3.current.offsetTop + window.innerHeight/2) {
      setActive(2);
      return;
    } 
    if (scrollY > title2.current.offsetTop + window.innerHeight/2) {
      setActive(1);
      return;
    }         
    if (scrollY > title1.current.offsetTop + window.innerHeight/2) {
      setActive(0);
      return;
    }        
  }, [scrollY]);


  const stickyDiv = useRef(null);  

  useEffect(() => {
    if (title1.current){
      console.log(title1.current.offsetHeight);
      console.log(window.innerHeight);
      if (title1.current.offsetHeight < window.clientHeight) {        
        stickyDiv.current.style.height = `${title1.current.offsetHeight}px`;
      }
    }
  }, [title1.current]);

  return (
    <>    
      <div className="flex items-start w-full relative mb-8">        
      <div className="hidden xl:flex basis-1/3 sticky h-inherit w-full top-0 justify-center items-center overflow-hidden">
        <div className="flex justify-center items-center w-full h-screen" ref={stickyDiv}>
          <div className={`w-full aspect-square rounded-2xl ${active === 0 ? "bg-green-200" : active === 1 ? "bg-red-200" : "bg-blue-200"}`}>
            {active === 0 && (
              <Macbook />
            )}
            {active === 1 && (
              <div className="flex justify-center items-center lg:scale-[0.5] min-[1440px]:scale-[0.75] min-[1440px]:pt-[2vh] min-[2000px]:scale-[1] min-[2000px]:pt-[10%]">
                <Cogs />
              </div>
            )}
            {active === 2 && (
              <div className="flex justify-center items-center h-full min-[1280px]:scale-[0.5] min-[1750px]:scale-[1]">
                <SEO />
              </div>
            )}
          </div>
        </div>          
      </div>
      <div className="xl:basis-2/3 h-full xl:py-[10%]"> 
        {/* Web dev */}
          <div className="xl:p-16" ref={title1}>
            <Title num={"01"} title={"Website Development"} />
            <div className="flex flex-col gap-6 2xl:px-16">

              <div className="xl:hidden flex justify-center items-center w-full aspect-square rounded-2xl overflow-hidden bg-green-200">
                <Macbook />
              </div>

              <p className="">At HOPZAG, we specialize in crafting custom websites that are engaging, responsive, and optimized for performance. Our expert developers combine creativity and the latest technologies to deliver websites that enhance user experiences and drive business success.</p>

              <h3 className="text-xl font-bold">Custom Code</h3>
              <p>We design and develop tailored websites to suit your unique needs. Whether it's a simple informational site or a complex, feature-rich platform, we ensure your website stands out with a professional, modern design and advanced functionality.</p>

              <h3 className="text-xl font-bold">Responsive Design</h3>
              <p>We create websites that look great on any device, ensuring a smooth and consistent user experience across desktops, tablets, and smartphones. With our responsive design approach, your site will adapt effortlessly to any screen size.</p>              

              <h3 className="text-xl font-bold">Website Performance Optimization</h3>
              <p>We optimize your website’s performance by improving load times and ensuring smooth functionality. A fast, high-performing website is crucial for keeping visitors engaged and enhancing user experience.</p>

              <h3 className="text-xl font-bold">User Experience (UX) Focused</h3>
              <p>Our design approach places a strong emphasis on user experience, ensuring your website is not only visually appealing but also intuitive and easy to navigate. We focus on creating seamless journeys for your visitors that encourage engagement and retention.</p>                            
            </div>
          </div>
        {/* Web maintenance */}
          <div className="xl:p-16" ref={title2} >
            <Title num={"02"} title={"Website Maintenance"} />
            <div className="flex flex-col gap-6 2xl:px-16">  

              <div className="xl:hidden flex justify-center items-center w-full aspect-square rounded-2xl overflow-hidden bg-red-200">
                <div className="flex justify-center items-center  md:scale-[2.5] mt-[30%]">
                  <Cogs />
                </div>
              </div>    

              <p>We offer comprehensive website maintenance services to keep your site running smoothly and securely. Our team provides regular updates, monitoring, and support to ensure your website remains up-to-date, secure, and optimized for performance.</p>
              
              <h3 className="text-lg font-bold">Regular Updates</h3>
              <p>We keep your website up-to-date with the latest software, security patches, and content updates to ensure it remains secure, functional, and relevant to your audience.</p>
              
              <h3 className="text-lg font-bold">Monitoring & Support</h3>
              <p>We provide ongoing monitoring and support to address any issues that may arise, such as downtime, errors, or security vulnerabilities. Our team is available to help you resolve any issues quickly and efficiently.</p>

              <h3 className="text-lg font-bold">Performance Optimization</h3>
              <p>We monitor and optimize your website’s performance, focusing on speed, responsiveness, and load times. By making regular performance improvements, we help ensure a seamless user experience and improved site rankings.</p>

              <h3 className="text-lg font-bold">Security & Backups</h3>
              <p>Your website's security is our priority. We implement regular security checks, protect against threats, and back up your site’s data to ensure your content remains safe and recoverable in case of any issues.</p>
            </div>
          </div>
        {/* SEO */}
          <div className="xl:p-16" ref={title3} >
            <Title num={"03"} title={"Search Engine Optimization"} />
            <div className="flex flex-col gap-6 2xl:px-16">

              <div className="xl:hidden flex justify-center items-center w-full max-w-[calc(100vw-4rem)] aspect-square rounded-2xl overflow-hidden bg-blue-200">                
                <div className="flex justify-center items-center md:scale-[2.5]">
                  <SEO />
                </div>
              </div>              

              <p>Our SEO services are designed to help your website rank higher in search engine results, drive organic traffic, and increase visibility online. We use proven strategies and best practices to optimize your site for search engines and improve your online presence.</p>
              
              <h3 className="text-lg font-bold">Keyword Research</h3>
              <p>We conduct in-depth keyword research to identify the most relevant and valuable keywords for your business. By targeting the right keywords, we help you attract qualified traffic and improve your search engine rankings.</p>
              
              <h3 className="text-lg font-bold">On-Page Optimization</h3>
              <p>We optimize your website's on-page elements, such as meta tags, headings, and content, to improve its visibility and relevance to search engines. Our on-page optimization strategies help your site rank higher in search results and attract more organic traffic.</p>

              <h3 className="text-lg font-bold">Link Building</h3>
              <p>We implement high-quality link-building strategies to increase your website’s authority and credibility. By acquiring relevant backlinks from trusted sources, we improve your site's domain authority and overall search engine ranking.</p>

              <h3 className="text-lg font-bold">Technical SEO</h3>
              <p>We address the technical aspects of your website, such as site speed, mobile-friendliness, and structured data, to ensure it is fully optimized for search engines. Our technical SEO improvements help enhance your website’s performance and ensure it is easily crawlable by search engines.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Title({ num, title }) {
  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-16 items-start xl:items-center mt-8 xl:mt-0 mb-8">
      <span className="text-xs xl:text-sm text-gray-600">{num}</span>
      <h2 className="text-3xl xl:text-5xl font-bold mb-2">{title}</h2>
    </div>
  )
}

export default ServicesLarge;