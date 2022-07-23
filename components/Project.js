import React from 'react';

import Image from 'next/image';

export default function Project({ item }) {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8 h-[300px] w-[375px] relative'>
        {item.href ? (
          <a target='_blank' rel="noopener noreferrer" href={item.href}>
            <Image className='rounded-2xl' src={item.image} alt='' height={300} width={375} />
          </a>
        ) : (
          <Image className='rounded-2xl' src={item.image} alt='' height={300} width={375} />
        )}
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>{item.description}</p>
    </div>
  );
};
