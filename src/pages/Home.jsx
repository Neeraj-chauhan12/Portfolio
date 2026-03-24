import React from 'react'
import Picture from '../components/Picture'
import AboutData from '../components/AboutData'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row h-auto md:h-screen max-w-screen-2xl text-white bg-gray-900 container mx-auto pt-20 md:pt-0'>
      <Picture />
      <AboutData />
    </div>
  )
}

export default Home
