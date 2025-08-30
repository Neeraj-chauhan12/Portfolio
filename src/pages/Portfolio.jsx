import React from 'react'
import food from '../../public/food.png'
import todo from '../../public/todolist.png'
import port from '../../public/ptr.png'
import { Link, Links } from 'react-router-dom'
//import { motion } from 'react-motion'
import {motion} from 'framer-motion'

const Portfolio = () => {
   
    const data=[
        {
            id:1,
            img:food,
            name:"Food websites",
            bt1:"https://foodwebneeraj.netlify.app/",
            bt2:"https://github.com/Neeraj-chauhan12/foodweb"
        },
        {
            id:2,
            img:todo,
            name:"To-Do-List",
            bt1:"https://todolistneeraj.netlify.app",
            bt2:"https://github.com/Neeraj-chauhan12/To-Do-List"
        },
        {
            id:3,
            img:port,
            name:"portfolio",
            bt1:"https://scintillating-sunburst-b5255f.netlify.app/",
            bt2:"https://github.com/Neeraj-chauhan12/Portfolio"
        }
    ]

  return (
    <>
    <div className='max-w-screen-2xl md:h-screen h-auto bg-gray-900 text-white pt-10  '>
        <h1 className='text-5xl mb-10 flex justify-center items-center '>My Project</h1>
        
       
       <div className='h-auto w-screen flex md:flex-row flex-col md:mx-0 mx-8  gap-16 md:justify-evenly '>
       {
            data.map(({id,img,name,bt1,bt2})=>{
                return(
                    <motion.div 
                    initial={{opcacity:0,scale:0}}
                    whileInView={{opcacity:1,scale:1}}
                    transition={{duration:1}}
                    className='h-auto w-80 flex rounded-2xl  border-2 border-gray-400 shadow-lg p-5 shadow-gray-200 flex-col' key={id}>
                        <img className='h-80 w-full object-contain' src={img} alt="" />
                        <h1 className='text-center text-3xl my-5'>{name}</h1>
                        <div className='flex'>
                        <Link to={bt1} className='px-4 py-1 rounded bg-green-400 mx-2'>View website</Link>
                        <Link to={bt2} className='px-4 py-1 rounded bg-green-400 mx-2'>Source code</Link>
                        </div>
                        
                        
                    </motion.div>
                )
            })
        }
        
       </div>
       

    </div>
      
    </>
  )
}

export default Portfolio
