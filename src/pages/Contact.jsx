import React, { useState } from 'react'

const Contact=()=>{
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[password,setpass]=useState("")
    const[message,setmess]=useState("")
 
    function handlesubmit(e){
      console.log(e.target.value)
        e.preventDefault()
    
         setemail("")
         setname("")
         setpass("")
         setmess("")
    }

  return (
    <>
     <div className='max-w-screen-2xl h-screen md:h-auto bg-black flex justify-center gap-2 md:px-0 px-5 pt-10 pb-5 items-center flex-col '>
      <h1 className='md:text-7xl text-5xl text-white uppercase'>contact me..</h1>

      <h1 className='md:text-5xl text-3xl text-blue-500'>Fill the form and work with me</h1>
      <div className='h-auto px-5 mt-10 rounded-lg md:w-96 w-76 bg-gray-700'>
        <form
        className='flex flex-col  md:px-5 gap-3 md:gap-7 py-5' 
         onSubmit={handlesubmit} 
        
         >
          <input
             className='w-72 mx-5 text-3xl rounded-lg bg-transparent placeholder:text-3xl border-2 border-gray-100  '
             placeholder='Enter the  name...'
             required
             value={name}
             onChange={(e)=>setname(e.target.value)} 
             type="text" 
             name="name" />

             <input
             className='w-72 mx-5 text-3xl rounded-lg bg-transparent placeholder:text-3xl border-2 border-gray-100  '
             placeholder='Enter the  name...'
             required
             value={email}
             onChange={(e)=>setemail(e.target.value)} 
             type="email" 
             name="email" />

             <input
             className='w-72 mx-5 text-3xl rounded-lg bg-transparent placeholder:text-3xl border-2 border-gray-100  '
             placeholder='Enter the  name...'
             required
             value={password}
             onChange={(e)=>setpass(e.target.value)} 
             type="password" 
             name="password" />     


           
<textarea
             className='w-72  mx-5 text-3xl rounded-lg bg-transparent placeholder:text-3xl border-2 border-gray-100  '
             placeholder='Enter the message...'
             required
             value={message}
             onChange={(e)=>setmess(e.target.value)} 
            rows={7}
             name="message" />     


            
            <button type='submit' className='w-72 mx-5 bg-blue-200 rounded-3xl hover:bg-blue-700 hover:text-white py-2 px-5'>Submit</button>
            
        </form>
    </div>

    </div> 
    
   
      
    </>
  )
}

export default Contact
