import React, { useState } from 'react'
import { motion } from 'framer-motion'
import weddes from '../../public/webdes.png'
import webdev from '../../public/webdev.webp'
import debug from '../../public/debug.png'

const Experience = () => {
    const [hoveredId, setHoveredId] = useState(null)

    const data = [
        {
            id: 1,
            pic: weddes,
            name: "Web Design",
            para: "Creating visually appealing, user-friendly, and functional websites by combining layout, color, typography, and interactive elements effectively.",
            view: "Learn More",
        },
        {
            id: 2,
            pic: webdev,
            name: "Web Development",
            para: "Building the structure and functionality of websites using HTML, CSS, JavaScript and backend services for seamless user experiences.",
            view: "Learn More"
        },
        {
            id: 3,
            pic: debug,
            name: "Debugging",
            para: "Finding and fixing bugs to ensure smooth, reliable user experiences across browsers, devices, and platforms.",
            view: "Learn More"
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
        <div className='max-w-screen-2xl mx-auto w-full h-auto bg-gray-900 text-white py-20 px-5 md:px-8'>
            <div className='text-center mb-12'>
                <h2 className='text-blue-600 text-sm md:text-lg font-semibold mb-2'>MY EXPERTISE</h2>
                <h2 className='text-3xl md:text-5xl font-bold'>Wide Range of Digital Services</h2>
                <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>Comprehensive solutions tailored to your needs</p>
            </div>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {data.map(({ id, pic, name, para, view }) => (
                    <motion.div
                        key={id}
                        variants={itemVariants}
                        onMouseEnter={() => setHoveredId(id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className='group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer'
                    >
                        {/* Image Container */}
                        <div className='relative h-48 md:h-56 overflow-hidden bg-gray-800'>
                            <img
                                className='w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300'
                                src={pic}
                                alt={name}
                                loading='lazy'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </div>

                        {/* Content */}
                        <div className='p-6'>
                            <h3 className='text-2xl md:text-xl font-bold mb-3 group-hover:text-blue-400 transition duration-300'>{name}</h3>
                            <p className='text-gray-300 text-sm leading-relaxed mb-4'>{para}</p>

                            {/* Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform'
                            >
                                {view}
                            </motion.button>
                        </div>

                        {/* Corner accent */}
                        <div className='absolute top-0 right-0 w-1 h-1/2 bg-gradient-to-b from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Experience
