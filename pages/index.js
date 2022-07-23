import React from 'react';

import Hero from '../components/Hero';
import Brands from '../components/Brands';
import About from '../components/About';
import Skills from '../components/Skills';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Brands />
      <Skills />
      <About />
    </div>
  );
}
