import Link from 'next/link';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ContentItem } from '@/lib/mdx';
import ContentImage from './ContentImage';

interface ContentLayoutProps {
  content: ContentItem;
}

export default function ContentLayout({ content }: ContentLayoutProps) {
  const backHref = `/${content.type === 'case-study' ? 'case-study' : 'blog'}`;
  
  return (
    <article className="min-h-screen bg-blue-variant mt-5">
      {/* Hero Section */}
      <div className="relative h-60 overflow-hidden">
        <ContentImage
          src={content.coverImage}
          alt={content.title}
          fill
          priority
          className="object-cover"
          placeholderText={content.type === 'case-study' ? 'Case Study' : 'Blog Post'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-1280 pb-8 pt-5">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 text-sm font-medium rounded-full font-third ${
                  content.type === 'case-study' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {content.type === 'case-study' ? 'Case Study' : 'Blog Post'}
                </span>
                <time className="text-white/80 text-sm font-third">
                  {format(new Date(content.date), 'MMMM dd, yyyy')}
                </time>
              </div>
              <h1 className="font-primary text-4xl md:text-5xl font-normal uppercase tracking-[-0.01em] leading-[0.875] text-white mb-4">
                {content.title}
              </h1>
              <p className="font-third text-xl text-white/90 max-w-3xl">
                {content.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-1280 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href={backHref}
            className="inline-flex items-center text-primary-blue hover:text-blue-800 mb-8 transition-colors font-third"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {content.type === 'case-study' ? 'Case Studies' : 'Blog'}
          </Link>

          {/* MDX Content */}
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={content.content} />
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 font-third">
                  Published on {format(new Date(content.date), 'MMMM dd, yyyy')}
                </span>
              </div>
              <Link
                href={backHref}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-blue hover:text-blue-800 transition-colors font-third"
              >
                View all {content.type === 'case-study' ? 'case studies' : 'blog posts'}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 