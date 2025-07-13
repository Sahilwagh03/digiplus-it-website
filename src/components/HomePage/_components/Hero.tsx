'use client';

import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Button from '@/components/Button';
import StarIcon from '@/components/icons/StarIcon';

const Hero = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollRef = useRef(null);
  const scrollTextRef = useRef(null);
  const iconRef = useRef(null);
  const starRotationRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    // 1. Fade in StarIcon first
    tl.fromTo(iconRef.current, { opacity: 0 }, { opacity: 1 });

    // 2. Animate heading, para, button
    tl.fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')
      .fromTo(paraRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.6')
      .fromTo(buttonRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5');

    // 3. Animate scroll text
    tl.fromTo(
      scrollTextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1 },
      '-=0.3'
    );

    // 4. Scroll bounce animation (independent)
    gsap.to(scrollRef.current, {
      y: 8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 1,
    });
  }, []);

  // 🔁 Rotate StarIcon on mobile & tablet, handle resize
  useEffect(() => {
    const matchMedia = window.matchMedia('(max-width: 1023px)');

    const startStarRotation = () => {
      if (!starRotationRef.current && iconRef.current) {
        starRotationRef.current = gsap.to(iconRef.current, {
          rotate: 360,
          duration: 12,
          ease: 'linear',
          repeat: -1,
        });
      }
    };

    const stopStarRotation = () => {
      starRotationRef.current?.kill();
      starRotationRef.current = null;
    };

    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) startStarRotation();
      else stopStarRotation();
    };

    // Initial check
    if (matchMedia.matches) startStarRotation();

    // Add listener
    matchMedia.addEventListener('change', handleResize);

    return () => {
      matchMedia.removeEventListener('change', handleResize);
      stopStarRotation();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className='section-hero pt-[120px] pb-4 lg:pb-0 lg:h-screen lg:pt-[6rem]'
    >
      <div className='relative w-layout-blockcontainer container-1280 w-container'>
        {/* Mobile Star Icon */}
        <div className='h-[20rem] pb-10 lg:pb-0 flex lg:hidden justify-center items-center'>
          <div ref={iconRef} className='will-change-transform opacity-0'>
            <StarIcon className='w-full h-full' />
          </div>
        </div>

        {/* Hero Content */}
        <div className='lg:pt-10 text-left lg:text-center justify-start lg:justify-items-center lg:place-content-center lg:items-center wrapper-hero-content h-auto lg:h-full'>
          <h1
            ref={headingRef}
            className='opacity-0 font-primary tracking-[-0.01em] uppercase leading-[1] text-[clamp(2.5rem,calc(1rem+5vw),7rem)] font-black [text-wrap:balance] mt-0 mb-0'
          >
            Crafting Future‑Ready Platforms for{' '}
            <span className='text-primary-blue'>Telecom</span> &{' '}
            <span className='text-primary-blue'>Analytics</span>
          </h1>

          <div ref={paraRef} className='opacity-0 font-third lg:max-w-[800px] mx-auto'>
            <p className='text-md md:text-xl text-left lg:text-center'>
              DigiPlus empowers industries with OSS/BSS, cloud-native solutions,
              and Agile delivery—driving impact through data and AI governance.
            </p>
          </div>

          <div ref={buttonRef} className='opacity-0'>
            <Button>Contact Us</Button>
          </div>

          {/* Scroll Indicator */}
          <div className='hidden lg:flex lg:absolute bottom-0 flex-col gap-0.5 justify-center items-center group cursor-pointer'>
            <span
              ref={scrollTextRef}
              className='opacity-0 text-sm text-black group-hover:text-primary-blue transition-colors'
            >
              Scroll to discover
            </span>
            <svg
              ref={scrollRef}
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='15'
              viewBox='0 0 26 15'
              fill='none'
              className='arrow-scroll w-3 h-3 text-black group-hover:text-primary-blue transition-colors'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 14.9999L0 1.99991L1.41421 0.585696L13 12.1715L24.5858 0.585693L26 1.99991L13 14.9999Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
