import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import homeIcon from '@/assets/home-icon.png'
import groupsIcon from '@/assets/groups-icon.png'
import chatsIcon from '@/assets/chats-icon.png'
import callsIcon from '@/assets/calls-icon.png'

export default function FooterMenu() {
    let menuItems = [
        {menuIcon: homeIcon, menuLink: ""},
        {menuIcon: groupsIcon,  menuLink: ""},
        {menuIcon: chatsIcon,  menuLink: ""},
        {menuIcon:  callsIcon,  menuLink: ""},
    ];
  return (
    <div className='flex justify-between items-center border shadow-md px-4 fixed bottom-0 h-16 w-full bg-white'>
        {
            menuItems.map((item, i)=> (
                <Link key={i} href={item.menuLink}>
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <Image src={item.menuIcon} alt="Nav icons footer" />
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}
