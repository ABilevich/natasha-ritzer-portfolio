import cardImage from '@/assets/projects/port-salus/card-graphic-design.jpg'
import type { ProjectCaseStudy } from '../types'

export const portSalusCaseStudy = {
  title: 'Port Salus',
  category: 'Graphic Design',
  intro: [
    'Port Salus is a coastal brand system with calm visual direction, editorial layouts, and polished campaign assets.',
    'This placeholder case study follows the same 2x2 gallery structure as Agenda Vital while the final project copy and image set are being prepared.',
  ],
  details: [
    { label: 'Client', value: 'Port Salus' },
    { label: 'Industry', value: 'Hospitality' },
    { label: 'Role', value: 'Graphic Designer' },
    {
      label: 'Scope',
      value: 'Visual Identity · Editorial Design · Campaign Assets · Handoff',
    },
    { label: 'Duration', value: 'To be defined' },
  ],
  galleryLayout: 'grid-2x2',
  gallery: [
    {
      id: 'brand-preview',
      image: cardImage,
      alt: 'Port Salus brand preview',
      variant: 'wide',
    },
    {
      id: 'visual-system',
      image: cardImage,
      alt: 'Port Salus visual system placeholder',
      variant: 'wide',
    },
    {
      id: 'editorial-layout',
      image: cardImage,
      alt: 'Port Salus editorial layout placeholder',
      variant: 'wide',
    },
    {
      id: 'campaign-assets',
      image: cardImage,
      alt: 'Port Salus campaign assets placeholder',
      variant: 'wide',
    },
  ],
} satisfies ProjectCaseStudy
