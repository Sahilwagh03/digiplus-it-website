import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface ContentItem {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  content: string;
  type: 'blog' | 'case-study';
}

export async function getContentBySlug(slug: string, type: 'blog' | 'case-study'): Promise<ContentItem | null> {
  try {
    const fullPath = path.join(contentDirectory, type, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      coverImage: data.coverImage,
      content,
      type,
    };
  } catch (error) {
    console.error(`Error reading content for ${type}/${slug}:`, error);
    return null;
  }
}

export async function getAllContent(type: 'blog' | 'case-study'): Promise<ContentItem[]> {
  const typeDirectory = path.join(contentDirectory, type);
  
  try {
    const fileNames = fs.readdirSync(typeDirectory);
    const allContent = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.mdx$/, '');
          const content = await getContentBySlug(slug, type);
          return content;
        })
    );

    return allContent
      .filter((content): content is ContentItem => content !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error(`Error reading ${type} content:`, error);
    return [];
  }
}

export async function getRecentContent(type: 'blog' | 'case-study', limit: number = 4): Promise<ContentItem[]> {
  const allContent = await getAllContent(type);
  return allContent.slice(0, limit);
}

export async function getAllSlugs(type: 'blog' | 'case-study'): Promise<string[]> {
  const typeDirectory = path.join(contentDirectory, type);
  
  try {
    const fileNames = fs.readdirSync(typeDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error(`Error reading ${type} slugs:`, error);
    return [];
  }
} 