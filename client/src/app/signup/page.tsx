import React from 'react'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className='container px-4 mx-auto'>
            <div className="flex flex-col mx-auto items-center space-y-4">
                <Link href="/bvn-signup" className="w-3/4">
                   <button type="button" className="w-full py-2.5 px-5 text-gray-900 bg-gray-100 hover:bg-white border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign up with BVN</button>
                </Link>
                <Link href="/nin-signup"  className="w-3/4">
                  <button type="button" className="w-full text-gray-900 bg-gray-100 hover:bg-white border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign up with NIN</button>
                </Link>
                <Link href="/email-signup"  className="w-3/4">
                  <button type="button" className="w-full text-gray-900 bg-gray-100 hover:bg-white border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign up with email</button>
                </Link>
            </div>

            <div className='text-center my-10'>
            <p>Don't have an account? <Link href="/login" className='text-blue-500'>Login</Link></p>
        </div>
        </div>
    </div>
  )
}
