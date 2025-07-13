import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Button = ({ children }: Props) => {
  return (
    <button
      className="relative w-36 h-12 font-primary bg-white text-black text-xl font-semibold rounded-sm overflow-hidden z-10 group transition-colors duration-300 hover:text-white
      [clip-path:polygon(0_0,100%_0,100%_calc(100%-0.75rem),calc(100%-0.75rem)_100%,0_100%)]
      [-webkit-clip-path:polygon(0_0,100%_0,100%_calc(100%-0.75rem),calc(100%-0.75rem)_100%,0_100%)]"
    >
      <span className="relative z-20">{children}</span>

      <span className="absolute w-40 h-32 -top-8 -left-2 bg-white rotate-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></span>
      <span className="absolute w-40 h-32 -top-8 -left-2 bg-[#73abf8] rotate-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-0"></span>
      <span className="absolute w-40 h-32 -top-8 -left-2 bg-primary-blue rotate-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left z-0"></span>
    </button>
  )
}

export default Button
