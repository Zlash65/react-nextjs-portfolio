import React from 'react';

import { social } from '../shared/constants/data';

export default function Socials() {
  return (
    <ul className='flex space-x-6 '>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center text-accent'
            key={index}
          >
            <a
              href={item.href}
              target='_blank'
              className='text-base'
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
