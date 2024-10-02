import React from 'react'
import Image from 'next/image'
import profileImage from "@/assets/google-logo.png"
import NotificationBtn from './NotificationBtn'

export default function ChatGroupHeader() {
  return (
    <div>
        <Image src={profileImage} alt='' />
        <p>Abuja Elelction Monitoring</p>
        {/* 💥Notification */}
        {/* <NotificationBtn /> */}

    </div>
  )
}
