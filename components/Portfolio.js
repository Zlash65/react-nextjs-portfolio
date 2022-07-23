import React from 'react';

import Projects from './Projects';

export default function Portfolio() {
  return (
    <section id='portfolio' className='section bg-secondary min-h-[1400px] mt-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='subtitle'>
            Small subset of projects using various frameworks and tools I've worked on so far!
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};
