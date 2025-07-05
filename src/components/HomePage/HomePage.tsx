import React from 'react'
import Hero from './_components/Hero'
import Partner from './_components/Partner'
import HowWeOperate from './_components/HowWeOperate'
import RecentCaseStudies from './_components/RecentCaseStudies'
import RecentBlogPosts from './_components/RecentBlogPosts'
import { getRecentContent } from '@/lib/mdx'
import TelecomExpertise from './_components/TelecomExpertise'
import DiverseClientPortfolio from './_components/DiverseClientPortfolio'

type Props = {}

const HomePage = async (props: Props) => {
  const recentBlogPosts = await getRecentContent('blog', 3);
  const recentCaseStudies = await getRecentContent('case-study', 3);

  return (
    <div className='page-wrapper bg-blue-variant partner h-auto'>
        <Hero/>
        <Partner/>
        <TelecomExpertise/>
        <HowWeOperate/>
        <DiverseClientPortfolio/>
        {/* Recent Case Studies */}
        <RecentCaseStudies caseStudies={recentCaseStudies} />
        
        {/* Recent Blog Posts */}
        <RecentBlogPosts blogPosts={recentBlogPosts} />
    </div>
  )
}

export default HomePage