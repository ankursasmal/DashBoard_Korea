'use client'
import React from 'react'
import Boxex from './Boxex'
import Options_part from './Options_part'

function MainPart() {
    return (
        <div style={{ height: 'calc(100vh - 68px)' }} className='flex overflow-y-scroll  flex-col w-full hide-scrollbar  '>
            <div className='flex items-center justify-between '>
                <span className='text-[.4rem] md:text-[.7rem] ' style={{ fontFamily: 'Pretendard Variable', fontWeight: '500', lineHeight: '1.3rem', }}>홈</span>
            </div>
            {/* profile */}
            <div className='flex items-center justify-between  my-[1.1vh] md:my-[2.3vh] lg:my-[3.2vh]'>
                <div className='flex items-center'>
                    <img src='/poto.png' className='w-[4.2vw] h-[4.2vw] md:w-[3.2vw] md:h-[3.2vw] mr-[1vw]' />
                    <div className='flex flex-col items-start'>
                        <span className='text-[.6rem] md:text-[1rem] lg:text-[1.2rem]' style={{ fontFamily: 'Pretendard Variable', fontWeight: '800', }}>박의사님,안녕하세요</span>
                        <span className='text-[.4rem] md:text-[.6rem]  lg:text-[.8rem]' style={{ fontFamily: 'Pretendard Variable', fontWeight: '400', }}>의사 코드 - UH2406001</span>

                    </div>
                </div>
            </div>
            {/* horizental iline */}
            <div className='w-[100%]  h-[0.5px]  bg-[#DADFE9] mb-[1.1vh] md:mb-[2.3vh] lg:mb-[3.2vh]'></div>
            <div className='flex items-center justify-between '>
                <span className='text-[.6rem] md:text-[1rem] lg:text-[1.3rem]' style={{ fontFamily: 'Pretendard Variable', fontWeight: '700', lineHeight: '1.3rem', }}>Quick Menu</span>
            </div>

            {/* two boese */}
            <div className='mt-[1vh] md:mt-[1.7vh] lg:mt-[2.4vh] flex items-center justify-between'>
                <Boxex SRC='/Frame.png' TEXT1={'빠르고 간편하게'} TEXT2={'처방하기'} />
                <Boxex SRC='/Icon.png' TEXT1={'처음 진료 받는'} TEXT2={'환자 등록하기'} />
            </div>

            {/* heading */}
            <div className='flex items-center justify-between  mt-[2.6vh] md:mt-[3.3vh] lg:mt-[6vh] '>
                <div className='flex items-center'>
                    <span className='text-[.6rem] md:text-[1rem] lg:text-[1.3rem]' style={{ fontFamily: 'Pretendard Variable', fontWeight: '800', lineHeight: '1.3rem', }}>처방 대기</span>
                    <span className='text-[.6rem] md:text-[1rem] lg:text-[1.2rem]' style={{ fontFamily: 'Pretendard Variable', fontWeight: '500', lineHeight: '1.3rem', }}>(최근 30일 기준)</span>

                </div>
                <button
                    className="px-[1.3vw] py-[2px] md:py-[0.4vw] lg:py-[0.5vw] bg-[#0054A6] rounded-lg"
                >
                    <span
                        className="text-[.4rem] md:text-[.6rem]  lg:text-[.8rem] text-white"
                        style={{ fontFamily: 'Pretendard Variable', fontWeight: 800 }}
                    >
                        환자 등록하기  </span>
                </button>

            </div>

            {/* Upload part */}
            <Options_part />

        </div>
    )
}

export default MainPart
