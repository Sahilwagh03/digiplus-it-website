import Link from 'next/link';
import { ContentItem } from '@/lib/mdx';
import ContentCard from '@/components/ContentCard';

interface RecentBlogPostsProps {
  blogPosts: ContentItem[];
}

export default function RecentBlogPosts({ blogPosts }: RecentBlogPostsProps) {
  return (
    <section className="py-20 px-10 bg-blue-variant">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="font-primary text-4xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.01em] leading-[0.875] text-black mb-6">
            Latest <span className="text-primary-blue">Insights</span>
          </h2>
          <p className="font-third text-md md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Stay updated with our latest thoughts and insights on technology, business, and innovation.
          </p>
        </div>

        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="font-third text-gray-500">No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((item) => (
              <ContentCard key={item.slug} item={item} />
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary-blue hover:text-blue-800 transition-colors font-third"
          >
            View all blog posts
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 