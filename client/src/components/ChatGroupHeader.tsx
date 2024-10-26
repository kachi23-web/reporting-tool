// ChatGroupHeader.tsx
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import communityIcon from '@/assets/Ellipse 7.png'
import donateIcon from '@/assets/Donate.png'
import notificationIcon from '@/assets/notification.png'
import { FaChevronLeft, FaEllipsisVertical } from 'react-icons/fa6'

export default function ChatGroupHeader() {
  const [showDonateIcon, setShowDonateIcon] = useState(true);

  return (
    <div className='bg-white shadow-md fixed top-0 left-0 w-full z-10'>
      <div className='flex items-center justify-around py-2'>
        <div className='flex items-center gap-3'>
          <FaChevronLeft />
          <div>
            <Image src={communityIcon} alt='' height={45} />
          </div>
        </div>
        <p className='font-semibold dark:text-white'>Abuja Election Monitoring</p>
        <Image src={notificationIcon} alt="" />
        <FaEllipsisVertical />
      </div>
    </div>
  )
}
