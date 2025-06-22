import { Metadata } from 'next';
import ContentList from '@/components/ContentList';
import { getAllContent } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Case Studies - DigiPlus IT',
  description: 'Explore our successful projects and case studies showcasing our expertise and results.',
};

export default async function CaseStudyPage() {
  const caseStudies = await getAllContent('case-study');

  return (
    <div className="min-h-screen bg-blue-variant">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container-1280">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-primary text-4xl md:text-5xl font-normal uppercase tracking-[-0.01em] leading-[0.875] text-black mb-6">
              Case <span className="text-primary-blue">Studies</span>
            </h1>
            <p className="font-third text-md md:text-lg text-gray-700">
              Discover how we've helped businesses achieve their goals through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <ContentList
        items={caseStudies}
        title="Our Success Stories"
        description="Real projects, real results. See how we've transformed businesses with our expertise."
      />
    </div>
  );
} 