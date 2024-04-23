"use client";
import Image from "next/image";
import React from "react";
const Herodsa = () => {
  return (
    <div className="w-screen sm:flex justify-around">
      <div className="left sm:w-1/2 w-full sm:pl-10 ">
        <div className="flex flex-col gap-y-4 justify-center sm:h-[500px] h-[300px]">
          <p className="text-5xl p-4 font-semibold">
            Get <span className="text-purple-700">Placement</span> Ready in 4
            Months!
          </p>
          <p className="text-xl opacity-50 pl-4">
            New Data Structures & Algorithms Batch
          </p>
          <p className="relative flex items-center rounded-xl ml-4 justify-center w-1/3 hover:cursor-pointer h-12 text-lg shadow-lg font-semibold overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 rounded-xl transition-all flex justify-center items-center text-white hover:translate-x-1">
              Join Reskilll
            </span>
          </p>
        </div>
      </div>
      <div className="sm:w-1/2 w-full flex items-center justify-center">
        <div className="overflow-x-hidden flex justify-center dark:filter dark:invert  dark:hue-rotate-180 items-center">
          <Image
            src="https://media4.giphy.com/media/p4NLw3I4U0idi/giphy.gif"
            alt="Gif"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Herodsa;
