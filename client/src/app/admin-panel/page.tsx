import FooterMenu from '@/components/FooterMenu'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import sampleImage from '@/assets/google-logo.png'
import ChatGroupHeader from '@/components/ChatGroupHeader'

export default function AdminPanelPage() {
  return (
    <div className="bg-gray-200 h-screen">
        <ChatGroupHeader />

        {/* Members */}
        <div className='bg-white p-2 mx-2 rounded-md my-4'>
            <p className='font-semibold'>Members</p>
           <div className='flex justify-between'>
             {/* New members */}
             <div className='flex gap-2'>
                <div className='border-2 rounded-full h-10 w-10 flex justify-center items-center'>
                    <Image src={sampleImage} alt='' height={20}/>
                 </div>
                 <div className='text-center'>
                  <p>New members</p>
                  <p className='font-bold'>0h</p>
                 </div>
            </div>
            {/* All members */}
            <div className='flex gap-2'>
                <div className='border-2 rounded-full h-10 w-10 flex justify-center items-center'>
                    <Image src={sampleImage} alt='' height={20}/>
                 </div>
                 <div className='text-center'>
                  <p>New members</p>
                  <p className='font-bold'>0h</p>
                 </div>
            </div>
           </div>
           {/* add members & button */}
           <div className='flex justify-between items-center px-3'>
            <p className='text-sm'>Add members to your community</p>
                <button className='bg-transparent border-[1px] text-red-500 px-2 rounded-full'>
                    <Link href="">Create</Link>
                </button>
           </div>
           
        </div>
        {/* Campaigns */}
        <div className='bg-white p-2 mx-2 rounded-md mb-4'>
            <p className='font-semibold'>Campaignss</p>
            <div className='py-2 flex justify-between items-center border-y-[1px]'>
               <div className='flex items-center gap-3'>
                 {/* Image */}
                 <div className='border-2 rounded-full p-1'>
                    <Image src={sampleImage} alt='' height={20}/>
                 </div>
                 <div className='text-sm'>
                    <p>Create a campaign to raise funds</p>
                    <p>for a community project</p>
                 </div>
                 
               </div>

                <button className='bg-blue-500 px-2 rounded-full'>
                    <Link href="">Create</Link>
                </button>
            </div>
            <div className='py-2 flex justify-between items-center'>
               <div className='flex items-center gap-3'>
                 {/* Image */}
                 <div className='border-2 rounded-full p-1'>
                    <Image src={sampleImage} alt='' height={20}/>
                 </div>
                 <div className='text-sm'>
                    <p>Create a campaign to raise funds</p>
                    <p>for a community project</p>
                 </div>
                 
               </div>

                <button className='bg-blue-500 px-2 rounded-full'>
                    <Link href="">Create</Link>
                </button>
            </div>
        </div>
        <div className='bg-white p-2 mx-2 rounded-md'>
            <p className='font-semibold'>Campaignssss</p>
            <div className='py-2 flex justify-between items-center border-y-[1px]'>
               <div className='flex items-center gap-3'>
                 {/* Image */}
                 <div className='border-2 rounded-full p-1'>
                    <Image src={sampleImage} alt='' height={20}/>
                 </div>
                 <div className='text-sm'>
                    <p>Create a campaign to raise funds</p>
                    <p>for a community project</p>
                 </div>
                 
               </div>

                <button className='bg-blue-500 px-2 rounded-full'>
                    <Link href="">Create</Link>
                </button>
            </div>
            <div className='py-2 flex justify-between items-center'>
               <div className='flex items-center gap-3'>
                 {/* Image */}
                 <div className='border-2 rounded-full p-1'>
                    <Image src={sampleImage} alt='' height={20}/>
                 </div>
                 <div className='text-sm'>
                    <p>Create a campaign to raise funds</p>
                    <p>for a community project</p>
                 </div>
                 
               </div>

                <button className='bg-blue-500 px-2 rounded-full'>
                    <Link href="">Create</Link>
                </button>
            </div>
        </div>
        <FooterMenu />
    </div>
  )
}
