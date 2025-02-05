import React from 'react'
import pic from '../../public/neeraj.jpg'

const Leftpage1 = () => {
  return (
    <>
    <div className='md:w-1/2 w-full h-full flex justify-center items-center'>
        <img src={pic} className='h-80 w-80 object-cover mt-6 mb-6  md:-rotate-12 -rotate-12 rounded-full md:rounded-full border-8 border-gray-500' alt="" />
    </div>
      
    </>
  )
}

export default Leftpage1
