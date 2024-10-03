import Image from "next/image";
import splashImage from '@/assets/cuate.png';
import { Button } from "flowbite-react";
import Link from "next/link";


export default function Home() {
  return (
   <div className="bg-purple-400 min-h-[100vh]">
     <div className="container px-4 mx-auto">
      
     <div className="space-y-16">
        <p className="text-3xl font-bold dark:text-white text-center">Bridges</p>

        <div className="flex justify-center">
          <Image src={splashImage} alt="hero image" />
        </div>

        <h5 className="text-xl font-bold dark:text-white text-center">Connect easily with your community</h5>
     </div>
     
     {/* Buttons */}
     <div className="flex flex-col">
        <Link href="login">
          <button type="button" className="text-white min-w-80 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Start messaging</button>
        </Link>
  
        <Link href="" className="w-full">
          <button type="button" className="py-2.5 min-w-80 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-500 rounded-lg bg  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Terms & Privacy Policy</button>
        </Link>
     </div>
     {/* border border-gray-200 */}
  
      </div>
   </div>
  );
}
