import React from 'react'
import Hero from './_components/Hero'
import Partner from './_components/Partner'
import HowWeOperate from './_components/HowWeOperate'
import RecentCaseStudies from './_components/RecentCaseStudies'
import RecentBlogPosts from './_components/RecentBlogPosts'
import { getRecentContent } from '@/lib/mdx'
import DiverseClientPortfolio from './_components/DiverseClientPortfolio'
import OurWorkingModels from './_components/OurWorkingModel'
import TelecomExpertise from './_components/TelecomExpertise'



type Props = {}

const HomePage = async (props: Props) => {
  const recentBlogPosts = await getRecentContent('blog', 3);
  const recentCaseStudies = await getRecentContent('case-study', 3);

  return (
    <div className='page-wrapper bg-blue-variant partner h-auto'>
        <Hero/>
        <Partner/>
        <TelecomExpertise/>
        <DiverseClientPortfolio/>
        <HowWeOperate/>
        <OurWorkingModels/>
        <RecentCaseStudies caseStudies={recentCaseStudies} />
        <RecentBlogPosts blogPosts={recentBlogPosts} />
    </div>
  )
}

export default HomePage