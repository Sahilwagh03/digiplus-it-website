import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContentLayout from '@/components/ContentLayout';
import { getContentBySlug, getAllSlugs } from '@/lib/mdx';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const slugs = getAllSlugs('blog');
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContentBySlug(slug, 'blog');
  
  if (!content) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${content.title} - DigiPlus IT Blog`,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      images: [content.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const content = await getContentBySlug(slug, 'blog');

  if (!content) {
    notFound();
  }

  return <ContentLayout content={content} />;
} 