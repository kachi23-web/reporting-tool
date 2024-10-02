import Image from "next/image";
import splashImage from '@/assets/cuate.png';
import Link from "next/link";

export default function Home() {
  // container px-4 mx-auto
  return (
    <div className="bg-purple-400 min-h-screen flex flex-col justify-between">
      <div className="pt-20 flex flex-col items-center space-y-20">
        <p className="text-3xl font-bold dark:text-white text-center">Bridges</p>

        <div className="flex justify-center">
          <Image src={splashImage} alt="hero image" />
        </div>

<<<<<<< HEAD
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
  
=======
        <h5 className="text-xl font-bold dark:text-white text-center">
          Connect easily with your government and community
        </h5>
>>>>>>> 0bc183a63877f70aa0ad241c8843f6f89e4bd471
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center space-y-4 pb-10">
        <Link href="/login" className="w-3/4">
          <button
            type="button"
            className="w-full py-2.5 px-5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Start messaging
          </button>
        </Link>

        <Link href="/terms" className="w-3/4">
          <button
            type="button"
            className="w-full py-2.5 px-5 text-sm font-bold text-gray-900 bg-transparent hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 focus:outline-none rounded-lg"
          >
            Terms & Privacy Policy
          </button>
        </Link>
      </div>
    </div>
  );
}
