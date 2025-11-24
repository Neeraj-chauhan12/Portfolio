import React, { useState } from 'react'

const Leftpage2 = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='md:w-1/2 h-auto md:h-screen md:px-14 px-3 text-justify flex flex-col justify-center items-start'>
      <img
        src={'/certificate.jpg'}
        alt='Certificate'
        className='max-w-full rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform'
        onClick={() => setOpen(true)}
      />

      {open && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-40' onClick={() => setOpen(false)}>
          <div className='bg-white p-4 rounded max-w-3xl max-h-[90vh] overflow-auto' onClick={e => e.stopPropagation()}>
            <button className='mb-2 text-sm text-gray-700' onClick={() => setOpen(false)}>Close</button>
            <img src={'/certificate.jpg'} alt='Certificate large' className='w-full h-auto rounded' />
          </div>
        </div>
      )}
    </div>
  )
}

export default Leftpage2
