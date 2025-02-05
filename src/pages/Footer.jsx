import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { FaLocationPinLock } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {


  return (
    <>
    <div className=' max-w-screen-2xl container bg-black h-auto text-white py-20 flex md:flex-row flex-col gap-5 justify-around items-center '>
        <div className='h-auto w-80  flex p-2 flex-col md:mb-0 mb-10 text-justify '>
          <h1 className='text-center text-5xl hover:bg-gray-500 border-l-8 border-r-8 border-gray-300'>The Potfolio website</h1>
          <p className='my-5'>Portfolio websites showcase a web developer’s skills, projects, and experience. 
            They feature well-organized project displays, demonstrating coding proficiency and design capabilities. 
            A good portfolio includes an intuitive layout, responsive design, clear navigation, and contact information.
             It serves as a personal brand, making a strong first impression for potential employers or clients.</p>
             <button className='text-2xl py-5 px-6 bg-blue-300 hover:bg-blue-700 rounded-md'>get a website</button>
        </div>
        <div className='h-96 w-80  text-start flex flex-col gap-3 '>
          <h1 className='text-3xl border-b-4 border-gray-300 pb-3 font-serif '>Web Design Services</h1>
          <h2 className='text-2 '>Web design and development</h2>
          <h2 className='text-2 '>Website speed optimization</h2>
          <h2 className='text-2 '>Hourly websites updates</h2>
          <h2 className='text-2 '>Non-profit web design</h2>
          <div className='text-center'>
            <h1 className='text-7xl mb-4 font-sans'>Google</h1>
            <h1 className='flex text-center px-24 gap-2'>{< FaRegStar/>}{< FaRegStar/>}{< FaRegStar/>}{< FaRegStar/>}{< FaRegStar/>}</h1>
          </div>
        </div>
        <div className='md:h-96 h-80 w-80 flex flex-col gap-3 '>
          <h1 className='text-3xl border-b-4 border-gray-300 pb-3 font-serif '>Learn web design</h1>
          <h2>Best practice</h2>
          <h2>Speed optimization</h2>
          <h2>Search engine optimizaton</h2>
          <h2>Web design</h2>
          <h2>Word press</h2>
        </div>
        <div className='md:h-96 h-80 w-80 flex flex-col gap-4 '>
          <h1  className='text-3xl border-b-4 border-gray-300 pb-3 font-serif '>Contact me</h1>

          <div>
            <h1><h1>{<IoIosMailOpen  />}</h1> nc1676639@gmail.com</h1>
          </div>
          <div>
            <h1><span>{<FaLocationPinLock />}</span>Rambagh,agra(U P),INDIA </h1>
          </div>
          <h1 className='text-4xl border-b-2  border-gray-300'>Social</h1>
          <div className='flex gap-3'>
            <Link to="https://www.instagram.com/i_m_neeraj_rajput?igsh=MTgyMm14OWV1NTBy" className='p-5 bg-gray-500 rounded-sm hover:bg-gray-200 text-4xl'>{<FaSquareInstagram/>}</Link>
            <Link className='p-5 bg-gray-500 rounded-sm hover:bg-gray-200 text-4xl'>{<FaFacebook/>}</Link>
            <Link to="www.linkedin.com/in/neeraj-chauhan-0746722b0" className='p-5 bg-gray-500 rounded-sm hover:bg-gray-200 text-4xl'>{< FaLinkedin/>}</Link>
          </div>

        </div>
    </div>
      
    </>
  )
}

export default Footer
