'use client'
import React from 'react'
import Text from './Text'
import ImageComponent from './Images'

function Navber() {
  return (
    <div className='flex items-center justify-between py-[20px] px-[2vw] bg-[#FFFFFF] shadow-lg fixed left-0 w-[100vw]'>
      <Text fonts={'Pretendard Variable'} fontWeight='700' TextSize='1.5rem' TextChildrem='AIOrtho' color='#0054A6' Line_height='24px'
      />
      <div className='flex items-center w-[100px] justify-between'>
        <ImageComponent src='/Bell.png' width='37px' height='37px' />
        <ImageComponent src='/Huge-icon.png' width='37px' height='37px' />
      </div>
    </div>
  )
}

export default Navber
