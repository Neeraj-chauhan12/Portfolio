import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const Reviews = () => {
  const [hoveredId, setHoveredId] = useState(null)

  const reviews = [
    {
      id: 1,
      name: 'Rohit Sharma',
      company: 'Tech Startup Inc.',
      role: 'Founder & CEO',
      image: '👩‍💼',
      rating: 5,
      review: 'Neeraj transformed our outdated website into a modern, responsive platform. His attention to detail and understanding of user experience was exceptional. The website has significantly improved our client engagement and conversion rates.',
      service: 'Full Website Redesign',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Anjali Mehta',
      company: 'E-Commerce Solutions Ltd.',
      role: 'Business Manager',
      image: '👨‍💼',
      rating: 5,
      review: 'Working with Neeraj was a game-changer for our e-commerce platform. He built a feature-rich shopping experience with seamless payment integration. Our sales increased by 40% after the launch. Highly recommended!',
      service: 'E-Commerce Platform Development',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Vishal yadav',
      company: 'Digital Marketing Agency',
      role: 'Creative Director',
      image: '👩‍🎨',
      rating: 5,
      review: 'Neeraj delivered exactly what we needed - a stunning portfolio website that showcases our work beautifully. His technical skills combined with design sensibility created an impressive online presence for our agency.',
      service: 'Portfolio Website Creation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      name: 'Priya Singh',
      company: 'Real Estate Group',
      role: 'Director',
      image: '👨‍💻',
      rating: 5,
      review: 'The property listing website Neeraj built for us is user-friendly and performs exceptionally well. The SEO optimization has helped us rank higher in search results. Outstanding work and excellent communication throughout the project!',
      service: 'Real Estate Website & SEO',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'Amit Kumar',
      company: 'Educational Institute',
      role: 'Administrator',
      image: '👩‍🏫',
      rating: 5,
      review: 'Neeraj created a comprehensive learning management system for our institution. The platform is intuitive, secure, and has made course management so much easier. His support and maintenance services are top-notch.',
      service: 'LMS Development & Maintenance',
      color: 'from-indigo-500 to-violet-500'
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
      {/* Header Section */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4'>Client Testimonials</h2>
        <p className='text-gray-400 text-sm md:text-base max-w-2xl mx-auto'>
          Don't just take our word for it. Here's what our satisfied clients say about working with us and the quality of service we provide.
        </p>
      </div>

      {/* Stats Section */}
      <div className='grid grid-cols-3 gap-4 md:gap-8 mb-16'>
        <div className='bg-gray-800 p-6 md:p-8 rounded-lg text-center border border-gray-700 hover:border-blue-500 transition'>
          <p className='text-3xl md:text-4xl font-bold text-blue-400 mb-2'>10+</p>
          <p className='text-gray-300 text-sm md:text-base'>Happy Clients</p>
        </div>
        <div className='bg-gray-800 p-6 md:p-8 rounded-lg text-center border border-gray-700 hover:border-purple-500 transition'>
          <p className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>15+</p>
          <p className='text-gray-300 text-sm md:text-base'>Projects Completed</p>
        </div>
        <div className='bg-gray-800 p-6 md:p-8 rounded-lg text-center border border-gray-700 hover:border-pink-500 transition'>
          <p className='text-3xl md:text-4xl font-bold text-pink-400 mb-2'>4.8/5</p>
          <p className='text-gray-300 text-sm md:text-base'>Avg. Rating</p>
        </div>
      </div>

      {/* Reviews Grid */}
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            variants={itemVariants}
            onMouseEnter={() => setHoveredId(review.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${
              index % 2 === 0 ? 'md:col-span-1 lg:col-span-1' : 'md:col-span-1 lg:col-span-1'
            }`}
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${review.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
            />

            {/* Card */}
            <div className='relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 group-hover:border-blue-500/50 rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20'>
              {/* Top Section */}
              <div className='mb-4'>
                {/* Rating Stars */}
                <div className='flex gap-1 mb-3'>
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className='text-yellow-400' size={16} />
                  ))}
                </div>

                {/* Review Text */}
                <p className='text-gray-300 text-sm leading-relaxed line-clamp-5 mb-4'>
                  "{review.review}"
                </p>

                {/* Service Tag */}
                <div className='inline-block'>
                  <span className={`text-xs md:text-xs px-3 py-1 rounded-full bg-gradient-to-r ${review.color} text-white font-semibold`}>
                    {review.service}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className='border-t border-gray-600 group-hover:border-blue-500/30 my-4 transition-colors' />

              {/* Client Info */}
              <div className='flex items-center gap-3 mt-auto'>
                <div className='text-3xl'>{review.image}</div>
                <div className='flex-1'>
                  <p className='font-semibold text-white text-sm'>{review.name}</p>
                  <p className='text-gray-400 text-xs'>{review.role}</p>
                  <p className='text-blue-400 text-xs font-medium'>{review.company}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <div className='mt-16 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 md:p-12 text-center'>
        <h3 className='text-2xl md:text-3xl font-bold mb-3'>Ready to Start Your Project?</h3>
        <p className='text-gray-400 mb-6 max-w-2xl mx-auto'>
          Join our satisfied clients and experience top-notch web development and design services. Let's bring your ideas to life!
        </p>
        <button className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105'>
          Get Started Today
        </button>
      </div>
    </div>
  )
}

export default Reviews
