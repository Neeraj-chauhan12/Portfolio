import React from 'react'
import html from '../../public/html.png'
import css from '../../public/css.png'
import tailwind from '../../public/tl.png'
import javascript from '../../public/js.png'
import react from '../../public/rjs1.png'
import nodejs from '../../public/node.png'
import expressjs from '../../public/ejs.png'
import git from '../../public/git-logo.png'
import github from '../../public/gh.png'
import mongo from '../../public/html.png'
import netlify from '../../public/ny.png'
import dsa from '../../public/dsa.png'
import java from '../../public/javs.png'
import cpp from '../../public/cpp.png'
import redux from '../../public/redus.png'

const About = () => {

   const data=[
    {
      id:1,
      num:html,
      
    },
    {
      id:2,
      num:css,
    
    },
    {
      id:3,
      num:tailwind
    },
    {
      id:4,
      num:javascript
    },
    {
      id:5,
      num:react
    },
    {
      id:6,
      num:nodejs
    },
    {
      id:7,
      num:expressjs
    },
    {
      id:8,
      num:git
    },
     {
      id:9,
      num:github
    },
    
     {
      id:10,
      num:dsa
    },
     {
      id:11,
      num:java
    },
     {
      id:12,
      num:cpp
    },
     {
      id:13,
      num:mongo
    },
     {
      id:14,
      num:redux
    },
     {
      id:15,
      num:netlify
    },
    
   ]

  return (
    <>
    <div className='max-w-screen-2xl flex px-5 md:px-16 h-auto flex-col md:h-screen text-white bg-gray-900'>
      <h1 className=' flex justify-center  px-5 items-center text-5xl md:mt-14 md:mb-0 mb-10 mt-2'>About some technologies</h1>
      <div className='h-1/2 w-screen flex items-center gap-4 flex-wrap flex-row '>
        {
          data.map(({id,num,})=>{
            return(
              <div className='h-40 w-40 border-2 md:px-8 border-gray-100  rounded-full  hover:scale-110 md:m-5 hover:transition-all flex hover:bg-gray-400 hover:shadow-md hover:shadow-gray-300 justify-center items-center flex-col' key={id}>
                <img className='h-28 w-28 object-cover md:object-contain' src={num} alt="" />
                

              </div>
            )
          })
        }
      </div>

    </div>
      
    </>
  )
}

export default About
