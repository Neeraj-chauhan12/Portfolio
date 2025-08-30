import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact=()=>{

   const form = useRef();
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[password,setpass]=useState("")
    const[message,setmess]=useState("")
 
    // function handlesubmit(e){
    //   console.log(e.target.value)
    //     e.preventDefault()
    
    //      setemail("")
    //      setname("")
    //      setpass("")
    //      setmess("")
    // }

  const sendEmail = (e) => {
    e.preventDefault();
        setemail("")
         setname("")
         setpass("")
         setmess("")

    emailjs
      .sendForm('service_6hos1v7', 'template_d7cy45j', form.current, {
        publicKey: '8d2bgGWo9VH6Q-N5K',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>
     <div className='max-w-screen-2xl h-screen md:h-auto bg-gray-900 flex justify-center gap-2 md:px-0 px-5 pt-10 pb-5 items-center flex-col '>
      <h1 className='md:text-7xl text-5xl text-pink-600 uppercase'>contact <span className='text-blue-500'>me..</span></h1>
      <div className='h-auto md:px-5 px-5 mt-4 rounded-lg md:w-96 w-76 bg-black border-4 border-blue-400 shadow-2xl shadow-gray-500'>
        <form
        className='flex flex-col md:px-1 gap-3 md:gap-7 py-5' 
         ref={form} onSubmit={sendEmail}
        
         >
          <input
             className='w-full text-sm md:text-3xl rounded-lg bg-transparent px-2 placeholder:text-2xl text-white border-2 border-gray-100  '
             placeholder='Enter the  name...'
             required
             value={name}
             onChange={(e)=>setname(e.target.value)} 
             type="text" 
             name="name" />

             <input
             className='w-full  text-sm md:text-3xl rounded-lg bg-transparent px-2 placeholder:text-2xl  border-2 text-white border-gray-100  '
             placeholder='Enter the email...'
             required
             value={email}
             onChange={(e)=>setemail(e.target.value)} 
             type="email" 
             name="email" />

             <input
             className='w-full text-sm md:text-3xl rounded-lg bg-transparent px-2 placeholder:text-2xl border-2 text-white border-gray-100  '
             placeholder='Enter the password...'
             required
             value={password}
             onChange={(e)=>setpass(e.target.value)} 
             type="password" 
             name="password" />     


           
<textarea
             className='w-full  text-sm md:text-3xl rounded-lg bg-transparent px-2 placeholder:text-2xl border-2 text-white border-gray-100  '
             placeholder='Enter the message...'
             required
             value={message}
             onChange={(e)=>setmess(e.target.value)} 
            rows={7}
             name="message" />     


            
            <button type='submit' className='w-full   rounded-3xl bg-pink-600 hover:text-white py-2 px-5'>Submit</button>
            
        </form>
    </div>

    </div> 
    
   
      
    </>
  )
}

export default Contact
