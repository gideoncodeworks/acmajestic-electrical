// JSON-LD schema builders. Each returns a plain object that we stringify
// into a <script type="application/ld+json"> tag. Written for both SEO
// (Google rich results) and AEO (voice + AI assistant answers).

import { HOME_FAQ, SERVICE_AREAS, SITE, SERVICES, type Service } from './content'

const sameAs = [SITE.instagram]

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Electrician', 'GeneralContractor', 'LocalBusiness'],
    '@id': `${SITE.url}/#business`,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/acmajestic-logo.png`,
    image: `${SITE.url}/acmajestic-logo.png`,
    telephone: SITE.phoneTel,
    priceRange: '$$',
    description:
      'Licensed residential electrician and general contractor serving Cleveland and surrounding Northeast Ohio communities. Panel changeouts, rewires, outside services, lighting, light commercial electrical, and total residential rehabs.',
    foundingDate: `${SITE.foundingYear}`,
    founder: {
      '@type': 'Person',
      name: SITE.owner,
    },
    areaServed: SERVICE_AREAS.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'State', name: SITE.stateFull },
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.4993,
      longitude: -81.6944,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 41.4993,
        longitude: -81.6944,
      },
      geoRadius: 80000,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'A.C. Majestic Electrical Services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.tagline,
          url: `${SITE.url}/services/${s.slug}`,
        },
      })),
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: SITE.booking,
      serviceType: 'Online Booking',
    },
    sameAs,
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}/#business` },
    inLanguage: 'en-US',
  }
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    name: service.title,
    description: service.description,
    url: `${SITE.url}/services/${service.slug}`,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: SERVICE_AREAS.map((city) => ({ '@type': 'City', name: city })),
    offers: {
      '@type': 'Offer',
      url: `${SITE.url}/services/${service.slug}`,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function faqSchema(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  }
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.owner,
    jobTitle: 'Licensed Electrician & Residential Contractor',
    worksFor: { '@id': `${SITE.url}/#business` },
    image: `${SITE.url}/acmajestic-logo.png`,
    url: `${SITE.url}/about`,
  }
}

export function jobPostingSchema() {
  const postedOn = new Date().toISOString().split('T')[0]
  const validThrough = new Date(Date.now() + 1000 * 60 * 60 * 24 * 90)
    .toISOString()
    .split('T')[0]
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Electrician / Skilled Trade Help (1099)',
    description:
      'A.C. Majestic Electrical is hiring 1099 electricians and skilled trade help across the Cleveland, Ohio area. Residential electrical, light commercial, and rehab work. Reliable, show-up, finish-the-job people only.',
    datePosted: postedOn,
    validThrough,
    employmentType: 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
      name: SITE.legalName,
      sameAs: SITE.url,
      logo: `${SITE.url}/acmajestic-logo.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.city,
        addressRegion: SITE.state,
        addressCountry: 'US',
      },
    },
    jobLocationType: 'TELECOMMUTE',
    directApply: true,
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'US',
    },
  }
}

// Convenience for rendering in a server component.
export function schemaScript(data: unknown) {
  return {
    __html: JSON.stringify(data),
  }
}

export const HOME_FAQ_DATA = HOME_FAQ
