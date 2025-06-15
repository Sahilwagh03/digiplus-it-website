'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { BiDotsVertical } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';

type Props = {};

// Extracted links
const navLinks = [
  { href: '#clients', label: 'Clients' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#about-us', label: 'About us' },
  { href: '#partners', label: 'Partners' },
];

const NavBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-[996] top-0 lg:top-4 lg:px-4 sticky [inset:1rem_0_auto] bg-transparent">
      <div className="
      p-4 lg:p-0 bg-white lg:bg-[#ffffffb3] container-nav mx-auto flex 
      items-center justify-between
      lg:clip-path-[polygon(0_0,100%_0,100%_calc(100%-1.5rem),calc(100%-1.5rem)_100%,0_100%)] 
      lg:[-webkit-clip-path:polygon(0_0,100%_0,100%_calc(100%-1.5rem),calc(100%-1.5rem)_100%,0_100%)]"
      >
        {/* Logo */}
        <div className="flex-1">
          <Link href="#top-of-the-page">
            <div className="flex items-center">
              <h3 className="font-primary text-5xl text-primary-red">DIGI</h3>
              <h3 className="font-primary text-5xl text-primary-blue">PLUS</h3>
              <h3 className="font-primary text-5xl bg-primary-green text-white px-1 ml-1">IT</h3>
            </div>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav
          role="navigation"
          className="hidden lg:flex px-4 flex-auto justify-center items-center font-normal relative"
        >
          <div className="font-third wrapper-nav-link-1 flex gap-x-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-lg nav-link w-nav-link hover:text-primary-blue transition-colors duration-200 ease-in-out"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right Side - Contact */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-x-6 mr-2">
          <Link href="#" className="text-lg hover:text-primary-blue transition-colors duration-200 ease-in-out">
            Contact
          </Link>
        </div>

        <div className="lg:hidden flex justify-center items-center z-[1000]">
          <button onClick={() => setIsOpen(!isOpen)} className="text-5xl text-primary-blue">
            {isOpen ? <IoCloseSharp /> : <BiDotsVertical />}
          </button>
        </div>

        <div
          className={`lg:hidden fixed top-full right-0 w-full h-screen bg-primary-blue transition-all duration-300 ease-in-out z-[900] px-6 py-10
            ${isOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}
          `}
        >
          <nav className="flex flex-col items-start gap-6 font-third">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-2xl text-white font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)} 
              >
                {label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="text-2xl text-white font-medium transition-colors duration-200 "
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
