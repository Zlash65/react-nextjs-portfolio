import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import studyingBitmoji from '../public/assets/images/studying.png';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <Image
            className='object-cover h-[445px] w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={studyingBitmoji}
            alt=''
            objectFit='contain'
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Zarrar Shaikh
              </h2>
              <p className='mb-4 text-accent'>
                Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                I have 4 years of professional work experience working as a web developer at various startups.
                Am always eager to learn new languages, frameworks and tools - to enable myself to deliver with high fidelity.
                Currently, I am working as a remote consultant for a company based in US while also pursuing a web designing course at Humber College.
                I've been learning tools such as Photoshop and Adobe After Effects and have found a new hobby in tinkering with them.<br/>
                <br/>
                Coding is a hobby, a passion and a career now. Besides coding, I like playing games on my computer. And
                when am not doing either of those, I am usually watching an anime or some sci-fi content on the internet.
              </p>
            </div>
            <Link href="/contact">
              <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
