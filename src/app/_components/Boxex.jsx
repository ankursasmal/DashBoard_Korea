'use client'
import React from 'react'

function Boxex({SRC,TEXT1,TEXT2}) {
  return (
    <div className='flex items-center justify-between bg-[#FFFFFF] rounded-xl w-[49.4%] p-[.5rem] md:p-[1rem] lg:p-[1.3rem]  '>
      <div className='flex items-start flex-col'>
<span className='text-[.4rem] md:text-[.6rem]  lg:text-[.8rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'500',}}>{TEXT1}</span>
<span className='text-[.5rem] md:text-[.8rem]  lg:text-[1.1rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'700',}}>{TEXT2}</span>

      </div>
<img src={SRC} className='w-[2vw] h-[2vw] md:w-[2.6vw] md:h-[2.6vw]  lg:w-[3.2vw] lg:h-[3.2vw]'  />
    </div>
  )
}

export default Boxex
