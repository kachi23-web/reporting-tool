import React from 'react'
import Image from 'next/image'
import profileImage from "@/assets/google-logo.png"
import NotificationBtn from './NotificationBtn'
import OptionsMenu from './OptionsMenu'
import { FaBell, FaEllipsisV, FaChevronLeft } from 'react-icons/fa'

export default function ChatGroupHeader() {
  return (
    <div>
       <div className='flex items-center justify-around bg-white py-3 '>
        <div className='flex items-center gap-3'>
          <FaChevronLeft />
          <Image src={profileImage} alt='' className='rounded-full h-14 w-14' />
        </div>
          <p className='text-lg font-semibold dark:text-white'>Abuja Elelction Monitoring</p>
          <div className='flex gap-2'>
           <FaBell size={20}/>
            <FaEllipsisV size={20}/>
          </div>
          {/* <NotificationBtn /> */}
          {/* <OptionsMenu /> */}
       </div>

    </div>
  )
}
