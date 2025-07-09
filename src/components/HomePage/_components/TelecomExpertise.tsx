import { HomeConstant } from '@/constant/homeConstant';
import React from 'react';

function TelecomExpertise() {
  const { title, description, features } = HomeConstant.TelecomExpertiseSection;

  // Rotation and positioning configs for each feature
  const positionConfig = [
    {
      rotate: 'rotate-1',
      position: 'md:left-[20%] lg:left-[22%] md:top-16 md:-translate-x-1/2',
      bg: 'bg-primary-green',
      hoverText: 'group-hover:text-primary-green',
    },
    {
      rotate: '-rotate-1',
      position: 'md:top-[240px] md:left-1/2 md:-translate-x-1/2',
      bg: 'bg-primary-blue',
      hoverText: 'group-hover:text-primary-blue',
    },
    {
      rotate: 'rotate-2',
      position: 'md:top-[430px] md:right-[20%] lg:right-[22%] md:translate-x-1/2',
      bg: 'bg-primary-red',
      hoverText: 'group-hover:text-primary-red',
    },
  ];

  return (
    <section
      className='bg-white py-10 px-6 md:px-10 w-full relative overflow-hidden'
      id='our-working-model'
    >
      <div className='max-w-7xl mx-auto relative z-10 min-h-[550px] md:min-h-[600px] lg:min-h-[800px]'>
        {/* Headline and Description */}
        <div className='text-center font-primary mb-12 lg:mb-0 max-w-4xl mx-auto relative z-20'>
          <h2 className='font-primary text-xl md:text-2xl lg:text-4xl font-bold flex gap-x-2 justify-center'>
            {title.map((part, index) => (
              <span
                key={index}
                className={`${part.highlight ? 'text-primary-red' : ''} transition-colors duration-300`}
              >
                {part.text}
              </span>
            ))}
          </h2>
          <p className='font-third text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto'>
            {description}
          </p>
        </div>

        {/* Features Cards */}
        <div className='flex flex-col items-center justify-center space-y-16 md:space-y-0 md:block relative z-20'>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const { rotate, position, bg, hoverText } = positionConfig[index] || {
              rotate: '',
              position: '',
              bg: 'bg-gray-300',
              hoverText: '',
            };

            return (
              <div
                key={index}
                className={`group relative bg-white border border-gray-100 rounded-xl p-10 shadow-sm hover:shadow-md transform hover:-translate-y-4 ${rotate} transition duration-300 ease-in-out w-full max-w-lg md:absolute ${position}`}
              >
                <div
                  className={`absolute -top-8 left-1/2 -translate-x-1/2 ${bg} text-white p-5 rounded-full shadow-lg z-20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className='text-3xl' />
                </div>
                <h3
                  className={`font-primary text-xl font-bold text-gray-800 mt-8 mb-3 text-center transition-colors duration-300 ${hoverText}`}
                >
                  {feature.title}
                </h3>
                <p className='text-gray-600 text-base leading-relaxed text-center'>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TelecomExpertise;
