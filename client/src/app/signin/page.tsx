import React from 'react'
import Link from 'next/link'

export default function SigninPage() {
  return (
    <div className="bg-purple-400 min-h-[100vh]">
        <div className='container px-4 mx-auto'>
            <div className="flex flex-col mx-auto">
                <button type="button" className="text-gray-900 bg-gray-100 hover:bg-white border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign up with BVN</button>
                <button type="button" className="text-gray-900 bg-gray-100 hover:bg-white border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign up with NIN</button>
            </div>

            <div className='text-center'>
            <p>Don't have an account? <Link href="">Sign up</Link></p>
        </div>
        </div>
    </div>
  )
}
