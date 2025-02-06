import React from 'react'

const About = () => {

   const data=[
    {
      id:1,
      num:"15+",
      name:"Sleepless Night"
    },
    {
      id:2,
      num:"20+",
      name:"Beginner Project"
    },
    {
      id:3,
      num:"50+",
      name:"DSA Problem"
    },
    {
      id:4,
      num:"1+ yr",
      name:"javascript experience"
    },
    {
      id:4,
      num:"1+ yr",
      name:"C++ Experience"
    },
    {
      id:4,
      num:"1+ yr",
      name:"Frontend ecperience"
    },
    {
      id:4,
      num:"7+",
      name:"CGPA"
    },
    {
      id:4,
      num:"5+",
      name:"Medium Project"
    },
    
   ]

  return (
    <>
    <div className='max-w-screen-2xl flex px-5 md:px-16 h-auto flex-col md:h-screen text-white bg-black'>
      <h1 className=' flex justify-center  px-5 items-center text-5xl md:mb-0 mb-10 mt-2'>About some technologies</h1>
      <div className='h-1/2 w-screen flex items-center gap-5 flex-wrap flex-row '>
        {
          data.map(({id,num,name})=>{
            return(
              <div className='h-52 w-52 border-2 md:px-8 border-gray-100    mx-14 hover:scale-110 md:m-16 hover:transition-all flex hover:bg-gray-400 hover:shadow-md hover:shadow-gray-300 justify-center items-center flex-col rounded ' key={id}>
                <h1 className='text-4xl'>{num}</h1>
                <h1 className='text-3xl text-center'>{name}</h1>

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
