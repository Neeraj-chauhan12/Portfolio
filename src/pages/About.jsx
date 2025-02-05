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
      num:"5+",
      name:"Medium Project"
    },
   ]

  return (
    <>
    <div className='max-w-screen-2xl flex  h-screen text-white bg-black'>
      <div className='h-1/2 w-full flex items-center justify-evenly flex-row '>
        {
          data.map(({id,num,name})=>{
            return(
              <div className='h-44 w-44 border-2 px-8 border-gray-100 flex justify-center items-center flex-col rounded ' key={id}>
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
