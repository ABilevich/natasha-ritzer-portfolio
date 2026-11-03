import productCollection from '@/assets/projects/sense-co/product-collection.jpg'
import fiamma from '@/assets/projects/sense-co/fiamma.jpg'
import monthlyPlanner from '@/assets/projects/sense-co/monthly-planner.jpg'
import type { ProjectCaseStudy } from '../types'

export const senseCoCaseStudy: ProjectCaseStudy = {
  title: 'Sense & Co',
  category: 'Graphic Design',
  intro: [
    'Sense & Co was a side project where I created products to sell locally, developing the brand and working with producers to bring my ideas to life.',
    'My work spanned branding, photography, and industrial design, alongside managing social media and e-commerce.',
  ],
  details: [
    { label: 'Client', value: 'Sense & Co' },
    { label: 'Industry', value: 'Home & Lifestyle Products' },
    { label: 'Role', value: 'Brand & Product Designer' },
    {
      label: 'Scope',
      value: 'Branding · Photography · Industrial Design · Production Coordination · Social Media · E-commerce',
    },
    { label: 'Duration', value: '3 years' },
  ],
  galleryLayout: 'three-column',
  gallery: [
    {
      id: 'product-collection',
      image: productCollection,
      alt: 'Sense & Co candle and diffuser packaging collection',
      variant: 'wide',
    },
    {
      id: 'fiamma',
      image: fiamma,
      alt: 'Sense & Co Fiamma wine glass markers and packaging at a dinner table',
      variant: 'wide',
    },
    {
      id: 'monthly-planner',
      image: monthlyPlanner,
      alt: 'Sense & Co monthly planner on a family kitchen refrigerator',
      variant: 'wide',
    },
  ],
}
