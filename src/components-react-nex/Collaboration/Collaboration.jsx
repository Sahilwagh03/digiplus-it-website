import Image from 'next/image';
import React from 'react';

const CentralIcon = ({ icon, alt, children = null, width = 48, height = 48 }) => (
  <div className="flex w-60 aspect-square m-auto border border-[#b5b5b5] rounded-full">
    <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
      <div className="flex items-center justify-center w-full h-full rounded-full bg-white/80">
        {children ? (
          children
        ) : (
          <img src={icon} width={width} height={height} alt={alt} />
        )}
      </div>
    </div>
  </div>
);

const CollabIcon = ({ icon, width, height, index, alt, onClick }) => (
    <li
        onClick={onClick}
        className={`cursor-pointer absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
        style={{ transform: `rotate(${index * 45}deg)` }}
    >
        <div
            className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] rounded-xl bg-white/80"
            style={{ transform: `rotate(${-index * 45}deg)` }}
        >
            <Image className="m-auto" width={width} height={height} alt={alt} src={icon} />
        </div>
    </li>
);

const CollabIconContainer = ({ children }) => (
    <ul>
        {children}
    </ul>
);


const Collaboration = ({ children }) => (
    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-[#b5b5b5] rounded-full -translate-x-1/2 scale-75 md:scale-100">
        {children}
    </div>
);

export { Collaboration, CollabIcon, CentralIcon, CollabIconContainer };
