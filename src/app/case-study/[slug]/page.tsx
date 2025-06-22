import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContentLayout from '@/components/ContentLayout';
import { getContentBySlug, getAllSlugs } from '@/lib/mdx';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const slugs = getAllSlugs('case-study');
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContentBySlug(slug, 'case-study');
  
  if (!content) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${content.title} - DigiPlus IT Case Study`,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      images: [content.coverImage],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const content = await getContentBySlug(slug, 'case-study');

  if (!content) {
    notFound();
  }

  return <ContentLayout content={content} />;
} 