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

        <h5 className="text-xl font-bold dark:text-white text-center">
          Connect easily with your government and community
        </h5>
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
