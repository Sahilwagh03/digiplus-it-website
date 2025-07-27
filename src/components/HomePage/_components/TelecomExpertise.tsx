'use client';
import { HomeConstant, positionConfig } from '@/constant/homeConstant';
import { motion , easeOut } from 'framer-motion';
import React from 'react';

function TelecomExpertise() {
  const { title, description, features } = HomeConstant.TelecomExpertiseSection;

  // Animation variants
  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut, // EaseOutBack
      },
    },
  };

  const headingVariant = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const paraVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
  };

  return (
    <motion.section
      className='bg-white py-10 px-6 md:px-10 w-full relative overflow-hidden'
      id='expertise'
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center font-primary mb-16 max-w-4xl mx-auto'>
          <motion.h2
            className='text-xl md:text-2xl lg:text-4xl font-bold flex flex-col lg:flex-row gap-x-2 justify-center'
            variants={headingVariant}
          >
            {title.map((part, index) => (
              <span
                key={index}
                className={`${part.highlight ? 'text-primary-red' : ''} transition-colors duration-300`}
              >
                {part.text}
              </span>
            ))}
          </motion.h2>

          <motion.p
            className='font-third text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto'
            variants={paraVariant}
          >
            {description}
          </motion.p>
        </div>

        {/* Grid Cards */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20'
          variants={containerVariant}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const { rotate, bg, hoverText } = positionConfig[index] || {
              rotate: '',
              bg: 'bg-gray-300',
              hoverText: '',
            };

            return (
              <motion.div
                key={index}
                className={`group relative bg-white border border-gray-100 rounded-xl p-10 shadow-sm hover:shadow-md transform transition-transform duration-300 ease-in-out hover:-translate-y-2 ${rotate}`}
                variants={cardVariant}
                whileHover={{ scale: 1.03 }}
                style={{ willChange: 'transform, opacity' }}
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default TelecomExpertise;
