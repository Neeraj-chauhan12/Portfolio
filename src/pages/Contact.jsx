import React, { useState } from 'react'

const Contact = () => {

    const[naam,setname]=useState("")
    const[email,setemail]=useState("")
    const[pass,setpass]=useState("")
    const[mess,setmess]=useState("")
 
    function handlesubmit(e){
        e.preventDefault()
        

        setemail("")
        setname("")
        setpass("")
        setmess("")
    }

  return (
    <>
    <div className='max-w-screen-2xl h-screen md:h-auto bg-black flex justify-center gap-2 pt-10 pb-5 items-center flex-col '>
      <h1 className='md:text-7xl text-5xl text-white uppercase'>contact me..</h1>

      <h1 className='md:text-5xl text-3xl text-blue-500'>Fill the form and work with me</h1>
      <div className='h-auto px-5 mt-10 rounded-lg w-96 bg-white'>
        <form
        className='flex flex-col  md:px-5 gap-3 md:gap-7 py-5' 
         onSubmit={handlesubmit} action="">
          <input
             className='w-full text-3xl rounded-lg placeholder:text-3xl border-4 border-black '
             placeholder='Enter the  name...'
             required
             value={naam}
             onChange={(e)=>setname(e.target.value)} 
             type="text" name="" id="" />


           
            <input
             className='w-full text-3xl rounded-lg placeholder:text-3xl border-4 border-black '
             placeholder='Enter the email...'
             required
             value={email}
             onChange={(e)=>setemail(e.target.value)} 
             type="email" name="" id="" />

            <input
             className='w-full text-3xl rounded-lg placeholder:text-3xl border-4 border-black '
             placeholder='Enter password...'
             required
             value={pass}
             onChange={(e)=>setpass(e.target.value)} 
             type="password" name="" id="" />

             <textarea
             className='w-full text-3xl rounded-lg placeholder:text-3xl border-4 border-black '
             placeholder='Enter message...'
             required
             value={mess}
             onChange={(e)=>setmess(e.target.value)} 
              name="" cols={10} rows={5} id=""></textarea>

            <button className='w-full bg-blue-200 rounded-3xl hover:bg-blue-700 hover:text-white py-2 px-5'>Submit</button>
        </form>
    </div>

    </div>
   
   
      
    </>
  )
}

export default Contact
