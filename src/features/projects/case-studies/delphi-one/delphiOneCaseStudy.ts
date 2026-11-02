import createDebateImage from '@/assets/projects/delphi-one/create-debate.jpg'
import outlookImage from '@/assets/projects/delphi-one/outlook.jpg'
import onboardingImage from '@/assets/projects/delphi-one/onboarding.jpg'
import type { ProjectCaseStudy } from '../types'

export const delphiOneCaseStudy = {
  title: 'Delphi One',
  category: 'UX/UI Design',
  intro: [
    'Delphi One is a financial intelligence platform designed to help investors and analysts structure research, evaluate perspectives, and make more informed decisions about specific assets.',
    'I led the product design process across key areas of the platform, improving usability, information architecture, user flows, and interface consistency while helping shape a clearer and more scalable product experience.',
  ],
  details: [
    { label: 'Client', value: 'Delphi One' },
    { label: 'Industry', value: 'Investment' },
    { label: 'Role', value: 'Senior UX/UI Designer' },
    {
      label: 'Scope',
      value: 'Product Strategy · User Flows · Design System · Testing · Handoff',
    },
    { label: 'Duration', value: '2025–present' },
  ],
  gallery: [
    {
      id: 'overview',
      image: outlookImage,
      alt: 'Delphi One outlook profile and research view',
      variant: 'tall',
    },
    {
      id: 'flow',
      image: onboardingImage,
      alt: 'Delphi One research upload screen during onboarding',
      variant: 'wide',
    },
    {
      id: 'interface',
      image: createDebateImage,
      alt: 'Delphi One screen for creating a debate',
      variant: 'wide',
    },
  ],
  galleryNote: {
    paragraphs: [
      'Alongside the design work, I managed project coordination, aligning client needs, priorities, timelines, and handoffs between design and development to keep the website, configurator, and CRM connected as one product ecosystem.',
    ],
  },
} satisfies ProjectCaseStudy
