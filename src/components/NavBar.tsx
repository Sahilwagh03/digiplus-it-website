'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiDotsVertical } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';

type Props = {};

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
    <>
      {/* Top Nav */}
      <div className="z-[996] top-0 lg:top-4 lg:px-4 sticky [inset:1rem_0_auto] bg-transparent">
        <div className="p-4 lg:p-0 bg-white lg:bg-[#ffffffb3] container-nav mx-auto flex items-center justify-between
          lg:clip-path-[polygon(0_0,100%_0,100%_calc(100%-1.5rem),calc(100%-1.5rem)_100%,0_100%)] 
          lg:[-webkit-clip-path:polygon(0_0,100%_0,100%_calc(100%-1.5rem),calc(100%-1.5rem)_100%,0_100%)]"
        >
          {/* Logo */}
          <div className="flex-1">
            <Link href="/">
              <div className="flex items-center">
                <h3 className="font-primary text-5xl text-primary-red">DIGI</h3>
                <h3 className="font-primary text-5xl text-primary-blue">PLUS</h3>
                <h3 className="font-primary text-5xl bg-primary-green text-white px-1 ml-1">IT</h3>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex px-4 flex-auto justify-center items-center font-normal relative">
            <div className="wrapper-nav-link-1 flex gap-x-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xl nav-link w-nav-link hover:text-primary-blue transition-colors duration-200 ease-in-out"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Desktop Contact */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-x-6 mr-2">
            <Link href="#" className="text-xl hover:text-primary-blue transition-colors duration-200 ease-in-out">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex justify-center items-center z-[1000]">
            <button onClick={() => setIsOpen(!isOpen)} className="text-4xl text-primary-blue">
              {isOpen ? <IoCloseSharp /> : <BiDotsVertical />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Always Mounted) */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-primary-blue z-[995] 
          flex flex-col items-start justify-start pt-24 px-6
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col w-full gap-y-6 text-left font-third">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-2xl md:text-3xl text-white transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#"
            className="text-2xl md:text-3xl text-white transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
