import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu,setmenu]=useState(false);

  return (
    <>
      <div className='md:w-screen w-screen z-10  overflow-x-hidden md:px-20 px-4 py-4 bg-linear-to-r/hsl from-indigo-500 to-teal-400 text-white flex justify-between items-center'>
        <h1 className=' uppercase text-2xl'>neeraj chauhan</h1>
        {/* desktop navbar */}
        <div className=' hidden md:flex gap-10 text-2xl'>
            <Link to="/" >Home</Link>
            <Link to="/Experience">Experience</Link>
            <Link to="/About">About</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Contact">Contact</Link>
            </div>
            
            <div className='md:hidden' onClick={()=> setmenu(!menu)}>
          { menu ?<IoCloseSharp size={24}/>: <AiOutlineMenu size={24}/>}
        </div>
        </div>
        {/* mobile navbar */}

          {
            menu && (
              <div>
            <div className=' md:hidden flex h-screen justify-center  bg-linear-to-r/hsl from-indigo-500 to-teal-400  items-center gap-4 text-3xl flex-col'>
            <Link  onClick={()=>setmenu(!menu)} to="/">Home</Link>
            <Link onClick={()=>setmenu(!menu)} to="/Experience">Experience</Link>
            <Link onClick={()=>setmenu(!menu)} to="/About">About</Link>
            <Link onClick={()=>setmenu(!menu)} to="/Portfolio">Portfolio</Link>
            <Link onClick={()=>setmenu(!menu)} to="/Contact">Contact</Link>
         </div>
         </div>

            )
          }
    
    </>
  )
}

export default Navbar
