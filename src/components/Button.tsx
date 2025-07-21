import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  bgColor?: string;
  textColor?: string;
  hoverColors?: [string, string, string]; // exactly 3 layers
  rounded?: string;
  clipPath?: string;
  className?: string;
  allowHoverAnimation?: boolean;
};

const Button = ({
  children,
  width = 'w-36',
  height = 'h-12',
  fontSize = 'text-xl',
  fontWeight = 'font-semibold',
  bgColor = 'bg-white',
  textColor = 'text-black',
  hoverColors = ['#ffffff', '#73abf8', 'var(--tw-color-primary-blue)'],
  rounded = 'rounded-sm',
  clipPath = '[clip-path:polygon(0_0,100%_0,100%_calc(100%-0.75rem),calc(100%-0.75rem)_100%,0_100%)]',
  className = '',
  allowHoverAnimation = true,
}: ButtonProps) => {
  return (
    <button
      className={`
        relative ${width} ${height} font-primary ${bgColor} ${textColor} ${fontSize} ${fontWeight} ${rounded}
        overflow-hidden z-10 group transition-colors duration-300 cursor-pointer ${clipPath}
        ${allowHoverAnimation ? 'hover:text-white' : ''} ${className}
      `}
    >
      <span className="relative z-20">{children}</span>

      {allowHoverAnimation && (
        <>
          <span
            className={`absolute w-40 h-32 -top-8 -left-2 rotate-12 scale-x-0 group-hover:scale-x-100
            transition-transform duration-500 origin-left z-0`}
            style={{ backgroundColor: hoverColors[0] }}
          />
          <span
            className={`absolute w-40 h-32 -top-8 -left-2 rotate-12 scale-x-0 group-hover:scale-x-100
            transition-transform duration-700 origin-left z-0`}
            style={{ backgroundColor: hoverColors[1] }}
          />
          <span
            className={`absolute w-40 h-32 -top-8 -left-2 rotate-12 scale-x-0 group-hover:scale-x-100
            transition-transform duration-1000 origin-left z-0`}
            style={{ backgroundColor: hoverColors[2] }}
          />
        </>
      )}
    </button>
  );
};

export default Button;
