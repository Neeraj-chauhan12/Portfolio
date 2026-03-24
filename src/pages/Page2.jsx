import React from 'react'

import Certificate from '../components/Certificate'
import Skill from '../components/Skill'

const Page2 = () => {
  return (
    <div className='max-w-screen-2xl mx-auto h-auto md:flex-row flex-col-reverse md:h-screen container bg-gray-900 flex'>
      <Certificate />
      <Skill />
    </div>
  )
}

export default Page2
