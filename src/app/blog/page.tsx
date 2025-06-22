import { Metadata } from 'next';
import ContentList from '@/components/ContentList';
import { getAllContent } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog - DigiPlus IT',
  description: 'Explore our latest insights, tips, and industry trends in our blog.',
};

export default async function BlogPage() {
  const blogPosts = await getAllContent('blog');

  return (
    <div className="min-h-screen bg-blue-variant">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container-1280">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-primary text-4xl md:text-5xl font-normal uppercase tracking-[-0.01em] leading-[0.875] text-black mb-6">
              Our <span className="text-primary-blue">Blog</span>
            </h1>
            <p className="font-third text-md md:text-lg text-gray-700">
              Discover insights, tips, and industry trends from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <ContentList
        items={blogPosts}
        title="Latest Blog Posts"
        description="Stay updated with our latest thoughts and insights on technology, business, and innovation."
      />
    </div>
  );
} 