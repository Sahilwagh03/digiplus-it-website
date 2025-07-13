import Link from 'next/link';
import { ContentItem } from '@/lib/mdx';
import ContentCard from '@/components/ContentCard';

interface RecentCaseStudiesProps {
  caseStudies: ContentItem[];
}

export default function RecentCaseStudies({ caseStudies }: RecentCaseStudiesProps) {
  return (
    <section className="py-5 px-4 lg:py-20 lg:px-10 bg-white">
      <div className="w-full">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="font-primary text-4xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.01em] leading-[0.875] text-black mb-6">
            Recent <span className="text-primary-blue">Case Studies</span>
          </h2>
          <p className="font-third text-md md:text-lg lg:text-xl text-gray-700 max-w-4xl mt-4 mx-auto leading-relaxed">
            Discover how we've helped businesses achieve their goals through innovative solutions and digital transformation.
          </p>
        </div>

        {caseStudies.length === 0 ? (
          <div className="text-center py-12">
            <p className="font-third text-gray-500">No case studies available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((item) => (
              <ContentCard key={item.slug} item={item} />
            ))}
          </div>
        )}

        <div className="text-center mt-8 lg:mt-16">
          <Link
            href="/case-study"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary-blue hover:text-blue-800 transition-colors font-third"
          >
            View all case studies
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 