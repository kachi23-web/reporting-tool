import React from 'react'
import Image from 'next/image'
import modalIcon from '@/assets/google-logo.png'
import Link from 'next/link'
import checkIcon from '@/assets/check.svg'

interface ModalProps {
  modalTitle: string;
}

const Modal: React.FC<ModalProps> = ({ modalTitle }) => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]">
      <div className="bg-slate-200 flex flex-col rounded-xl shadow-xl overflow-hidden py-10">
        <div className="flex justify-center">
          <div className="p-3 rounded-full">
            <Image src={checkIcon} alt="image description" className='h-10 w-10' />
          </div>
        </div>
        <h3 className="text-2xl font-bold dark:text-white text-center">{modalTitle} verification is successful</h3>
        <Link href="" className='inline-block'>
          <button
            type="button"
            className="w-full py-2.5 px-5 me-2 mb-2 text-sm font-bold text-gray-900 focus:outline-none bg-transparent rounded-lg bg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer"
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
