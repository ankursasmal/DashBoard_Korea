'use client'
import React from 'react'

function OptionBar() {
  return (
    <div className=' flex items-center justify-between w-[100%] bg-[#F1F4F9] gap-[2%] py-[.4rem] md:py-[.5rem] lg:py-[.7rem]  rounded-xl mt-[10px]'>
<span className='text-[.3rem] md:text-[.6rem]  lg:text-[.8rem] pl-[10px]' style={{fontFamily:'Pretendard Variable',fontWeight:'700',}}>등록번호</span>
<span className='text-[.3rem] md:text-[.6rem]  lg:text-[.8rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'700',}}>환자명</span>
<span className='text-[.3rem] md:text-[.6rem]  lg:text-[.8rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'700',}}>성별</span>
<span className='text-[.3rem] md:text-[.6rem]  lg:text-[.8rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'700',}}>생년월일</span>
<span className='text-[.3rem] md:text-[.6rem]  lg:text-[.8rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'700',}}>S/A</span>
<span className='text-[.3rem] md:text-[.6rem]  lg:text-[.8rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'700',}}>근육 방향</span>
<span className='text-[.3rem] md:text-[.6rem]  lg:text-[.8rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'700',}}>치료 처방 기간</span>
<span className='text-[.3rem] md:text-[.6rem]  lg:text-[.8rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'700',}}>{''}</span>

<span className='text-[.3rem] md:text-[.6rem]  lg:text-[.8rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'700',}}>환자 등록일</span>
<span className='text-[.3rem] md:text-[.6rem]  lg:text-[.8rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'700',}}>최종 처방일</span>
<span className='text-[.3rem] md:text-[.6rem]  lg:text-[.8rem]' style={{fontFamily:'Pretendard Variable',fontWeight:'700', paddingRight:'10px'}}>처방 상태</span>

    </div>
  )
}

export default OptionBar
