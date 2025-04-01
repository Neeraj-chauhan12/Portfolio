import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
 import { ReactTyped } from "react-typed";
 import {saveAs} from "file-saver"
 import pic from "../../public/neeraj.jpg"
 import { Link } from 'react-router-dom';


const Rightpage1 = () => {

  function photo(){
    saveAs(pic,"neeraj.png")
  }

  return (
    <>

    <div className='md:w-1/2 w-full md:h-full h-auto flex flex-col justify-center  md:items-start p-4 md:pr-10 '>

    <h1 className='md:text-2xl text-2xl'>Hi I m  
    </h1>
     {/* <span className='text-blue-600'>Frontend developer</span>  */}
    { <ReactTyped
          className='text-4xl text-blue-700'
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={60}
          backSpeed={50}
          loop={true}
        /> }
    <h1 className='md:text-7xl text-4xl md:my-4 my-2 text-blue-700'>NEERAJ CHAUHAN</h1>
    <p className='md:mb-14 mb-5'>Creative and detail-oriented web developer skilled in HTML,CSS,Javascript,and MERN stack. Experience in building responsive
        ,user-friendly websites and application,ensuring seamless functionality and exceptional user Experience.
    </p>
     
     <div className='flex md:flex-row flex-col gap-2'>
        <button onClick={photo} className='px-24 py-3 bg-blue-300 hover:bg-blue-700 rounded-full'>Download CV</button>
        <Link to="/contact" className='px-32 py-3  bg-blue-300 rounded-full'>Contact</Link>
     </div>

     <div className='flex gap-4 pl-16 md:p-1 mt-8 text-3xl'>
        <Link to="https://www.facebook.com/share/1ACTBu7jzA/">{< FaFacebookF/>} </Link>
        <Link to="https://www.instagram.com/i_m_neeraj_rajput?igsh=MTgyMm14OWV1NTBy ">{<FaInstagramSquare />}</Link>
        <Link to="https://github.com/Neeraj-chauhan12/">{< FaGithub  />}</Link>
        <Link to="https://www.linkedin.com/in/neeraj-chauhan-0746722b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">{<FaLinkedin  />}</Link>
        <h1>{<FaPhone />}</h1>
     </div>

    </div>

    </>
    
  )
}

export default Rightpage1
