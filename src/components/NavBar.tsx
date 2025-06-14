import Link from 'next/link';
import React from 'react';

type Props = {};

const NavBar = (props: Props) => {
    return (
        <div className="nav-bar w-nav">
            <div className="container-nav w-container">
                <div className="wrapper-nav-left">
                    <Link href="#top-of-the-page">
                        <div className="flex flex-row items-center">
                            <h3 className="text-5xl text-primary-red">DIGI</h3>
                            <h3 className="text-5xl text-primary-blue">PLUS</h3>
                            <h3 className="text-5xl bg-primary-green text-white px-1 ml-1">IT</h3>
                        </div>
                    </Link>
                </div>
                <nav role="navigation" className="nav-menu w-nav-menu">
                    <div className="wrapper-nav-link-1">
                        <Link href="#clients" className="text-lg nav-link w-nav-link">Clients</Link>
                        <Link href="#expertise" className="text-lg nav-link w-nav-link">Expertise</Link>
                        <Link href="#solutions" className="text-lg nav-link w-nav-link">Solutions</Link>
                        <Link href="#about-us" className="text-lg nav-link w-nav-link">About us</Link>
                        <Link href="#partners" className="text-lg nav-link w-nav-link">Partners</Link>
                        <Link data-w-id="1fbcdb53-0d91-fef6-471a-1a46d60013c1" href="#" className="text-lg nav-link is-contact w-nav-link">Contact</Link>
                    </div>
                    <div className="wrapper-nav-link-2">
                        <Link href="/en/informations-legales" className="nav-link is-second">Legal information</Link>
                        <Link href="/en/politique-de-confidentialite" className="nav-link is-second">Data protection policy</Link>
                        <Link href="https://www.michaelbernard.fr/" target="_blank" rel="noopener noreferrer" className="nav-link is-second">Developed by Michaël Bernard</Link>
                    </div>
                </nav>
                <div className="wrapper-right-nav">
                    <Link data-w-id="3cc77861-1302-a5d0-5ead-b82a16f89027" href="#" className="text-lg nav-contact">Contact</Link>
                </div>
                <div
                    className="menu-button w-nav-button"
                    aria-label="menu"
                    role="button"
                    aria-controls="w-nav-overlay-0"
                    aria-haspopup="menu"
                    aria-expanded="false"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="40"
                        viewBox="0 0 8 40"
                        fill="none"
                        className="burger"
                    >
                        <rect y="32" width="8" height="8" fill="var(--u-color--primary-blue)"></rect>
                        <rect width="8" height="8" fill="var(--u-color--primary-blue)"></rect>
                        <rect y="16" width="8" height="8" fill="var(--u-color--primary-blue)"></rect>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        className="close"
                    >
                        <rect y="28.3137" width="40" height="8" transform="rotate(-45 0 28.3137)" fill="var(--u-color--primary-blue)"></rect>
                        <rect x="5.66016" y="0.029541" width="40" height="8" transform="rotate(45 5.66016 0.029541)" fill="currentColor"></rect>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default NavBar;