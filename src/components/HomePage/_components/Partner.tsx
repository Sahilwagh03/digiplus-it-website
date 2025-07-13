'use client';

import React, { useRef } from 'react';
import { HomeConstant } from '@/constant/homeConstant';
import ImageCarousel from './ImageCarousel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Partner = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  const { title, description } = HomeConstant.PartnerSection;

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none', // Enables reverse on scroll up
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    ).fromTo(
      paraRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.6'
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="font-primary text-black py-12 text-left"
    >
      <div className="px-4 mx-auto max-w-6xl">
        <h2
          ref={headingRef}
          className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold flex flex-wrap gap-x-2 opacity-0"
        >
          {title.map((line, index) => (
            <span
              key={index}
              className={line.highlight ? 'text-primary-blue' : ''}
            >
              {line.text}
            </span>
          ))}
        </h2>
        <p
          ref={paraRef}
          className="font-third text-md md:text-lg lg:text-xl text-gray-700 max-w-2xl mt-4 opacity-0"
        >
          {description}
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        <ImageCarousel />
      </div>
    </section>
  );
};

export default Partner;
