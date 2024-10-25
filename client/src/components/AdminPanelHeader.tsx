'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import communityIcon from '@/assets/Ellipse 7.png'
import DropDown from './DropDown'
import donateIcon from '@/assets/Donate.png'
import notificationIcon from '@/assets/notification.png'
import { FaEllipsisVertical } from 'react-icons/fa6'
import AdminPanelTab from './AdminPanelTab'

export default function AdminPanelHeader() {
    const [showDonateIcon, setShowDonateIcon] = useState(true);
    function toggleDonate() {
        setShowDonateIcon(!showDonateIcon)
    }
    // function toggleDonate() {
    //     donatIconShow = !donatIconShow;
    // }
  return (
    <div>
        {/* Topbar */}
        <div className='flex justify-between items-center'>
            <div className='flex'>
                <div>
                <Image src={communityIcon} alt='' height={45}/>
                </div>
                <DropDown />
            </div>
            <div className='flex items-center gap-2 mr-4'>
              
                {showDonateIcon ? <Image src={donateIcon} alt="" /> : null}
                <Image src={notificationIcon} alt="" />
                <FaEllipsisVertical />
            </div>
        </div>
        {/* Lower bar */}
        <AdminPanelTab />

    </div>
  )
}
