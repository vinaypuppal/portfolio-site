/// <reference types="vite/client" />
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import type * as React from 'react'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import { siteConfig } from '~/content/data/site-config'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'theme-color',
        content: '#1e40af',
      },
      {
        name: 'msapplication-TileColor',
        content: '#1e40af',
      },
      {
        name: 'msapplication-config',
        content: '/browserconfig.xml',
      },
      ...seo({
        title: `${siteConfig.title} | ${siteConfig.subtitle}`,
        description: siteConfig.description,
        keywords:
          'Vinay Puppal, Full Stack Engineer, Engineering Manager, React, Node.js, Python, API Security, Generative AI, Web Development, Software Engineer, Hyderabad',
        image: siteConfig.avatar,
        url: 'https://vinaypuppal.com',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'canonical', href: 'https://vinaypuppal.com' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#1e40af',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
    ],
    scripts: import.meta.env.PROD ? [] : [],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.title,
    alternateName: 'Vinay Puppal',
    description: siteConfig.description,
    url: 'https://vinaypuppal.com',
    image: siteConfig.avatar,
    email: siteConfig.email,
    jobTitle: siteConfig.subtitle,
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.company.name,
      url: siteConfig.company.url,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressCountry: siteConfig.country,
    },
    sameAs: siteConfig.socialLinks.map((link) => link.url),
    knowsAbout: [
      ...siteConfig.skills.include.map((skill) => skill.name),
      ...siteConfig.skills.focusing.map((skill) => skill.name),
    ],
  }

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
