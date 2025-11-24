import React, { useState } from 'react'
import html from '../../public/html.png'
import css from '../../public/css.png'
import tailwind from '../../public/tl.png'
import javascript from '../../public/js.png'
import react from '../../public/rjs1.png'
import nodejs from '../../public/node.png'
import expressjs from '../../public/ejs.png'
import git from '../../public/git-logo.png'
import github from '../../public/gh.png'
import mongo from '../../public/html.png'
import netlify from '../../public/ny.png'
import dsa from '../../public/dsa.png'
import java from '../../public/javs.png'
import cpp from '../../public/cpp.png'
import redux from '../../public/redus.png'

const About = () => {
  const [hoveredId, setHoveredId] = useState(null)

  const data = [
    { id: 1, num: html, name: 'HTML' },
    { id: 2, num: css, name: 'CSS' },
    { id: 3, num: tailwind, name: 'Tailwind' },
    { id: 4, num: javascript, name: 'JavaScript' },
    { id: 5, num: react, name: 'React' },
    { id: 6, num: nodejs, name: 'Node.js' },
    { id: 7, num: expressjs, name: 'Express' },
    { id: 8, num: git, name: 'Git' },
    { id: 9, num: github, name: 'GitHub' },
    { id: 10, num: dsa, name: 'DSA' },
    { id: 11, num: java, name: 'Java' },
    { id: 12, num: cpp, name: 'C++' },
    { id: 13, num: mongo, name: 'MongoDB' },
    { id: 14, num: redux, name: 'Redux' },
    { id: 15, num: netlify, name: 'Netlify' },
  ]

  return (
    <div className='max-w-screen-2xl mx-auto px-5 md:px-16 h-auto py-10 md:py-20 text-white bg-gray-900'>
      <h2 className='text-center text-4xl md:text-5xl font-bold mb-4'>Technologies & Skills</h2>
      <p className='text-center text-gray-400 mb-12 text-sm md:text-base'>Tools and technologies I use to build amazing projects</p>
      
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6'>
        {data.map(({ id, num, name }) => (
          <div
            key={id}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            className='h-32 md:h-40 border-2 border-gray-600 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 flex flex-col justify-center items-center cursor-pointer'
          >
            <img className='h-16 md:h-20 w-16 md:w-20 object-contain mb-2' src={num} alt={name} loading='lazy' />
            {hoveredId === id && <p className='text-xs md:text-sm font-semibold text-center px-2'>{name}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
