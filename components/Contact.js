"use client";

import axios from 'axios';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        acceptPrivacy: false,
      });

    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await axios.post("/api/sendEmail", formData);
      
            if (response.data.success) {
              setStatus("Message sent successfully!");
              setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                acceptPrivacy: false,
              });
            } else {
              setStatus("Failed to send the message.");
            }
          } catch (error) {
            console.error("Error submitting the form:", error);
            setStatus("An error occurred. Please try again.");
          } finally {
            setSubmitting(false);
          }
        };

    return (
    <div className="h-screen flex relavtive justify-between lg:px-[8rem]">
        <div className="flex flex-col w-[35%] gap-8 h-[70%] justify-center">
            <p className='lg:text-2xl'>Contact Us</p>
            <h2 className='lg:text-6xl'>Your project<br /> Take the next step</h2>
            <p className=''>Send us an email and let us know everything you want out of a new site. We respond to everyone within 24 hours of contacting us. Or give us a call and reach us immediately for a chat. If we are unavailable we will call back same day.</p>
        </div>
        <form className="w-[45%]" onSubmit={handleSubmit}>
            <div className="flex flex-col h-[100%] justify-center gap-20">
                <div >
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full lg:text-xl p-2 border-b-2 border-gray-300 bg-inherit focus:outline-none"
                    placeholder="Name *"
                    required
                    />
                </div>
                <div >
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full lg:text-xl p-2 border-b-2 border-gray-300 bg-inherit focus:outline-none"
                    placeholder="Email *"
                    required
                    />
                </div>
                <div>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full lg:text-xl p-2 border-b-2 border-gray-300 bg-inherit focus:outline-none"
                    placeholder="Phone Number *"
                    />
                </div>
                <div>
                <textarea
                    id="message"
                    name="message"
                    rows="1"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full lg:text-xl p-2 border-b-2 border-gray-300 bg-inherit focus:outline-none"
                    placeholder="Message"
                    ></textarea>
                </div>
                <div className="flex items-center space-x-4">
                    <input
                        type="checkbox"
                        id="accept-privacy"
                        name="acceptPrivacy"
                        checked={formData.acceptPrivacy}
                        onChange={handleChange}
                        className="appearance-none flex justify-center items-center h-5 w-6 border-2 rounded border-gray-300 bg-white checked:border-black checked:bg-black checked:after:content-['✓'] checked:after:text-white focus:outline-none focus:ring-0"
                        required
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
                    disabled={submitting}
                    className="border-2 lg:text-xl border-black rounded-full py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
                    >
                        {submitting ? "Submitting..." : "Submit"}
                    </button>
                </div>
                {status && <p className="text-center text-sm mt-4">{status}</p>}
            </div>
        </form>
    </div>
    
    )
  }
  
  export default Contact;