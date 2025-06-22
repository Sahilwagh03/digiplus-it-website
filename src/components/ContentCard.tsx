'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import { ContentItem } from '@/lib/mdx';
import ContentImage from './ContentImage';

interface ContentCardProps {
  item: ContentItem;
  className?: string;
}

export default function ContentCard({ item, className = '' }: ContentCardProps) {
  const href = `/${item.type === 'case-study' ? 'case-study' : 'blog'}/${item.slug}`;
  
  return (
    <Link href={href} className={`group block ${className}`}>
      <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <ContentImage
            src={item.coverImage}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            placeholderText={item.type === 'case-study' ? 'Case Study' : 'Blog Post'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full font-third ${
              item.type === 'case-study' 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              {item.type === 'case-study' ? 'Case Study' : 'Blog'}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-3">
            <time className="font-third text-sm text-gray-500">
              {format(new Date(item.date), 'MMM dd, yyyy')}
            </time>
          </div>
          
          <h3 className="font-primary text-xl font-normal text-gray-900 mb-3 group-hover:text-primary-blue transition-colors flex-1">
            {item.title}
          </h3>
          
          <p className="font-third text-gray-600 mb-4 line-clamp-3 flex-1">
            {item.description}
          </p>
          
          <div className="mt-auto flex items-center text-primary-blue font-third font-medium text-sm group-hover:underline">
            {item.type === 'case-study' ? 'Read case study' : 'Read article'}
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
} 