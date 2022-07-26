import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import standingBitmoji from '../public/assets/images/standing-bitmoji.png';

export default function Hero() {
  return (
    <section
      id='home'
      className='lg:h-[90vh] flex items-center bg-secondary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full mt-10'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Zarrar! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-center lg:text-left'>
              Web Developer dabbling in <br /> Designing.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Tech enthusiast and a curiosity struck programmer. I love writing code and automating things on computer so that I don't have to keep doing them myself.
              I work on websites and web apps, occasionally working as devops engineer as well. Recently, I have indulged into designing and animation as well.
            </p>
            <Link href="/contact">
              <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
                Work with me
              </button>
            </Link>
          </div>
          <div className='hidden lg:flex flex-1 justify-center items-center h-full'>
            <Image src={standingBitmoji} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};
