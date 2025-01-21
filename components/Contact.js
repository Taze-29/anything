import Image from 'next/image';

const Contact = () => {

    return (
    <div className="h-screen flex relavtive justify-between md:px-[8rem]">
        <div className="flex flex-col w-[35%] gap-8 h-[70%] justify-center">
            <p className='md:text-2xl'>Contact Us</p>
            <h2 className='md:text-6xl'>Your project<br /> Take the next step</h2>
            <p className=''>Send us an email and let us know everything you want out of a new site. We respond to everyone within 24 hours of contacting us. Or give us a call and reach us immediately for a chat. If we are unavailable we will call back same day.</p>
        </div>
        <form className="w-[45%]">
            <div className="flex flex-col h-[100%] justify-center gap-20">
                <div >
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full md:text-xl p-2 border-b-2 border-gray-300 bg-inherit focus:outline-none required:border-b-red-500"
                        placeholder="Name *"
                    />
                </div>
                <div >
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="w-full md:text-xl p-2 border-b-2 border-gray-300 bg-inherit focus:outline-none"
                        placeholder="Email *"
                    />
                </div>
                <div>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="w-full md:text-xl p-2 border-b-2 border-gray-300 bg-inherit focus:outline-none"
                        placeholder="Phone Number *"
                    />
                </div>
                <div>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="1" 
                        className="w-full md:text-xl p-2 border-b-2 border-gray-300 bg-inherit focus:outline-none"
                        placeholder="Message"
                    ></textarea>
                </div>
                <div className="flex items-center space-x-4">
                    <input 
                        type="checkbox" 
                        id="accept-privacy" 
                        name="accept-privacy"
                        className="appearance-none flex justify-center items-center h-5 w-6 border-2 rounded border-gray-300 bg-white checked:border-black checked:bg-black checked:after:content-['✓'] checked:after:text-white focus:outline-none focus:ring-0"
                    />
                    <label 
                        htmlFor="accept-privacy" 
                        className="text-sm text-gray-600"
                    >
                        I accept the <a href="/privacy-policy" className=" underline">Privacy Policy</a>
                    </label>
                </div>
                <div className='flex justify-end'>
                    <button 
                        type="submit" 
                        className="border-2 md:text-xl border-black rounded-full py-2 px-4 hover:bg-black hover:text-white transition-all duration-300 "
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
    
    )
  }
  
  export default Contact;