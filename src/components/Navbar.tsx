"use client";
import React, { useState } from "react";
import SoarxLogo from "../../public/soarx-logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar2() {
  const menuItems = ["DSA", "Events", "Community", "Hackathon", "Log Out"];

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-xl fixed top-0 w-screen z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src={SoarxLogo}
              width={40}
              height={40}
              alt="Logo"
              className="w-auto h-8"
            />
            <p className="font-bold text-black ml-2 text-lg">SOARX</p>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-black focus:outline-none pr-5"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Navbar links */}
          <div className="hidden md:flex md:space-x-4">
            <Link
              href="/"
              className={`text-black ease-in-out transition duration-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/"
                  ? "bg-gray-700 text-white"
                  : ""
              }`}
            >
              Home
            </Link>
            {menuItems.map((item, index) => (
              <Link
                key={`${item}-${index}`}
                href={`/${item}`.toLowerCase()}
                className={`text-black ease-in-out transition duration-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === `/${item.toLowerCase()}`
                    ? "bg-gray-700 text-white"
                    : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
          {isOpen && (
            <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-md z-20">
              {menuItems.map((item, index) => (
                <a
                  key={`${item}-${index}`}
                  href="#"
                  className="block text-black transition duration-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
