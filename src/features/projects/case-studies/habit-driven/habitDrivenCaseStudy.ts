import appImage from '@/assets/figma/HB1.jpg'
import brandImage from '@/assets/figma/HD.jpg'
import type { ProjectCaseStudy } from '../types'

export const habitDrivenCaseStudy = {
  title: 'Habit Driven',
  category: 'Graphic Design',
  intro: [
    'Habit Driven is a lifestyle brand exploration shaped around habit-building, motivational visuals, and flexible digital content.',
    'This placeholder case study follows the same 2x2 gallery structure as Agenda Vital while the final project copy and image set are being prepared.',
  ],
  details: [
    { label: 'Client', value: 'Habit Driven' },
    { label: 'Industry', value: 'Lifestyle' },
    { label: 'Role', value: 'Graphic Designer' },
    {
      label: 'Scope',
      value: 'Visual Identity · Digital Content · Brand Direction · Handoff',
    },
    { label: 'Duration', value: 'To be defined' },
  ],
  galleryLayout: 'grid-2x2',
  gallery: [
    {
      id: 'brand-preview',
      image: brandImage,
      alt: 'Habit Driven brand preview',
      variant: 'wide',
    },
    {
      id: 'app-preview',
      image: appImage,
      alt: 'Habit Driven app preview',
      variant: 'wide',
    },
    {
      id: 'visual-system',
      image: brandImage,
      alt: 'Habit Driven visual system placeholder',
      variant: 'wide',
    },
    {
      id: 'digital-content',
      image: appImage,
      alt: 'Habit Driven digital content placeholder',
      variant: 'wide',
    },
  ],
} satisfies ProjectCaseStudy
