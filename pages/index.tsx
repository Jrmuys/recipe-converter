import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
   return (
      <div>
         {/* Recipe website input */}
         <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <input
               type="text"
               placeholder="Search for a recipe"
               className="border-2 border-black rounded-md p-2"
            ></input>
            <button className="bg-black text-white rounded-md p-2">
               Search
            </button>
         </div>
      </div>
   );
}
