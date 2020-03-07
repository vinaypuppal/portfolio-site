import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default () => (
  <main>
    <NextSeo title="Home" description="A short description goes here." />
    <h1 className="text-4xl text-indigo-500">Home!</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
  </main>
);
