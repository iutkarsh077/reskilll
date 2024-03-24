"use client";
import React from "react";
import { TextGenerateEffectDemo } from "./GenerateText";
import Link from "next/link";
import Image from "next/image";
import meetup2 from "../../public/meetup2.png";
import meetup3 from "../../public/Meetup3.png";

const IntroHeader = () => {
  return (
    <div>
      <div className="sm:flex w-full  justify-between py-8 px-4 sm:px-12">
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start">
          <div className="text-black text-center sm:text-left mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Networking | Meetups | UpSkill
            </h1>
          </div>
          <div className="text-black text-center sm:text-left mb-4">
            <p className="text-lg sm:text-xl">
              Enhance Your Career Growth with Soarx
            </p>
          </div>
          <div className="mb-6">
            <TextGenerateEffectDemo />
          </div>
          <div className="w-full lg:w-1/4 sm:w-48">
            <Link href="#">
            <button className="bg-pink-600 hover:bg-white ease-in-out hover:text-black  text-white font-medium py-3 px-6 rounded-md xl:text-lg text-sm text-center transition duration-300 hover:border-pink-500 hover:shadow-xl">
              Explore
            </button>
            </Link>
          </div>
        </div>
        <div className="flex gap-x-5 justify-center items-center sm:items-start  mt-8 sm:mt-0">
          <Image
            src="/Meetup1.png"
            width={200}
            height={400}
            alt="pic1"
            className="hidden xl:block rounded-lg"
          />
          <Image
            src="/meetup2.png"
            width={200}
            height={400}
            alt="pic2"
            className="hidden lg:block rounded-lg"
          />
          <Image
            src="/meetup3.png"
            width={200}
            height={400}
            alt="pic3"
            className="hidden sm:block rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroHeader;
