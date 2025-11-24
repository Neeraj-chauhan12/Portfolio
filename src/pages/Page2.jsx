import React from 'react'
import Leftpage2 from '../components/Leftpage2'
import Rightpage2 from '../components/Rightpage2'

const Page2 = () => {
  return (
    <div className='max-w-screen-2xl mx-auto h-auto md:flex-row flex-col-reverse md:h-screen container bg-gray-900 flex'>
      <Leftpage2 />
      <Rightpage2 />
    </div>
  )
}

export default Page2
