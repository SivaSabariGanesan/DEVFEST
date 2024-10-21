import React from 'react'

function Hover2({children,number}) {
  return (
    <div>
        <div className='group relative bg-yellow-300 transition-all duration-500 h-20 border-b-2 border-white'>
      <div className='flex justify-between items-center h-full px-8 '>
        <div className='text-4xl transition-transform duration-300 z-10 group-hover:translate-x-10 group-hover:text-black group-hover:scale-90 '>
          {number} <span className='mx-8'>{children} </span>
        </div>
        <div className='icon transition-transform duration-200 z-10 group-hover:-translate-x-10 group-hover:-rotate-45 rounded-full bg-white w-8 h-8 flex justify-center items-center group-hover:scale-90 group-hover:border-none group-hover:bg-transparent '>
          <div className="w-5">
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
            <path fill='black' d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
          </svg>
          </div>
        </div>
      </div>
      <span className='absolute top-0 left-0 right-0 bottom-0 bg-black duration-300 h-full z-[7] group-hover:h-0 '></span>
    </div>
    </div>
  )
}

export default Hover2