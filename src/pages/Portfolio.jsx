import React from 'react'
import food from '../../public/food.png'
import todo from '../../public/todolist.png'
import port from '../../public/portfolio.png'

const Portfolio = () => {
   
    const data=[
        {
            id:1,
            img:food,
            name:"Food websites",
            bt1:"View website",
            bt2:"Source code"
        },
        {
            id:2,
            img:todo,
            name:"To-Do-List",
            bt1:"View website",
            bt2:"Source code"
        },
        {
            id:3,
            img:port,
            name:"portfolio",
            bt1:"View website",
            bt2:"Source code"
        }
    ]

  return (
    <>
    <div className='max-w-screen-2xl md:h-screen h-auto bg-black text-white pt-10  '>
        <h1 className='text-5xl mb-10 flex justify-center items-center '>My Project</h1>
        
       
       <div className='h-auto w-screen flex md:flex-row flex-col md:mx-0 mx-7  gap-16 md:justify-evenly '>
       {
            data.map(({id,img,name,bt1,bt2})=>{
                return(
                    <div className='h-auto w-80 flex  border-2 border-gray-400 shadow-lg p-5 shadow-gray-200 flex-col' key={id}>
                        <img className='h-80 w-full object-cover' src={img} alt="" />
                        <h1 className='text-center text-3xl my-5'>{name}</h1>
                        <div className='flex'>
                        <button className='px-4 py-1 rounded bg-green-400 mx-2'>{bt1}</button>
                        <button className='px-4 py-1 rounded bg-green-400 mx-2'>{bt2}</button>
                        </div>
                        
                        
                    </div>
                )
            })
        }
        
       </div>
       

    </div>
      
    </>
  )
}

export default Portfolio
