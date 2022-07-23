import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';
import Logo from '../public/assets/images/logo.svg';

export default function Header() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${bg ? 'bg-primary h-20' : 'bg-primary h-24'
        } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        <a href={`${process.env.PUBLIC_URL}`}>
          <Image src={Logo} alt='' />
        </a>

        <div className='hidden lg:block'>
          <Nav />
        </div>

        <div className='hidden lg:block'>
          <Socials />
        </div>

        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};
