import Link from 'next/link'

const ServiceCard = ({title, tags, desc, link, imgSrc}) => {



  return (
    <div className="min-h-[100vh] flex justify-center items-center sticky top-0">
      <div className="relative top-[-10%] w-[90%] h-[90vh]"> 
        <div className="flex bg-gray-100 rounded-[60px]">
          <div className="flex flex-col w-[50%] px-16 py-48 gap-8 ">

            <div className="text-[110px] leading-none">{title}</div>

            <div className="flex gap-4">
              {tags.map((tag, index) => {
                return (
                  <div key={index} className="border border-grey-100 rounded-3xl py-1 px-2 hover:bg-black hover:text-white transition duration-300">{tag}</div>
                )
              })}              
            </div>

            <div className="text-2xl">{desc}</div>

            <div><Link href="" className="border-2 border-black rounded-full py-1 px-2">Find out more ➡️</Link></div>

          </div>
          <div className="flex px-16 w-[50%] justify-center items-center">
            <div className="w-[100%] h-[80%] bg-red-500 border rounded-tr-[200px]"></div>
          </div>
        </div>
      </div>     
    </div>
  )
}
export default ServiceCard