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
      'Vinay Puppal, Full Stack Engineer, Senior Full Stack Engineer, React, Node.js, Python, Voice AI, Customer Research, Generative AI, Web Development, Software Engineer, Hyderabad',
    image: siteConfig.avatar,
    url,
  })
}
