import structureImage from '@/assets/projects/bnc/3D structure.jpg'
import crmImage from '@/assets/projects/bnc/CMR.jpg'
import websiteImage from '@/assets/projects/bnc/Website.jpg'
import type { ProjectCaseStudy } from '../types'

export const bncCaseStudy = {
  title: 'Best National Carports',
  category: 'UX UI Design',
  intro: [
    'Best National Carports is a steel structures company offering customizable carports, garages, barns, and metal buildings for residential and commercial customers.',
    'I designed the full digital experience, including the website, product pages, UI kit, modular information architecture, 3D quoting system, 3D product modeling, and an internal CRM to support both customer customization and business operations.',
  ],
  details: [
    { label: 'Client', value: 'Web Design Pilots' },
    { label: 'Industry', value: 'Construction' },
    { label: 'Role', value: 'UX/UI Designer / 3D Modeling' },
    {
      label: 'Scope',
      value:
        '3D Modeling · Information Architecture · Website · UI Kit · Product Pages · CRM',
    },
    { label: 'Duration', value: '8 Months' },
  ],
  gallery: [
    {
      id: 'website',
      image: websiteImage,
      alt: 'Best National Carports website overview',
      variant: 'tall',
    },
    {
      id: 'structure',
      image: structureImage,
      alt: 'Best National Carports 3D structure configurator',
      variant: 'wide',
    },
    {
      id: 'crm',
      image: crmImage,
      alt: 'Best National Carports CRM order details',
      variant: 'wide',
    },
  ],
} satisfies ProjectCaseStudy
