import React from 'react';
import Head from 'next/head';

import '../shared/styles/globals.css';
import '../shared/styles/swiper.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BackTopBtn from '../components/BackTopBtn';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-white relative'>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Zarrar's portfolio website"
        />

        <link rel="icon" href="/assets/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/icons/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <title>Zarrar's Portfolio</title>
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
      <BackTopBtn />
    </div>
  );
}
