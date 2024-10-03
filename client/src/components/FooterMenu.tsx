import Link from 'next/link'
import React from 'react'
import { FaHome, FaSync, FaComments, FaPhone  } from 'react-icons/fa'

export default function FooterMenu() {
    let menuItems = [
        {menuIcon: <FaHome size={25}/>, menuTitle: "Home", menuLink: ""},
        {menuIcon: <FaSync size={25}/>, menuTitle: "Groups", menuLink: ""},
        {menuIcon: <FaComments size={25}/>, menuTitle: "Chatss", menuLink: ""},
        {menuIcon: <FaPhone size={25}/>, menuTitle: "Calls", menuLink: ""},
    ]
  return (
    <div className='flex justify-between bg-white py-2 px-4 fixed bottom-0 w-full'>
        {
            menuItems.map((item, i)=> (
                <Link key={i} href={item.menuLink}>
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            {item.menuIcon}
                        </div>
                        <p className='text-sm'>{item.menuTitle}</p>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}
