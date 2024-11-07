import Image from "next/image";
import splashImage from '@/assets/cuate.png';
import { Button } from "flowbite-react";
import Link from "next/link";


export default function Home() {
  return (
   <div className="min-h-[100vh] bg-main">
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
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
          <Link href="login">Start messaging</Link>
        </button>
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
          <Link href="">Terms & Privacy Policy</Link>
        </button>
     </div>
  
      </div>
   </div>
  );
}
