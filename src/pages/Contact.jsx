import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const form = useRef()
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [subject, setsubject] = useState("")
  const [message, setmess] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs
      .sendForm('service_6hos1v7', 'template_d7cy45j', form.current, {
        publicKey: '8d2bgGWo9VH6Q-N5K',
      })
      .then(
        () => {
          setSubmitted(true)
          setemail("")
          setname("")
          setsubject("")
          setmess("")
          setTimeout(() => setSubmitted(false), 3000)
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <div className='max-w-screen-2xl mx-auto h-auto bg-gray-900 flex justify-center gap-6 md:px-8 px-5 py-20 items-center flex-col'>
      <div className='text-center mb-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-2'>Get In Touch</h2>
        <p className='text-gray-400'>Feel free to reach out and let's collaborate</p>
      </div>

      <div className='flex flex-col md:flex-row gap-8 w-full max-w-4xl'>
        {/* Contact Info */}
        <div className='md:w-1/3 flex flex-col gap-6'>
          <div className='bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition'>
            <FaEnvelope className='text-blue-500 text-2xl mb-3' />
            <h3 className='text-lg font-semibold text-white mb-2'>Email</h3>
            <p className='text-gray-300'>nc1676639@gmail.com</p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition'>
            <FaPhone className='text-blue-500 text-2xl mb-3' />
            <h3 className='text-lg font-semibold text-white mb-2'>Phone</h3>
            <p className='text-gray-300'>+91 1234567890</p>
          </div>
        </div>

        {/* Form */}
        <div className='md:w-2/3 bg-gray-800 border-2 border-blue-500 rounded-xl p-6 shadow-lg'>
          {submitted && (
            <div className='mb-4 p-3 bg-green-500/20 border border-green-500 rounded text-green-300 text-center'>
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
            <input
              className='w-full py-2 px-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition placeholder:text-gray-400'
              placeholder='Your Name'
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              name="name"
            />

            <input
              className='w-full py-2 px-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition placeholder:text-gray-400'
              placeholder='Your Email'
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              name="email"
            />

            <input
              className='w-full py-2 px-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition placeholder:text-gray-400'
              placeholder='Subject'
              required
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
              type="text"
              name="subject"
            />

            <textarea
              className='w-full py-2 px-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition placeholder:text-gray-400 resize-none'
              placeholder='Your Message'
              required
              value={message}
              onChange={(e) => setmess(e.target.value)}
              rows={5}
              name="message"
            />

            <button
              type='submit'
              className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 active:scale-95'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
