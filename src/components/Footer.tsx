import React from 'react';
import Link from 'next/link';
import { HomeConstant } from '@/constant/homeConstant';
import {
  FaFacebookF,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from 'react-icons/fa';

const iconMap = {
  FaFacebookF,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaDribbble,
};

const Footer = () => {
  const { brand, logo, links, socialLinks, copyright } = HomeConstant.FooterSection;
  const year = new Date().getFullYear();
  const copyrightText =
    typeof copyright === 'string' ? copyright.replace('{year}', String(year)) : '';

  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                {brand}
              </span>
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {links.map((section, idx) => (
              <div key={idx}>
                <h2 className="mb-6 !text-lg font-semibold text-gray-900 uppercase">{section.title}</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Link href={item.href} className="hover:underline">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {copyrightText}
          </span>

          {/* Social Media Icons */}
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5 text-gray-500  text-lg">
            {socialLinks.map((social, idx) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <Link href={social.href} key={idx}>
                  {Icon && <Icon className="hover:text-primary-blue transition" />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
