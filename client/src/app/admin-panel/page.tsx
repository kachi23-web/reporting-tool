import FooterMenu from '@/components/FooterMenu'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import sampleImage from '@/assets/google-logo.png'
import ChatGroupHeader from '@/components/ChatGroupHeader'
import newTopic from '@/assets/New Topic.png'
import agreement from '@/assets/Agreement.png'
import donate from '@/assets/Donate.png'
import addAdmin from '@/assets/Add Administrator.png'
import giving from '@/assets/Giving.png'
import userIcon from '@/assets/user icon.png'
import usersIcon from '@/assets/users.png'
import AdminPanelHeader from '@/components/AdminPanelHeader'

export default function AdminPanelPage() {
  return (
    <div className="bg-gray-300 h-screen">
        {/* <ChatGroupHeader /> */}
        <AdminPanelHeader />

        {/* Members */}
        <div className='bg-white p-2 mx-2 text-sm rounded-md my-4'>
            <p className='font-semibold mb-2'>Members</p>
           <div className='flex justify-between font-medium'>
             {/* New members */}
             <div className='flex gap-2'>
                <div className='rounded-full h-10 w-10 flex justify-center items-center'>
                    <Image src={userIcon} alt='' height={45}/>
                 </div>
                 <div className='text-center'>
                  <p>New members</p>
                  <p className='font-bold'>0</p>
                 </div>
            </div>
            {/* All members */}
            <div className='flex gap-2'>
                <div className='rounded-full h-10 w-10 flex justify-center items-center'>
                    <Image src={usersIcon} alt='' height={45}/>
                 </div>
                 <div className='text-center'>
                  <p>All members</p>
                  <p className='font-bold'>10</p>
                 </div>
            </div>
           </div>
           {/* add members & button */}
           <div className='flex justify-between items-center px-3'>
            <p className='text-xs'>Add members to your community</p>
                <button className='bg-transparent border-[1px] text-red-500 px-2 w-20 rounded-full'>
                    <Link href="">View All</Link>
                </button>
           </div>
           
        </div>
        {/* Campaigns */}
        <div className='bg-white p-2 mx-2 rounded-md mb-4'>
            <p className='font-semibold'>Post Managament</p>
            <div className='py-2 flex justify-between items-center border-y-[1px]'>
               <div className='flex items-center gap-3'>
                 {/* Image */}
                 <div className='rounded-full p-1'>
                    <Image src={newTopic} alt='' height={25}/>
                 </div>
                 <div className='text-sm'>
                    <p>Post for approval</p>
                    <p>5 Posts</p>
                 </div>
                 
               </div>

                <button className='bg-blue-500 px-2 w-20 rounded-full text-white'>
                    <Link href="">Approve</Link>
                </button>
            </div>
            <div className='py-2 flex justify-between items-center'>
               <div className='flex items-center gap-3'>
                 {/* Image */}
                 <div className='rounded-full p-1'>
                    <Image src={agreement} alt='' height={25}/>
                 </div>
                 <div className='text-sm'>
                    <p>Reports for review and apporoval</p>
                    <p>1 Report</p>
                 </div>
                 
               </div>

                <button className='bg-blue-500 px-2 w-20 rounded-full text-white'>
                    <Link href="">Send</Link>
                </button>
            </div>
        </div>
        <div className='bg-white p-2 mx-2 rounded-md'>
            <p className='font-semibold'>Campaigns</p>
            <div className='py-2 flex justify-between items-center border-y-[1px]'>
               <div className='flex items-center gap-3'>
                 {/* Image */}
                 <div className='rounded-full p-1'>
                    <Image src={giving} alt='' height={25}/>
                 </div>
                 <div className='text-sm'>
                    <p>Create a campaign to raise funds</p>
                    <p>fund for a community project</p>
                 </div>
                 
               </div>

                <button className='bg-blue-500 px-2 w-20 rounded-full text-white'>
                    <Link href="">Create</Link>
                </button>
            </div>
            <div className='py-2 flex justify-between items-center'>
               <div className='flex items-center gap-3'>
                 {/* Image */}
                 <div className='rounded-full p-1'>
                    <Image src={donate} alt='' height={25}/>
                 </div>
                 <div className='text-sm'>
                    <p>Manage ongoing campaigns</p>
                    <p>for a community project</p>
                 </div>
                 
               </div>

                <button className='bg-blue-500 px-2 w-20 rounded-full text-white'>
                    <Link href="">Manage</Link>
                </button>
            </div>
        </div>
        {/* 💥 */}
        <div className='bg-white p-2 mx-2 rounded-md mt-20'>
            <p className='font-semibold'>New guy</p>
            <div className='py-2 flex justify-between items-center border-t-[1px]'>
               <div className='flex items-center gap-3'>
                 {/* Image */}
                 <div className='border-2 rounded-full p-1'>
                    <Image src={giving} alt='' height={20}/>
                 </div>
                 <div className='text-sm'>
                    <p>Create a campaign to raise funds</p>
                    <p>fund for a community project</p>
                 </div>
               </div>

                <button className='bg-blue-500 px-2 w-20 rounded-full text-white'>
                    <Link href="">View All</Link>
                </button>
            </div>
        </div>
        <FooterMenu />
    </div>
  )
}
