import React, { useState } from 'react'
import food from '../../public/food.png'
import todo from '../../public/todolist.png'
import port from '../../public/ptr.png'
import realtime from '../../public/realtime.png'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState(null)

  const data = [
     {
      id: 1,
      img: realtime,
      name: "Real-time Chat App",
      description: "A chat application with real-time messaging using WebSockets",
      bt1: "https://chat-app-0zpk.onrender.com/",
      bt2: "https://github.com/Neeraj-chauhan12/chat-app"
    },
    {
      id: 2,
      img: food,
      name: "Social media app",
      description: "A social media platform with user authentication and real-time updates",
      bt1: "https://food-app-1-8ys2.onrender.com/",
      bt2: "https://github.com/Neeraj-chauhan12/food-app"
    },
    {
      id: 3,
      img: todo,
      name: "To-Do List App",
      description: "Feature-rich task management application with local storage",
      bt1: "https://todolistneeraj.netlify.app",
      bt2: "https://github.com/Neeraj-chauhan12/To-Do-List"
    },
    {
      id: 4,
      img: port,
      name: "Portfolio",
      description: "Personal portfolio showcasing projects and skills",
      bt1: "https://scintillating-sunburst-b5255f.netlify.app/",
      bt2: "https://github.com/Neeraj-chauhan12/Portfolio"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className='max-w-screen-2xl mx-auto h-auto bg-gray-900 text-white py-20 px-5 md:px-8'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl md:text-5xl font-bold mb-3'>My Projects</h2>
        <p className='text-gray-400 text-sm md:text-base'>Explore some of my recent work and projects</p>
      </div>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {data.map(({ id, img, name, description, bt1, bt2 }) => (
          <motion.div
            key={id}
            variants={itemVariants}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            className='group rounded-xl bg-gray-800 border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20'
          >
            {/* Image Container */}
            <div className='relative h-56 md:h-64 overflow-hidden bg-gray-700'>
              <img
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                src={img}
                alt={name}
                loading='lazy'
              />
              <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>

            {/* Content */}
            <div className='p-6'>
              <h3 className='text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-400 transition'>{name}</h3>
              <p className='text-gray-400 text-sm mb-4'>{description}</p>

              {/* Buttons */}
              <div className='flex gap-3'>
                <a
                  href={bt1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-105 text-sm font-semibold'
                >
                  <FaExternalLinkAlt size={14} /> Live
                </a>
                <a
                  href={bt2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all transform hover:scale-105 text-sm font-semibold'
                >
                  <FaGithub size={14} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Portfolio
