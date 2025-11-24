import React, { useState } from 'react'
import { saveAs } from 'file-saver'

const Rightpage2 = () => {
  const [downloading, setDownloading] = useState(false)

  async function downloadCV() {
    const url = '/Screenshot 2025-09-12 150141.png'
    try {
      setDownloading(true)
      const res = await fetch(url)
      if (!res.ok) throw new Error('Network response was not ok')
      const blob = await res.blob()
      saveAs(blob, 'neeraj_cv.png')
    } catch (err) {
      console.error(err)
      window.open(url, '_blank', 'noopener')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className='md:w-1/2 h-auto md:h-screen md:px-14 px-3 text-justify flex flex-col justify-center items-start'>
      <h3 className='text-blue-600 mt-10 md:mb-2 text-xl text-center font-semibold'>My Skills</h3>
      <h2 className='md:text-4xl text-2xl text-white my-3'>Beautiful & Unique Digital Experiences</h2>

      <p className='opacity-80 mb-4 text-white'>
        I craft modern web experiences using React, TailwindCSS and Node.js. I focus on
        performance, accessibility and small micro-interactions that delight users.
      </p>

      <div className='flex flex-wrap gap-2'>
        {['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Three.js', 'GSAP'].map(skill => (
          <span key={skill} className='px-3 py-1 bg-gray-700 text-white rounded-full text-sm'>{skill}</span>
        ))}
      </div>

      <button
        onClick={downloadCV}
        className='mt-8 mb-5 px-6 py-2 md:py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-transform transform hover:scale-105'
      >
        {downloading ? 'Downloading...' : 'Download CV'}
      </button>
    </div>
  )
}

export default Rightpage2
