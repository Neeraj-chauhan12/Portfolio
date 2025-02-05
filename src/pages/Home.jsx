import React from 'react'
import Leftpage1 from '../components/Leftpage1'
import Rightpage1 from '../components/Rightpage1'


const Home = () => {
  return (
    <>
    <div className=' flex flex-col md:flex-row h-auto md:h-screen max-w-screen-2xl text-white bg-black container'>
    
    
<Leftpage1 />
<Rightpage1 />
   

    </div>
      
      
    </>
  )
}

export default Home
