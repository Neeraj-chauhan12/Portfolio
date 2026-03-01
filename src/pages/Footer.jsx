import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa"
import { IoIosMailOpen } from "react-icons/io"
import { FaLocationPin } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si"
import { motion } from 'framer-motion'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const services = [
    "Web design & development",
    "Website speed optimization",
    "Responsive design",
    "SEO optimization",
  ]

  const resources = [
    "Best practices",
    "Speed optimization",
    "SEO guides",
    "Web design tips",
    "WordPress tutorials"
  ]

  const socials = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/neeraj264", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/i_m_neeraj_rajput", label: "Instagram" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/Neeraj264/", label: "LeetCode" },
    { icon: FaFacebookF, href: "https://www.facebook.com/share/1ACTBu7jzA/", label: "Facebook" },
  ]

  return (
    <footer className='max-w-screen-2xl mx-auto bg-gray-900 text-white py-16 px-5 md:px-8'>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* About Section */}
        <motion.div variants={itemVariants} className='bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20'>
          <h3 className='text-xl font-bold mb-4'>About</h3>
          <p className='text-gray-400 text-sm leading-relaxed mb-4'>
            Building beautiful and functional portfolios showcasing your skills and experience with intuitive design and responsive layouts.
          </p>
          <a href="https://studypl.netlify.app" target="_blank" rel="noopener noreferrer" className='inline-block py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition'>
            Learn More →
          </a>
        </motion.div>

        {/* Services Section */}
        <motion.div variants={itemVariants} className='bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20'>
          <h3 className='text-xl font-bold mb-4 border-b border-gray-600 pb-2'>Services</h3>
          <ul className='space-y-2'>
            {services.map((service, idx) => (
              <li key={idx} className='text-gray-400 text-sm hover:text-blue-400 transition flex items-center gap-2'>
                <span className='text-blue-500'>•</span> {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Resources Section */}
        <motion.div variants={itemVariants} className='bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20'>
          <h3 className='text-xl font-bold mb-4 border-b border-gray-600 pb-2'>Resources</h3>
          <ul className='space-y-2'>
            {resources.map((resource, idx) => (
              <li key={idx} className='text-gray-400 text-sm hover:text-blue-400 transition flex items-center gap-2'>
                <span className='text-blue-500'>•</span> {resource}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={itemVariants} className='bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20'>
          <h3 className='text-xl font-bold mb-4 border-b border-gray-600 pb-2'>Contact</h3>

          <div className='space-y-3 mb-4'>
            <div className='flex items-center gap-3'>
              <IoIosMailOpen className='text-blue-500 text-lg' />
              <div>
                <p className='text-xs text-gray-500'>Email</p>
                <p className='text-sm text-gray-300'>nc1676639@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <FaLocationPin className='text-blue-500 text-lg' />
              <div>
                <p className='text-xs text-gray-500'>Location</p>
                <p className='text-sm text-gray-300'>Agra(UP), India</p>
              </div>
            </div>
          </div>

          <p className='text-xs font-semibold text-gray-400 mb-3'>Follow Me</p>
          <div className='flex gap-3'>
            {socials.map((social, idx) => {
              const Icon = social.icon
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className='p-2 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all transform hover:scale-110 duration-300'
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <div className='border-t border-gray-700 pt-8 text-center'>
        <p className='text-gray-400 text-sm'>© 2025 Neeraj Chauhan.  All rights reserved.</p>
        <p className='text-gray-500 text-xs mt-2'>Built with React, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  )
}

export default Footer
