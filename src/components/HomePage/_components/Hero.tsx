import Button from '@/components/Button'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <section className='section-hero pb-4 lg:pb-0 lg:h-screen lg:pt-[6rem]'>
            <div className="relative w-layout-blockcontainer container-1280 w-container ">
                <div className='h-[25rem] flex lg:hidden'>
                    {/* Image */}
                </div>
                <div className="lg:pt-10 text-left  lg:text-center justify-start lg:justify-items-center lg:place-content-center lg:items-center wrapper-hero-content h-auto lg:h-full">
                    <h1 className="font-primary tracking-[-0.01em] uppercase leading-[0.875] text-[clamp(1.5rem,calc(1rem+4vw),4.5rem)] font-semibold [text-wrap:balance] mt-0 mb-0">
                        Crafting Future‑Ready Platforms for <span className='text-primary-blue'>Telecom</span> & <span className='text-primary-blue'>Analytics</span>
                    </h1>
                    <div className='font-third lg:max-w-[800px] mx-auto'>
                        <p className='text-md md:text-xl text-left lg:text-center'>
                            DigiPlus empowers industries with OSS/BSS, cloud-native solutions, and Agile delivery—driving impact through data and AI governance.
                        </p>
                    </div>
                    <Button>
                        Contact Us
                    </Button>
                    <div className="hidden lg:flex lg:absolute bottom-0 flex-col gap-0.5 justify-center items-center group cursor-pointer">
                        <span className="text-sm text-black group-hover:text-primary-blue transition-colors">
                            Scroll to discover
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="15"
                            viewBox="0 0 26 15"
                            fill="none"
                            className="arrow-scroll w-3 h-3 text-black group-hover:text-primary-blue transition-colors"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13 14.9999L0 1.99991L1.41421 0.585696L13 12.1715L24.5858 0.585693L26 1.99991L13 14.9999Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero