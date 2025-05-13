'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ImageComponent from './Images';
import Text from './Text';

export default function DashBoard() {
  const [openPrescriptions, setOpenPrescriptions] = useState(false);
  const [openMyPage, setOpenMyPage] = useState(false);

  return (
    <div style={{ height: 'calc(100vh - 68px)' }} className=" bg-white shadow-md w-[240px] px-[1rem] flex flex-col mt-[2px]">
      <div className="py-[.8rem]  flex items-center  px-[1rem] hover:bg-[#EEF4FF]  rounded-xl ">
        <ImageComponent src='/Group.png' width='1rem' height='1rem' />
        <Text fonts={'Pretendard Variable'} fontWeight='700' TextSize='14px' TextChildrem='홈' color='#0054A6' Line_height='160%' paddingLeft='6px' />

      </div>

      {/* 처방 관리 */}
      <div className="py-[.8rem]  flex items-center justify-between  px-[1rem] hover:bg-[#EEF4FF]  rounded-xl" onClick={() => setOpenPrescriptions(!openPrescriptions)}>
        <div className="flex items-center ">
          <ImageComponent src='/Vector.png' width='1rem' height='1rem' />

          <Text fonts={'Pretendard Variable'} fontWeight='500' TextSize='14px' TextChildrem='처방 관리' color='#0054A6' Line_height='160%' paddingLeft='6px' />
        </div>
        {openPrescriptions ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
      </div>
      {openPrescriptions && (
        <div className="pl-7 text-gray-600 space-y-1">
          <div className="cursor-pointer hover:bg-[#EEF4FF] py-[.7rem] rounded-xl pl-2"  >
            <Text fonts={'Pretendard Variable'} fontWeight='500' TextSize='14px' TextChildrem='처방 관리' color='#0054A6' Line_height='160%' paddingLeft='4px' />
          </div>
          <div className="cursor-pointer hover:bg-[#EEF4FF] py-[.7rem] rounded-xl pl-2">
            <Text fonts={'Pretendard Variable'} fontWeight='500' TextSize='14px' TextChildrem='표준 치료 프로그램' color='#0054A6' Line_height='160%' paddingLeft='4px' />
          </div>
        </div>
      )}
      {/* 마이페이지 */}
      <div className="py-[.8rem]  flex items-center justify-between  px-[1rem] hover:bg-[#EEF4FF]  rounded-xl" onClick={() => setOpenMyPage(!openMyPage)}>
        <div className="flex items-center ">
          <ImageComponent src='/normal.png' width='1rem' height='1rem' />

          <Text fonts={'Pretendard Variable'} fontWeight='500' TextSize='14px' TextChildrem='마이페이지' color='#0054A6' Line_height='160%' paddingLeft='6px' />
        </div>
        {openMyPage ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
      </div>
      {openMyPage && (
        <div className="pl-7 text-gray-600 space-y-1">
          <div className="cursor-pointer hover:bg-[#EEF4FF] py-[.7rem] rounded-xl pl-2"  >
            <Text fonts={'Pretendard Variable'} fontWeight='500' TextSize='14px' TextChildrem='개인정보 수정' color='#0054A6' Line_height='160%' paddingLeft='4px' />
          </div>
        </div>
      )}

      {/* Footer items */}
      <div className="absolute bottom-[20vh]  px-[1rem] flex items-start flex-col gap-[.7rem]  text-gray-500">
        <Text fonts={'Pretendard Variable'} fontWeight='400' TextSize='13px' TextChildrem='사용설명서' color='#0054A6' Line_height='160%' paddingLeft='6px' />
        <Text fonts={'Pretendard Variable'} fontWeight='400' TextSize='13px' TextChildrem='소프트웨어 형명 및 버전' color='#0054A6' Line_height='160%' paddingLeft='6px' />
        <Text fonts={'Pretendard Variable'} fontWeight='400' TextSize='13px' TextChildrem='의료기기 인증 정보' color='#0054A6' Line_height='160%' paddingLeft='6px' />

      </div>
    </div>
  );
}

