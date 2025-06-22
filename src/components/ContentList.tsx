import ContentCard from './ContentCard';
import { ContentItem } from '@/lib/mdx';

interface ContentListProps {
  items: ContentItem[];
  title: string;
  description?: string;
  viewAllHref?: string;
}

export default function ContentList({ items, title, description, viewAllHref }: ContentListProps) {
  return (
    <section className="py-16">
      <div className="container-1280">
        <div className="text-center mb-12">
          <h2 className="font-primary text-4xl md:text-5xl font-normal uppercase tracking-[-0.01em] leading-[0.875] text-black mb-4">
            {title}
          </h2>
          {description && (
            <p className="font-third text-md md:text-lg text-gray-700 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="font-third text-gray-500">No content available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ContentCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 