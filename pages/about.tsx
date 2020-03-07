import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default () => (
  <main>
    <NextSeo title="About" description="A short description goes here." />
    <h1>About</h1>
    <Link href="/">
      <a>Home</a>
    </Link>
  </main>
);
