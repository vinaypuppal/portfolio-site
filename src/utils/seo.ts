export const seo = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
}: {
  title: string
  description?: string
  image?: string
  keywords?: string
  url?: string
  type?: string
}) => {
  const tags = [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'author', content: 'Vinay Puppal' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },

    // Open Graph
    { property: 'og:type', content: type },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:site_name', content: 'Vinay Puppal - Portfolio' },
    ...(url ? [{ property: 'og:url', content: url }] : []),

    // Twitter Card
    { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: '@VPuppal' },
    { name: 'twitter:site', content: '@VPuppal' },

    // Image tags
    ...(image
      ? [
          { name: 'twitter:image', content: image },
          { name: 'twitter:image:alt', content: title },
          { property: 'og:image', content: image },
          { property: 'og:image:alt', content: title },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
        ]
      : []),
  ]

  return tags.filter((tag) => tag.content !== undefined || tag.title !== undefined)
}
