import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import googleLogo from '@/assets/google-logo.png'
import appleLogo from '@/assets/apple-logo.png'
import facebookLogo from '@/assets/facebook-logo.png'


export default function LoginPage() {
    let socialsSignIn = [
        {socialImage: googleLogo, socialLink:"" },
        {socialImage: appleLogo, socialLink:"" },
        {socialImage: facebookLogo, socialLink:"" },
    ];
  return (
    <div className="bg-purple-400 min-h-[100vh]">
        <div className='container px-4 mx-auto'>
            
            <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className='text-sm text-end'>
                <Link href="">Forgot password</Link>
            </div>
            {/* <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div> */}
           <div className=''>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
           </div>

                {/* Or sign in with */}
            <div className='bg-white flex justify-center items-center'>
                <div className='h-[1px] w-full bg-black'></div>
                <p className='whitespace-nowrap px-2'>Or sign in with</p>
                <div className='h-[1px] w-full bg-black'></div>
            </div>
                </form>

             

        {/* Socials */}
        <div className='flex justify-center gap-5'>
            {socialsSignIn.map((socialItem, i)=> (
                <Link href={socialItem.socialLink} key={i}>
                    <div className='border border-black h-10 w-10 flex justify-center items-center rounded-full'>
                        <Image src={socialItem.socialImage} alt="social items" height={30} width={30} />
                    </div>
                </Link>
            ))}
        </div>

        <div className='text-center'>
            <p>Don't have an account? <Link href="">Sign up</Link></p>
        </div>

        </div>


    </div>
  )
}
