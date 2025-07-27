'use client';
import React from 'react';
import { HomeConstant } from '@/constant/homeConstant';
import Button from '@/components/Button';
import Link from 'next/link';
import { easeOut, motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const CallToAction = () => {
  const { title, description, buttonText, buttonLink } = HomeConstant.CallToActionSection;

  return (
    <section className="relative bg-gradient-to-r from-primary-blue to-blue-800 py-20 px-6 w-full text-center flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-prifmary-blue/70 backdrop-blur-sm"></div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        <motion.h2
          className="font-primary text-4xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.01em] leading-[0.875] text-white mb-6 flex flex-wrap justify-center gap-x-2"
        >
          {title.map((part, idx) => (
            <motion.span key={idx} variants={itemVariants}>
              {part.text}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="font-third text-md md:text-lg lg:text-xl text-white max-w-4xl mt-4 mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        <motion.div className="mt-10" variants={itemVariants}>
          <Link href={buttonLink}>
            <Button
              width="w-44"
              height="h-14"
              allowHoverAnimation={false}
            >
              {buttonText}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
