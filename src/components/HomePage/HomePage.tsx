import React from 'react'
import Hero from './_components/Hero'
import Partner from './_components/Partner'
import HowWeOperate from './_components/HowWeOperate'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='page-wrapper bg-blue-variant partner h-auto'>
        <Hero/>
        <Partner/>
        <HowWeOperate/>
    </div>
  )
}

export default HomePage