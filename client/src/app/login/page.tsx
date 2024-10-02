import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import googleLogo from '@/assets/google-logo.png';
import appleLogo from '@/assets/apple-logo.png';
import facebookLogo from '@/assets/facebook-logo.png';

export default function LoginPage() {
    const socialsSignIn = [
        { socialImage: googleLogo, socialLink: "" },
        { socialImage: appleLogo, socialLink: "" },
        { socialImage: facebookLogo, socialLink: "" },
    ];

    return (
        <div className="bg-purple-400 min-h-screen flex justify-center">
            <div className='container px-4 max-w-md mx-auto pt-20'>
                {/* Heading */}
                <div className="mb-6">
                    <h5 className="text-xl font-bold dark:text-white">Heading 5</h5>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">Hi, welcome back, we missed you.</p>
                </div>

                {/* Form */}
                <form>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className='text-sm text-end mb-5'>
                        <Link href="" className="text-blue-600 hover:underline">Forgot password?</Link>
                    </div>
                
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                    {/* Or sign in with */}
                    <div className="flex items-center my-8">
                        <div className="flex-grow h-px bg-black"></div>
                        <span className="px-2 text-sm text-gray-500 dark:text-gray-400">Or sign in with</span>
                        <div className="flex-grow h-px bg-black"></div>
                    </div>
                </form>

                {/* Socials */}
                <div className='flex justify-center gap-5 mb-6'>
                    {socialsSignIn.map((socialItem, i) => (
                        <Link href={socialItem.socialLink} key={i}>
                            <div className='border border-black h-10 w-10 flex justify-center items-center rounded-full'>
                                <Image src={socialItem.socialImage} alt="social logo" height={30} width={30} />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Sign up prompt */}
                <div className='text-center'>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Don't have an account? <Link href="" className="text-blue-600 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
