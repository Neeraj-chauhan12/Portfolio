import React from 'react'

const Leftpage1 = () => {
  return (
    <div className='md:w-1/2 w-full h-full flex justify-center items-center'>
      <img
        src={'/neeraj.jpg'}
        alt='Neeraj Chauhan'
        loading='lazy'
        className='h-80 w-80 object-cover mt-6 mb-6 md:-rotate-12 -rotate-12 rounded-full border-8 border-blue-500 shadow-lg transition-transform transform hover:scale-105'
      />
    </div>
  )
}

export default Leftpage1
