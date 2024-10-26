'use client'
import AdminPanelHeader from '@/components/AdminPanelHeader'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCamera } from 'react-icons/fa';
import walletIcon from '@/assets/wallet (2) 1.png'
import FooterMenu from '@/components/FooterMenu'
import SuggestedContractors from '@/components/SuggestedContractors'

export default function CampaignPage() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };
  
  return (
    <div className='bg-[#F9F9F9] min-h-screen flex flex-col justify-between'>
      <AdminPanelHeader />
      <div className='flex justify-between'>
        <button type="button" className="py-2 px-5 me-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-transparent rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          <Link href="">Cancel</Link>
        </button>
        <button type="button" className="py-2 px-5 me-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-transparent rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          <Link href="">Report an issue</Link>
        </button>
        <button type="button" className="py-2 px-5 me-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-transparent rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          <Link href="">Send</Link>
        </button>
      </div>

      <div className='px-4 space-y-4 flex-grow'>
        <form className="max-w-sm mx-auto space-y-3">
          <div>
            <label htmlFor="small-input" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Campaign Title</label>
            <input type="text" id="small-input" placeholder='Enter title' className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write text here..."></textarea>
          </div>
        </form>

        {/* File input */}
        <div>
          <p className='text-sm font-medium'>Upload file</p>
          <div className="flex justify-center items-center w-full h-full">
            <label className="flex flex-col justify-center items-center w-full h-10 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition duration-300 ease-in-out">
              <div className="mb-2 text-gray-500">
                <FaCamera size={20} />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Connect wallet */}
        <div className='bg-white h-20 rounded-md flex flex-col justify-center items-center shadow-md border'>
          <Image src={walletIcon} alt="" />
          <p>Connect your wallet</p>
        </div>

        {/* Selected option */}
        <div className='flex items-center gap-3 mb-0'>
          <SuggestedContractors />
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
        </div>
      </div>

      {/* FooterMenu, remove default margin and apply background */}
      <div className='mt-0 bg-[#F9F9F9]'>
        <FooterMenu />
      </div>
    </div>
  );
}
