import React from 'react';

import Image from 'next/image';

import { social } from '../shared/constants/data';
import Logo from '../public/assets/images/logo.svg';

export default function Footer() {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-accent text-base'
                >
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <Image src={Logo} alt='' />
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 Zarrar Shaikh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
