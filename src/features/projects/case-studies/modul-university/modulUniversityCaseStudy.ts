import galleryImageOne from '@/assets/projects/modul-university/campus-signage.jpg'
import galleryImageTwo from '@/assets/projects/modul-university/sticker-sheets.jpg'
import galleryImageThree from '@/assets/projects/modul-university/products-and-apparel.jpg'
import type { ProjectCaseStudy } from '../types'

export const modulUniversityCaseStudy = {
  title: 'Modul University',
  category: 'Graphic Design',
  intro: [
    'Modul University is a private university in Vienna. Across multiple collaborations, I developed visual materials for its events, merchandise, and online shop, translating its established visual identity into a variety of print and digital formats.',
    'My work included event graphics, product compositions for the e-shop, flag artwork, stickers, and other promotional materials. Each piece was designed to suit its format and context while maintaining a consistent visual language across university touchpoints.',
  ],
  details: [
    { label: 'Client', value: 'Modul University' },
    { label: 'Industry', value: 'Education' },
    { label: 'Role', value: 'Graphic Designer' },
    {
      label: 'Scope',
      value: 'Event Graphics · E-shop Product Visuals · Promotional Materials',
    },
    { label: 'Engagement', value: 'Multiple collaborations' },
  ],
  galleryLayout: 'feature-stack-natural',
  gallery: [
    {
      id: 'brand-preview',
      image: galleryImageOne,
      alt: 'Modul University flags and campus signage',
      variant: 'wide',
    },
    {
      id: 'visual-system',
      image: galleryImageTwo,
      alt: 'Modul University illustrated sticker sheets',
      variant: 'wide',
    },
    {
      id: 'packaging',
      image: galleryImageThree,
      alt: 'Modul University coffee packaging, glassware, and red T-shirt composition',
      variant: 'wide',
    },
  ],
} satisfies ProjectCaseStudy
