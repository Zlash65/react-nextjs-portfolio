import React from 'react';
import Image from 'next/image';

// import skill data
import { skills } from '../shared/constants/data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div
          className='grid grid-cols-8 md:grid-flow-col'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center lg:h-20 relative'
                key={index}
              >
                <Image src={skill.image} alt='' layout='fill' objectFit='contain'/>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
