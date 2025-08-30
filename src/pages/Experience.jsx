import React from 'react'
import weddes from '../../public/webdes.png'
import webdev from '../../public/webdev.webp'
import debug from '../../public/debug.png'

const Experience = () => {

 const data=[
    {
        id:1,
        pic:weddes,
        name:"Web design",
        para:"Web design is creating visually appealing, user-friendly,and functional websites by combining layout, color, typography, and interactive elements effectively.",
        view:"View more"
    },
    {
        id:1,
        pic:webdev,
        name:"Web development",
        para:"Web design is creating visually appealing, user-friendly,and functional websites by combining layout, color, typography, and interactive elements effectively.",
        view:"View more"
    },
    {
        id:1,
        pic:debug,
        name:"Debug",
        para:"Web design is creating visually appealing, user-friendly,and functional websites by combining layout, color, typography, and interactive elements effectively.",
        view:"View more"
    },
 ]
  return (
    <>
    <div className='md:max-w-screen-2xl container w-screen md:h-screen h-auto  md:px-7 bg-gray-900 text-white'>

     <div className=' bg-gray-900 h-full px-5 md:px-0  w-full'>
        <div className='flex justify-center items-center flex-col md:px-80 h-auto   md:py-10 w-full'>
            <h1 className='md:text-3xl mt-6 text-sm text-blue-600'>My Expertise</h1>
            <h1 className='md:text-7xl text-2xl text-center'>Provide wide range of digial service</h1>
        </div>

        <div className='h-auto w-full  md:w-96 flex md:flex-row gap-5 md:gap-32 flex-col py-7 justify-around items-center'>
            {
                data.map(({id, pic,name,para,view})=>{
                    return(
                    <div key={id}>
                      <div className=' bg-gray-900 rounded-2xl border-2 border-gray-800 p-2 h-auto w-96'>
                       <div>
                        <img className='h-40 w-full object-contain' src={pic} alt="" />
                       </div>
                       <div className='flex flex-col justify-center items-center px-5 '>
                        <h1 className='text-3xl text-center mb-3'>{name}</h1>
                        <p>{para}</p>
                        <button className='px-16 py-2 mt-3 bg-slate-800 text-white rounded-sm'>{view}</button>
                       </div>
                    </div>   

                    </div>
                    )
                })
            }
        </div>
     </div>
    </div>
      
    </>
  )
}

export default Experience
