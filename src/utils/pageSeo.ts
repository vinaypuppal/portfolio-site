import { siteConfig } from '~/content/data/site-config'
import { seo } from './seo'

export const generatePageSeo = (pageTitle: string, pageDescription?: string, path = '') => {
  const fullTitle =
    pageTitle === siteConfig.title
      ? `${siteConfig.title} | ${siteConfig.subtitle}`
      : `${pageTitle} | ${siteConfig.title}`

  const description = pageDescription || siteConfig.description
  const url = `https://vinaypuppal.com${path}`

  return seo({
    title: fullTitle,
    description,
    keywords:
      'Vinay Puppal, Full Stack Engineer, Engineering Manager, React, Node.js, Python, API Security, Generative AI, Web Development, Software Engineer, Hyderabad',
    image: siteConfig.avatar,
    url,
  })
}
