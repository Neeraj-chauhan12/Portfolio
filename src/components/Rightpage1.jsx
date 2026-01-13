import React, { useState } from 'react'
import { FaFacebookF, FaInstagramSquare, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { ReactTyped as Typed } from 'react-typed'
import { saveAs } from 'file-saver'
import { Link } from 'react-router-dom'

const Rightpage1 = () => {
  const [showMore, setShowMore] = useState(false)
  const [copied, setCopied] = useState(false)
  const [downloading, setDownloading] = useState(false)

  async function downloadCV() {
    // Uses the public/ folder asset; put your CV or image in public and update filename if needed.
    const url = '/Screenshot 2025-09-12 150141.png'
    try {
      setDownloading(true)
      const res = await fetch(url)
      if (!res.ok) throw new Error('Network response was not ok')
      const blob = await res.blob()
      saveAs(blob, 'neeraj.png')
    } catch (err) {
      console.error('Download failed', err)
      // fallback: open in new tab
      window.open(url, '_blank', 'noopener')
    } finally {
      setDownloading(false)
    }
  }

  async function copyEmail() {
    const email = 'neeraj@example.com'
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      console.error('Copy failed', e)
    }
  }

  return (
    <div className='md:w-1/2 w-full md:h-full h-auto flex flex-col justify-center md:items-start p-4 md:pr-10'>
      <h2 className='md:text-2xl text-2xl text-center md:text-left'>Hi, I am</h2>

      <Typed
        className='text-3xl md:text-4xl text-center md:text-left text-blue-700'
        strings={["Frontend Developer", "Programmer", "MERN Enthusiast"]}
        typeSpeed={60}
        backSpeed={40}
        loop
      />

      <h1 className='md:text-6xl text-4xl md:my-4 my-2 text-center md:text-left text-blue-700'>NEERAJ CHAUHAN</h1>

      <p className='md:mb-6 mb-4 text-center md:text-left'>
        Creative and detail-oriented web developer skilled in HTML, CSS, JavaScript,
        and the MERN stack. I build responsive, user-friendly applications with
        a focus on performance and accessibility.
      </p>

      <div className='flex flex-col md:flex-row gap-3 md:gap-4 items-center'>
        <button
          onClick={downloadCV}
          className='px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-transform transform hover:scale-105'
          aria-label='Download CV'
        >
          {downloading ? 'Downloading...' : 'Download CV'}
        </button>

        <Link to='/contact' className='px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full'>Contact</Link>

        <Link to='/projects' className='px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-800'>See Projects</Link>
      </div>

      <div className='mt-4 flex justify-center items-center gap-3'>
        <button
          onClick={() => setShowMore(s => !s)}
          className='text-sm text-blue-600 hover:underline'
          aria-expanded={showMore}
        >
          {showMore ? 'Hide skills' : 'Show skills'}
        </button>

        <button
          onClick={copyEmail}
          className='text-sm px-3 py-1 bg-gray-100 rounded'
          aria-label='Copy email'
        >
          {copied ? 'Email copied' : 'Copy email'}
        </button>

        <a href='tel:+91 9917672322' className='flex items-center gap-1 text-sm text-gray-700'>
          <FaPhoneAlt /> <span className='hidden md:inline'>+91 9917672322</span>
        </a>
      </div>

      <div
        className={`mt-3 overflow-hidden transition-all duration-300 ${showMore ? 'max-h-96' : 'max-h-0'}`}
      >
        <ul className='list-disc ml-5 space-y-1 text-sm'>
          <li>React, React Router, Hooks</li>
          <li>Node.js, Express, MongoDB</li>
          <li>Responsive design with Tailwind CSS</li>
          <li>Basic accessibility & performance</li>
        </ul>
      </div>

      <div className='mt-6 flex justify-center items-center gap-4 text-2xl'>
        <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' aria-label='Facebook' className='hover:text-blue-600'>
          <FaFacebookF />
        </a>
        <a href='https://github.com/Neeraj-chauhan12/' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='hover:text-gray-800'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/neeraj-chauhan123/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='hover:text-blue-700'>
          <FaLinkedin />
        </a>
        <a href='https://leetcode.com/u/Neeraj264/' target='_blank' rel='noopener noreferrer' aria-label='LeetCode' className='hover:text-orange-500'>
          <SiLeetcode />
        </a>
        <a href='https://www.instagram.com/i_m_neeraj_rajput' target='_blank' rel='noopener noreferrer' aria-label='Instagram' className='hover:text-pink-500'>
          <FaInstagramSquare />
        </a>
      </div>
    </div>
  )
}

export default Rightpage1
