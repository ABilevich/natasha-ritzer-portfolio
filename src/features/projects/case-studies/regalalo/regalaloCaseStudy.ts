import galleryImageThree from '@/assets/projects/regalalo/Image-big-1.jpg'
import galleryImageTwo from '@/assets/projects/regalalo/Image-big-2.jpg'
import galleryImageFour from '@/assets/projects/regalalo/Image-big-3.jpg'
import galleryImageOne from '@/assets/projects/regalalo/Image-big.jpg'
import type { ProjectCaseStudy } from '../types'

export const regalaloCaseStudy = {
  title: 'Regalalo',
  category: 'Graphic Design',
  intro: [
    'Regalalo is a visual identity and gifting experience built around playful discovery, clear product moments, and memorable packaging.',
    'This placeholder case study follows the same 2x2 gallery structure as Agenda Vital while the final project copy and image set are being prepared.',
  ],
  details: [
    { label: 'Client', value: 'Regalalo' },
    { label: 'Industry', value: 'Gifting' },
    { label: 'Role', value: 'Graphic Designer' },
    {
      label: 'Scope',
      value: 'Visual Identity · Branding · Packaging · Digital Assets · Handoff',
    },
    { label: 'Duration', value: 'To be defined' },
  ],
  galleryLayout: 'grid-2x2',
  gallery: [
    {
      id: 'brand-preview',
      image: galleryImageOne,
      alt: 'Regalalo brand preview',
      variant: 'wide',
    },
    {
      id: 'visual-system',
      image: galleryImageTwo,
      alt: 'Regalalo kiosk and apparel preview',
      variant: 'wide',
    },
    {
      id: 'packaging',
      image: galleryImageThree,
      alt: 'Regalalo social media and product preview',
      variant: 'wide',
    },
    {
      id: 'digital-assets',
      image: galleryImageFour,
      alt: 'Regalalo digital assets preview',
      variant: 'wide',
    },
  ],
} satisfies ProjectCaseStudy
