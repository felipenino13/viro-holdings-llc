import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.viroholdingsllc.com'

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about-us`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/news-insights`, lastModified: new Date() },
    { url: `${baseUrl}/operations-compliance`, lastModified: new Date() },
    { url: `${baseUrl}/our-platforms-businesses`, lastModified: new Date() },
    { url: `${baseUrl}/partnerships`, lastModified: new Date() },
  ]
}
