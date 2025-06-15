'use client';

import React from 'react';
import { HomeConstant } from '@/constant/homeConstant';  // adjust the import path as needed
import ImageCarousel from './ImageCarousel';

type Props = {}

const Partner = (props: Props) => {
    const { title, description, partners } = HomeConstant.PartnerSection;

    return (
        <section className="font-primary text-black py-12 text-left">
            <div className='px-4 mx-auto max-w-6xl'>
                <h2>{title}</h2>
                <p className="font-third text-md md:text-lg lg:text-xl text-gray-700 max-w-2xl mt-4">{description}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
                <ImageCarousel />
            </div>
        </section>
    );
}

export default Partner;
