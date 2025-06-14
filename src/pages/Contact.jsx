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
     <div className='max-w-screen-2xl h-screen md:h-auto bg-black flex justify-center gap-2 md:px-0 px-5 pt-10 pb-5 items-center flex-col '>
      <h1 className='md:text-7xl text-5xl text-white uppercase'>contact me..</h1>

      <h1 className='md:text-5xl text-3xl text-blue-500'>Fill the form and work with me</h1>
      <div className='h-auto md:px-12 px-5 mt-4 rounded-lg md:w-96 w-76 bg-black border-2 border-green-400'>
        <form
        className='flex flex-col  md:px-2 gap-3 md:gap-7 py-5' 
         ref={form} onSubmit={sendEmail}
        
         >
          <input
             className='w-64  text-3xl rounded-lg bg-transparent placeholder:text-2xl text-white border-2 border-gray-100  '
             placeholder='Enter the  name...'
             required
             value={name}
             onChange={(e)=>setname(e.target.value)} 
             type="text" 
             name="name" />

             <input
             className='w-64  text-3xl rounded-lg bg-transparent placeholder:text-2xl border-2 text-white border-gray-100  '
             placeholder='Enter the email...'
             required
             value={email}
             onChange={(e)=>setemail(e.target.value)} 
             type="email" 
             name="email" />

             <input
             className='w-64 text-3xl rounded-lg bg-transparent placeholder:text-2xl text-white border-2 border-gray-100  '
             placeholder='Enter the password...'
             required
             value={password}
             onChange={(e)=>setpass(e.target.value)} 
             type="password" 
             name="password" />     


           
<textarea
             className='w-64  text-3xl rounded-lg bg-transparent placeholder:text-2xl text-white border-2 border-gray-100  '
             placeholder='Enter the message...'
             required
             value={message}
             onChange={(e)=>setmess(e.target.value)} 
            rows={7}
             name="message" />     


            
            <button type='submit' className='w-64  bg-blue-200 rounded-3xl hover:bg-blue-700 hover:text-white py-2 px-5'>Submit</button>
            
        </form>
    </div>

    </div> 
    
   
      
    </>
  )
}

export default Contact
