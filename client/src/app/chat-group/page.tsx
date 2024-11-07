// ChatGroupPage.tsx
import React from 'react'
import Image from 'next/image'
import profileImage from '@/assets/Ellipse 7.png'
import ChatGroupHeader from '@/components/ChatGroupHeader'
import sendIcon from '@/assets/paper-pane.png'
import { BiPlus } from 'react-icons/bi'

export default function ChatGroupPage() {
  let membersChatBubble = [
    { memberImage: profileImage, memberLevel: "Level 1 Member", memberVerification: "10 Verified", timeStamp: "1:09", memberMsg: "There are many programming languages in the market that are used in designing and building websites, various applications and other task. All these languages are popular in their place and in the way they are used, and many proggrammers learn and use them." },
    { memberImage: profileImage, memberLevel: "Level 1 Member", memberVerification: "10 Verified", timeStamp: "1:09", memberMsg: "There are many programming languages in the market that are used in designing and building websites, various applications and other task. All these languages are popular in their place and in the way they are used, and many proggrammers learn and use them." },
  ];

  return (
    <div className='bg-[#F9F9F9] min-h-screen flex flex-col pt-[60px] pb-[60px]'>
      {/* Header */}
      <ChatGroupHeader />

      {/* Chat bubbles */}
      <div className='flex-grow px-4 space-y-2 overflow-y-auto'>
        {membersChatBubble.map((member, i) => (
          <div key={i} className="space-y-2">
            <div className='flex justify-center items-center my-2'>
              <div className='h-[1px] w-full bg-gray-300'></div>
              <p className='px-2 border-2 rounded-full text-xs whitespace-nowrap'>Oct 15th</p>
              <div className='h-[1px] w-full bg-gray-300'></div>
            </div>

            <div className="flex items-start gap-2.5">
              <Image className="w-8 h-8 rounded-full" src={member.memberImage} alt="Member image" />
              <div className="w-full max-w-md p-3 rounded-lg shadow-sm bg-white">
                <div className=''>
                  <div className='flex justify-between text-xs text-blue-800'>
                    <p className='font-semibold'>{member.memberLevel}</p>
                    <p className='font-semibold'>{member.memberVerification}</p>
                  </div>
                  <p className="text-sm whitespace-normal text-gray-900 py-2">{member.memberMsg}</p>
                </div>

                <div className="flex justify-between items-center mt-1 text-sm font-semibold text-gray-500">
                  <span className='text-xs'>{member.timeStamp}</span>
                  <div className="flex gap-2">
                    <button className="bg-blue-700 text-white rounded-full px-3 py-1">Verify</button>
                    <button className="bg-blue-700 text-white rounded-full px-3 py-1">Raise an Issue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message form fixed at the bottom */}
      <form className='fixed bottom-0 left-0 w-full p-3 bg-[#F9F9F9] border-t border-gray-300'>
        <div className='flex items-center'>
          <button type="button" className="p-2 text-gray-500 hover:text-gray-900">
            {/* Upload icon */}
          </button>
          <textarea id="chat" rows={1} className="flex-grow mx-2 p-2 text-sm bg-white rounded-lg border border-gray-300" placeholder="Your message..."></textarea>
          <button type="submit" className="p-2 max-h-10 max-w-10 bg-blue-600 border flex justify-center items-center rounded-full">
            <Image src={sendIcon} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
}
