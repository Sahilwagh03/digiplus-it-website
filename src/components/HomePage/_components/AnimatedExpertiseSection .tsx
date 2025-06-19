import React from 'react';

const steps = [
  {
    label: '01',
    title: 'Data & AI Governance',
    items: [
      'Implementation of Data & IA Governance Framework.',
      'Deployment of data catalog solutions and logic.',
      'Change Management & Onboarding.',
    ],
  },
  {
    label: '02',
    title: 'Data & AI Strategy',
    items: [
      'Market analysis and AI readiness assessment.',
      'Roadmap development and KPI definition.',
      'Stakeholder workshops and training.',
    ],
  },
  {
    label: '03',
    title: 'Advanced Analytics',
    items: [
      'Predictive modeling and forecasting.',
      'Custom ML algorithm development.',
      'Model deployment and monitoring.',
    ],
  },
  {
    label: '04',
    title: 'AI Operations',
    items: [
      'MLOps pipeline implementation.',
      'Continuous integration and delivery.',
      'Governance and compliance automation.',
    ],
  },
];

const AnimatedExpertiseSection = () => {

  return (
    <section
      
      className="relative flex flex-col lg:pt-24 lg:pb-16 "
    >
      <div className="container mx-auto px-4">
        <h2 className='font-primary'>Unlocking the potential of your data</h2>

      </div>
    </section>
  );
};

export default AnimatedExpertiseSection;
