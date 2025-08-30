import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { FaLocationPinLock } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {motion} from 'framer-motion'

import { Link } from 'react-router-dom';

const Footer = () => {


  return (
    <>
    <div className=' max-w-screen-2xl container  bg-gray-900 h-auto text-white py-20 flex md:flex-row flex-col gap-5 justify-around items-center '>
        <motion.div 
           initial={{opcacity:0, translateX: "100%"}}
           whileInView={{opcacity:1, translateX: 0}}
           transition={{duration:1}}
        className='h-auto w-80 border-2 rounded-2xl border-gray-400 bg-gray-900 flex p-2 flex-col  md:mb-0 mb-10 text-justify '>
          <h1 className='text-center text-5xl hover:bg-gray-500 border-l-8 border-r-8 border-gray-300'>The Potfolio website</h1>
          <p className='mt-8'>Portfolio websites showcase a web developer’s skills, projects, and experience.  
            A good portfolio includes an intuitive layout, responsive design, clear navigation, and contact information.</p>
             <Link to="https://studypl.netlify.app" className='text-2xl py-2 md:py-5 flex justify-center items-center mt-10 bg-blue-300 uppercase hover:bg-blue-700 rounded-md'>get a website</Link>
        </motion.div>
        <motion.div 
          initial={{opcacity:0, translateX: "-100%"}}
           whileInView={{opcacity:1, translateX: 0}}
           transition={{duration:1}}
        className='h-96 w-80 border-2 px-2 border-gray-400 rounded-2xl bg-gray-900 text-start flex flex-col gap-3 '>
          <h1 className='text-3xl border-b-4 border-gray-300 pb-3 font-serif '>Web Design Services</h1>
          <h2 className='text-2 '>Web design and development</h2>
          <h2 className='text-2 '>Website speed optimization</h2>
          <h2 className='text-2 '>Hourly websites updates</h2>
          <h2 className='text-2 '>Non-profit web design</h2>
          <div className='text-center'>
            <h1 className='text-7xl mb-4 font-sans'>Google</h1>
            <h1 className='flex text-center px-24 gap-2'>{< FaRegStar/>}{< FaRegStar/>}{< FaRegStar/>}{< FaRegStar/>}{< FaRegStar/>}</h1>
          </div>
        </motion.div>
        <motion.div
        initial={{opcacity:0, translateX: "100%"}}
           whileInView={{opcacity:1, translateX: 0}}
           transition={{duration:1}}
         className='md:h-96 h-80 w-80 border-2 px-2 rounded-2xl bg-gray-900 border-gray-400 flex flex-col gap-3 '>
          <h1 className='text-3xl border-b-4 border-gray-300 pb-3 font-serif '>Learn web design</h1>
          <h2>Best practice</h2>
          <h2>Speed optimization</h2>
          <h2>Search engine optimizaton</h2>
          <h2>Web design</h2>
          <h2>Word press</h2>
        </motion.div>

        <motion.div
          initial={{opcacity:0, translateX: "-100%"}}
           whileInView={{opcacity:1, translateX: 0}}
           transition={{duration:1}}
         className='md:h-96 h-80 w-80 flex flex-col gap-4 '>
          <h1  className='text-3xl border-b-4 border-gray-300 pb-3 font-serif '>Contact me</h1>

          <div>
            <h1><h1>{<IoIosMailOpen  />}</h1> nc1676639@gmail.com</h1>
          </div>
          <div>
            <h1><span>{<FaLocationPinLock />}</span>Rambagh,agra(U P),INDIA </h1>
          </div>
          <h1 className='text-4xl border-b-2  border-gray-300'>Social</h1>

          <div className=' flex  gap-2 items-center w-80 '>
            
            <Link  to="https://www.linkedin.com/in/neeraj-chauhan-0746722b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className='text-5xl'/></Link>
            <Link to="https://www.instagram.com/i_m_neeraj_rajput?igsh=MTgyMm14OWV1NTBy" ><FaInstagram className='text-5xl' /></Link>
            <Link to="https://leetcode.com/u/Neeraj_chauhan123/" ><SiLeetcode className='text-5xl'/></Link>
             <Link to="https://www.facebook.com/share/1ACTBu7jzA/"><FaFacebookF  className='text-5xl'/></Link> 
  
    </div>
    </motion.div>
    </div>
      
    </>
  )
}

export default Footer
