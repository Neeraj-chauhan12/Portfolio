import React from 'react'
import {saveAs} from "file-saver"
import pic from '../../public/neeraj.jpg'

const Rightpage2 = () => {
function photo(){
  saveAs(pic,'neeraj.jpg')
}

  return (
    <>
    <div className='md:w-1/2 h-auto md:h-screen md:px-14 px-3 text-justify  flex flex-col text-white justify-center items-start'>
    <h1 className='md:text-3xl text-sm md:p-0 px-32 text-blue-600 mt-10 md:mb-2'>My Skills</h1>
    <h2 className='md:text-5xl text-2xl text-white my-3'>Beautifull & Unique Digital Experience</h2>
    <h1 className='opacity-70 mb-6'>
    Craft a stunning web experience with technologies like Three.js 
    for immersive 3D graphics, GSAP for smooth animations, and React.js for dynamic interfaces. 
    Enhance engagement with micro-interactions, scrollytelling, and personalized AI-driven features. 
    Use PWAs for native-like performance and integrate AR/VR for immersive storytelling. Combine modern design trends like glassmorphism with
     responsive layouts, dark/light modes, and real-time features for a visually captivating and user-focused digital experience.
    </h1>
    <h1 className='opacity-70 mt-7 '>
    Create impactful full-stack web solutions by leveraging front-end tools like React.js and Tailwind CSS, coupled with back-end technologies like Node.js and MongoDB. Implement scalable architectures, 
    real-time features, and seamless APIs while ensuring optimized performance and engaging user experiences.
    </h1>

    <button onClick={photo} className='md:px-24 px-32 md:mx-0 mx-5 border-2 border-gray-100 py-4 my-9 text-white rounded-2xl bg-gray-700'>Download CV</button>

    </div>
      
    </>
  )
}

export default Rightpage2
