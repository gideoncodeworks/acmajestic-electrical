import type { MetadataRoute } from 'next'
import { SITE, SERVICES } from '../lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const staticRoutes = ['', '/services', '/about', '/careers', '/contact', '/faq'].map(
    (path) => ({
      url: `${SITE.url}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : path === '/services' ? 0.9 : 0.7,
    }),
  )
  const serviceRoutes = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  return [...staticRoutes, ...serviceRoutes]
}
