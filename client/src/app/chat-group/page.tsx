import React from 'react'
import Image from 'next/image'
import profileImage from '@/assets/google-logo.png'
import ChatGroupHeader from '@/components/ChatGroupHeader'


export default function ChatGroupPage() {
    let membersChatBubble = [
        {memberImage: profileImage, memberLevel: "Level 1 Member", memberVerification: "10 Verified", timeStamp: "1:09", memberMsg: "There are many programming languages in the market that are used in designing and building websites, various applications and other task. All these languages are popular in their place and in the way they are used, and many proggrammers learn and use them."},
        {memberImage: profileImage, memberLevel: "Level 1 Member", memberVerification: "10 Verified", timeStamp: "1:09", memberMsg: "There are many programming languages in the market that are used in designing and building websites, various applications and other task. All these languages are popular in their place and in the way they are used, and many proggrammers learn and use them."},
    ]
  return (
    <div className='bg-white'>
        {/* 💥Profile header */}
        <div>
            <ChatGroupHeader />
        </div>
        {/* 💥 chat bubbles */}
        <div>
            {
                membersChatBubble.map((member, i)=> (
                    <div>
                        <div className='bg-white flex justify-center items-center my-3'>
                            <div className='h-[1px] w-full bg-gray-300'></div>
                            <p className='whitespace-nowrap px-2 border-2 rounded-full text-sm'>Oct 15th</p>
                            <div className='h-[1px] w-full bg-gray-300'></div>
                        </div>

                 <div className="flex items-start gap-2.5">
                    <Image className="w-8 h-8 rounded-full" src={member.memberImage} alt="Member image" />
                    <div>
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                            <div className='flex justify-between text-xs text-blue-800'>
                                    <p className='font-semibold'>{member.memberLevel}</p>
                                    <p className='font-semibold'>{member.memberVerification}</p>
                                </div>
                            
                                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{member.memberMsg}</p>
                                {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span> */}
                        </div>
                        <div className="flex justify-between items-center space-x-2 rtl:space-x-reverse mt-2 text-sm font-semibold">
                            <div className='flex items-center gap-4'>
                                <span>{member.timeStamp}</span>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify</button>

                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Raise an Issue</button>
                            
                        </div>
                    </div>
                </div>

               </div>
            ))
            }
        </div>

        {/* 💥write your message */}
        <div className='fixed bottom-0 w-full'>
            
            <form>
                <label htmlFor="chat" className="sr-only">Your message</label>
                <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                        </svg>
                        <span className="sr-only">Upload image</span>
                    </button>
                    <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
                        </svg>
                        <span className="sr-only">Add emoji</span>
                    </button>
                    <textarea id="chat" rows={1} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                        </svg>
                        <span className="sr-only">Send message</span>
                    </button>
                </div>
            </form>


        </div>

    </div>
  )
}
