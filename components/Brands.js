import React from 'react';

import Image from 'next/image';

import { brands } from '../shared/constants/data';

export default function Brands() {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
      <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
        {brands.map((brand, idx) => {
          return (
            <div key={idx}>
              <Image src={brand.img} alt='' />
            </div>
          );
        })}
      </div>
    </section>
  );
};
