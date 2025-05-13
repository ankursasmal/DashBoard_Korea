'use client'
import React from 'react'
import OptionBar from './OptionBar'

function Options_part() {
  return (
    <div className='flex flex-col w-[100%] p-[.8rem] md:p-[1.2rem] lg:p-[1.5rem] h-[70vw] md:h-[50vw] lg:h-[30vw] bg-[#FFFFFF] rounded-xl  mt-[1.7vh] md:mt-[2.1vh] lg:mt-[2.8vh]'>
      <div className='flex items-center justify-between   w-[100%]'>
         <span className='text-[.5rem] md:text-[.9rem] lg:text-[1.2rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'800',lineHeight:'1.3rem',}}>검색 결과O건</span>
    
    <div className='flex items-center py-[5px] px-[10px] rounded-full bg-[#F0F3FA] '>
        <img src='/search.png' className='w-[.4vw] h-[.4vw] md:w-[.6vw] md:h-[.6vw] mr-[.4vw]'  />

     <input type='text' placeholder='검색' className=' border-none outline-none text-[.3rem] md:text-[.rem]  lg:text-[.7rem] text-[#8395AC]' style={{fontFamily:'Pretendard Variable',fontWeight:'400'}} />  
  </div>
      </div>
      <OptionBar/>

      <div className='flex items-center justify-center w-[100%] min-h-[30vw]'>
        <div className='flex items-center flex-col'>
<span className='text-[.4rem] md:text-[.6rem]  lg:text-[.8rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'400',}}>‘환자 등록’ 후 처방이 가능합니다.</span>
    <button
  className="px-[1.3vw] py-[2px] md:py-[0.4vw] lg:py-[0.5vw] bg-[#0054A6] rounded-lg"
>
  <span
    className="text-[2vw] md:text-[0.8vw] lg:text-[0.8vw] text-white"
    style={{ fontFamily: 'Pretendard Variable', fontWeight: 800 }}
  >
환자 등록하기  </span>
</button>
        </div>
      </div>
     </div>
  )
}

export default Options_part
