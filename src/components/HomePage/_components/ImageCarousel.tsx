'use client';
import React from 'react';
import { HomeConstant } from '@/constant/homeConstant'; // Adjust path as needed
import Image from 'next/image';

const ImageCarousel = () => {
  const { partners } = HomeConstant.PartnerSection;
  const repeatedPartners = [...partners, ...partners, ...partners, ...partners]; // repeat for loop

  return (
    <div className="overflow-hidden whitespace-nowrap pt-5 lg:py-10 select-none">
      <div className="animate-carousel inline-flex items-center">
        {repeatedPartners.map((partner, index) => (
          <div
            key={index}
            className="bg-[#ffffffb3] flex justify-center items-center w-[280px] h-[180px] mx-1 rounded-md shadow-sm"
          >
            <Image
              src={partner.imageUrl}
              alt={partner.alt || `Client Logo ${index + 1}`}
              className="max-h-[80px] object-contain pointer-events-none select-none"
              loading="eager"
              width={220}
              height={80}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
