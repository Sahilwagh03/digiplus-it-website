'use client';
import React, { useState } from 'react';
import { HomeConstant } from '@/constant/homeConstant';
import {
  CentralIcon,
  CollabIcon,
  CollabIconContainer,
  Collaboration,
} from '../../../components-react-nex/Collaboration/Collaboration';
import Image from 'next/image';

const DiverseClientPortfolio = () => {
  const { title, subtitle, description, diverseClients } =
    HomeConstant.DiverseClientPortfolioSection;

  const [activeIndex, setActiveIndex] = useState(1);
  const activeClient = diverseClients[activeIndex];

  return (
    <section className="py-20 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between gap-12 items-center lg:items-start">
        {/* Left Side: Text + Dynamic Info */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {title} <span className="text-primary-blue">{subtitle}</span>
          </h2>
          <p className="font-third text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            {description}
          </p>

          {activeClient && (
            <div className="pt-6 border-t border-black/20">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={activeClient.logo}
                    alt={activeClient.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-primary text-2xl md:text-3xl font-semibold">
                  {activeClient.name}
                </h3>
              </div>
              <p className="font-third text-sm uppercase tracking-wide text-primary-blue font-bold mt-2">
                {activeClient.industry || 'Technology'}
              </p>
              <p className="font-third mt-2 text-base max-w-xl">
                {activeClient.description}
              </p>
            </div>
          )}
        </div>

        {/* Right Side: Circular Logos */}
        <div className="flex-1 flex justify-center">
          <Collaboration>
            <CentralIcon
              icon={activeClient.logo}
              alt={activeClient.name}
              width={48}
              height={48}
            />
            <CollabIconContainer>
              {diverseClients.map((client, index) => (
                <CollabIcon
                  key={index}
                  index={index}
                  icon={client.logo}
                  width={32}
                  height={32}
                  alt={client.name}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </CollabIconContainer>
          </Collaboration>
        </div>
      </div>
    </section>
  );
};

export default DiverseClientPortfolio;
