'use client'
import NINDetails from '@/components/NINDetails'
import React, { useState } from 'react'


export default function NINSignupPage() {
    const [toggle, setToggle] = useState(false)
    function handleClick() {
        setToggle(true)
    }   
  return (
    <>
    {
    toggle ? <NINDetails />
    :
    <div className="min-h-screen flex items-center">
        <div className='container px-4 mx-auto'>
            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="nin-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your NIN number</label>
                    <input type="number" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
            
            {/* Buttons */}
                <div className='space-y-3'>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Submit</button>

                        <button type="submit" className="text-black bg-transparent hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</button>
                </div>
            </form>

        </div>
    </div> 


    }

    
    </>
  )
}
