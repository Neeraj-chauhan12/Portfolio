import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='w-screen z-20 fixed top-0 left-0 bg-gradient-to-r from-sky-800 via-indigo-700 to-purple-700 text-white shadow-lg'>
      <div className='max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-3'>
        <Link to='/' className='uppercase text-2xl font-semibold hover:opacity-95 transition flex items-center gap-3'>
          <span className='w-3 h-3 rounded-full bg-gradient-to-br from-cyan-300 to-fuchsia-400 shadow-sm' />
          Neeraj Chauhan
        </Link>

        <div className='hidden md:flex gap-4 text-lg items-center'>
          <Link to='/' className='px-3 py-1 rounded-md hover:bg-white/10 hover:text-white transition'>Home</Link>
          <Link to='/Experience' className='px-3 py-1 rounded-md hover:bg-white/10 hover:text-white transition'>Experience</Link>
          <Link to='/About' className='px-3 py-1 rounded-md hover:bg-white/10 hover:text-white transition'>About</Link>
          <Link to='/Projects' className='px-3 py-1 rounded-md hover:bg-white/10 hover:text-white transition'>Projects</Link>
          <Link to='/Contact' className='px-3 py-1 rounded-md hover:bg-white/10 hover:text-white transition'>Contact</Link>
        </div>

        <button
          className='md:hidden p-2 rounded-md hover:bg-white/10 transition'
          aria-label='Toggle menu'
          onClick={() => setIsOpen(s => !s)}
        >
          {isOpen ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`w-64 h-full bg-gradient-to-b from-sky-800 to-indigo-800 text-white p-6 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <ul className='flex flex-col gap-6 mt-8 text-2xl'>
            <li>
              <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to='/Experience' onClick={() => setIsOpen(false)}>Experience</Link>
            </li>
            <li>
              <Link to='/About' onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link to='/Projects' onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
            <li>
              <Link to='/Contact' onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
