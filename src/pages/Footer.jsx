import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { FaLocationPinLock } from "react-icons/fa6";

import { Link } from 'react-router-dom';

const Footer = () => {


  return (
    <>
    <div className=' max-w-screen-2xl container bg-black h-auto text-white py-20 flex md:flex-row flex-col gap-5 justify-around items-center '>
        <div className='h-auto w-80 border-2 border-gray-400 bg-gray-900 flex p-2 flex-col  md:mb-0 mb-10 text-justify '>
          <h1 className='text-center text-5xl hover:bg-gray-500 border-l-8 border-r-8 border-gray-300'>The Potfolio website</h1>
          <p className='mt-8'>Portfolio websites showcase a web developer’s skills, projects, and experience.  
            A good portfolio includes an intuitive layout, responsive design, clear navigation, and contact information.</p>
             <button className='text-2xl py-5 mt-10 px-6 bg-blue-300 hover:bg-blue-700 rounded-md'>get a website</button>
        </div>
        <div className='h-96 w-80 border-2 border-gray-400  bg-gray-900 text-start flex flex-col gap-3 '>
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
        <div className='md:h-96 h-80 w-80 border-2 bg-gray-900 border-gray-400 flex flex-col gap-3 '>
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

          <div className=' flex  gap-2 items-center w-80 justify-center'>
            <div className='h-40 w-40'>
            <Link  to="https://www.linkedin.com/in/neeraj-chauhan-0746722b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="https://www.freepnglogos.com/uploads/linkedin-symbol-logo-22.png" alt="" /></Link>
           
            </div>
            <div className='h-40 w-40'>
                <Link to="https://www.instagram.com/i_m_neeraj_rajput?igsh=MTgyMm14OWV1NTBy" ><img src="https://clipartcraft.com/images/instagram-logo-transparent-background-2.png" alt="" /></Link>
           
            </div>

            <div className='h-40 w-40'>
            <Link to="https://leetcode.com/u/Neeraj_chauhan123/" ><img  src="https://tse2.mm.bing.net/th?id=OIP.L2Jfuatqty2XAIUqYnr_pgHaHa&pid=Api&P=0&h=180" alt="" /></Link>

            </div>
            <div className='h-40 w-40'>
             <Link to="https://www.facebook.com/share/1ACTBu7jzA/"><img  src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" alt="" /></Link> 
  
            </div>

      
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Footer
