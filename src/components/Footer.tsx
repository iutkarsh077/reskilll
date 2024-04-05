"use client"
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Soarx is a premier networking dedicated to
            teaching the intricate skills and knowledge essential to mastering
            the art and science of coding.
          </p>
        </div>
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="#"
                className="transition-colors hover:transition-all duration-300 hover:font-bold"
              >
                Home
              </Link>
            </li>
           
            <li>
              <Link
                href="#"
                className="transition-colors hover:transition-all duration-300 hover:font-bold"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-colors hover:transition-all duration-300 hover:font-bold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="hover:font-bold hover:transition-all transition-colors duration-300"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="hover:font-bold hover:transition-all transition-colors duration-300"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="hover:font-bold hover:transition-all transition-colors duration-300"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">Contact Us</h2>
          <p>New York City, USA</p>
          <p>New York 10001</p>
          <p>Email: info@soarx.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Soarx. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;