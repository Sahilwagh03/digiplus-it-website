'use client';
import Image from 'next/image';
import React from 'react';

const steps = [
  {
    label: '01',
    title: 'Data & AI Governance',
    items: [
      'Implementation of Governance Framework.',
      'Data catalog logic & onboarding.',
      'Change management process.',
    ],
  },
  {
    label: '02',
    title: 'Data & AI Strategy',
    items: [
      'AI readiness & market assessment.',
      'Roadmap & KPI development.',
      'Stakeholder training workshops.',
    ],
  },
  {
    label: '03',
    title: 'Advanced Analytics',
    items: [
      'Forecasting & predictive modeling.',
      'Custom ML algorithm creation.',
      'Deployment & model monitoring.',
    ],
  },
  {
    label: '04',
    title: 'AI Operations',
    items: [
      'End-to-end MLOps pipelines.',
      'CI/CD for AI models.',
      'Compliance & automation.',
    ],
  },
];

export default function AIBentoGrid() {
  return (
    <section className='gradient h-auto'>
      <div className="max-w-7xl mx-auto font-oswald grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 p-4 md:p-8 text-white">
        {/* Hero Card */}
        <div className="col-span-1 md:col-span-2 lg:row-span-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl relative p-4 flex flex-col justify-between h-full">
          <h2 className="font-primary text-lg md:text-xl font-semibold">
            Unlocking the Power of AI
          </h2>

          <div className="text-[4rem] md:text-[20rem] font-black text-white/20 leading-none -mt-2 mb-1 select-none">
            AI
          </div>

          <p className="text-sm text-white/80 font-medium">
            Our AI services empower enterprises to leverage data, drive innovation,
            and operate intelligently through smart governance and execution.
          </p>
        </div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`card-glass-hover font-primary col-span-1 md:col-span-2 
            ${index === 0 ? 'lg:col-start-3' : ''}
            ${index === 1 ? 'lg:col-start-5' : ''}
            ${index === 2 ? 'lg:col-start-3' : ''}
            ${index === 3 ? 'lg:col-start-5' : ''}
            bg-white/5 backdrop-blur-md border border-white/20 rounded-xl 
            p-4 md:p-5 flex flex-col justify-between
            transition duration-300 ease-out transform 
            hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
            hover:bg-white/10 hover:backdrop-blur-xl hover:border-white/30
          `}
          >
            <div>
              <h2 className="text-3xl text-primary font-bold mb-2">{step.label}</h2>
              <h3 className="text-base md:text-lg font-medium mb-3">{step.title}</h3>
              <ul className="list-disc font-third text-white/80 text-md space-y-1 pl-4 font-medium">
                {step.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
