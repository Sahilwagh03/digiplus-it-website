"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: 'Web & Mobile App',
    description: 'Cross-platform development with responsive designs',
    tags: ['React', 'Angular', 'Node.js', 'Android', 'iOS'],
    features: ['Responsive UI/UX design', 'Hybrid & native implementations'],
    icon: '📱'
  },
  {
    title: 'Backend Development',
    description: 'Scalable and robust backend architectures',
    tags: ['Ruby', 'Python', 'Elixir', '.NET', 'Django', 'Swagger', 'Java / JBOSS', 'Node.js'],
    features: ['Microservices architecture', 'API development & integration'],
    icon: '🗄️'
  },
  {
    title: 'COTS Implementation',
    description: 'Commercial off-the-shelf solutions customization',
    tags: ['/// EOC/ECM', 'TMForum APIs', 'Salesforce', 'Magento', 'Camunda', 'MS Dynamics 365'],
    features: ['Customized implementations', 'System integration expertise'],
    icon: '📦'
  },
  {
    title: 'QA & Performance',
    description: 'Comprehensive testing and quality assurance',
    tags: ['Robot Framework', 'Selenium', 'Playwright', 'JMeter', 'Katalon', 'AI Testing'],
    features: ['Automated testing frameworks', 'Load & performance optimization'],
    icon: '🧪'
  },
  {
    title: 'Cloud, DevOps & AIOps',
    description: 'Cloud-native architecture & continuous delivery',
    tags: ['AWS', 'Azure', 'GCP', 'HuggingFace', 'Docker', 'Kubernetes', 'Jenkins'],
    features: ['CI/CD pipeline automation', 'Infrastructure as code'],
    icon: '☁️'
  },
  {
    title: 'Security & Reporting',
    description: 'Data protection and actionable insights',
    tags: ['PowerBI', 'Tableau', 'ELK Stack', 'Grafana', 'Prometheus', 'AppDynamics', 'Sentry'],
    features: ['Data visualization dashboards', 'Security compliance implementation'],
    icon: '🔐'
  },
];

export default function TechnicalCapabilitiesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.capability-card');
    gsap.set(cards, { opacity: 0, y: 60 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-6 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-white">
          <span className="text-sky-300">Technical</span> Capabilities
        </h2>
        <p className="text-white/80 text-lg mt-4">
          End-to-end solutions powered by cutting-edge technologies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {capabilities.map((cap, index) => (
          <div
            key={cap.title}
            className="capability-card bg-blue-800/60 backdrop-blur-md rounded-2xl border border-blue-600 shadow-lg p-6 text-white hover:scale-[1.02] transition-transform"
          >
            <div className="text-3xl mb-3">{cap.icon}</div>
            <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
            <p className="text-white/80 text-sm mb-4">{cap.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {cap.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-blue-900/70 text-blue-100 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ul className="space-y-1">
              {cap.features.map(feature => (
                <li key={feature} className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
