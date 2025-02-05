import React from 'react'

const Leftpage2 = () => {
  return (
    <>
    <div className='md:w-1/2 w-screen h-auto  md:h-screen md:p-3 px-7  text-white flex flex-wrap '>
    <div className='h-80 w-80 m-5  flex justify-center flex-col items-center border-4 rounded-2xl border-gray-400 '>
        <div className='h-56 w-56  flex justify-center items-center -rotate-45 rounded-full border-8  border-r-green-600 border-l-green-600 border-b-green-600'>
         <h1 className='text-3xl rotate-45'>75%</h1>
        </div>
        <h1 className='text-3xl'>HTML & CSS</h1>
    </div>
    <div className='h-80 w-80 m-5 flex justify-center flex-col items-center border-4 rounded-2xl border-gray-400 '>
        <div className='h-56 w-56 rounded-full flex justify-center items-center -rotate-45  border-r-red-600 border-l-red-600  border-b-red-600 border-8 border-white'>
    <h1 className='text-3xl rotate-45'>85%</h1>
        </div>
        <h1 className='text-3xl'>Javascript</h1>
    </div>
    <div className='h-80 w-80 m-5 flex justify-center flex-col items-center  border-4 rounded-2xl border-gray-400 '>
        <div className='h-56 w-56 rounded-full flex justify-center items-center -rotate-45 border-8  border-r-yellow-600 border-l-yellow-600 border-b-yellow-600 border-white'>
       <h1 className='text-3xl rotate-45'>78%</h1>
        </div>
        <h1 className='text-3xl'>React</h1>
    </div>
    <div className='h-80 w-80 m-5 flex justify-center flex-col items-center  border-4 rounded-2xl border-gray-400 '>
        <div className='h-56 w-56 rounded-full flex justify-center items-center -rotate-45 border-r-blue-600  border-b-blue-600 border-8 border-white'>
        <h1 className='text-3xl rotate-45'>50%</h1>
        </div>
        <h1 className='text-3xl'>Node js</h1>
    </div>

    </div>
      
    </>
  )
}

export default Leftpage2
