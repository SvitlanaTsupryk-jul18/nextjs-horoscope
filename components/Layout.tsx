import React from 'react';
import Head from 'next/head';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>My Next.js Horoscope website</title>
        <meta name="description" content="The forecast includes health, relationship and career assessments, which depend on the selected zodiac sign." />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;