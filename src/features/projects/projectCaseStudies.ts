import createDebateImage from '@/assets/figma/Delphi One/create-debate.jpg'
import outlookImage from '@/assets/figma/Delphi One/Outlook.jpg'
import onboardingImage from '@/assets/figma/Delphi One/onboarding.jpg'

export type ProjectCaseStudyDetail = {
  label: string
  value: string
}

export type ProjectCaseStudyGalleryItem = {
  id: string
  image: string
  alt: string
  variant: 'tall' | 'wide'
}

export type ProjectCaseStudy = {
  title: string
  category: string
  intro: string[]
  details: ProjectCaseStudyDetail[]
  gallery: ProjectCaseStudyGalleryItem[]
}

export const delphiOneCaseStudy = {
  title: 'Delphi One',
  category: 'UX UI Design',
  intro: [
    'Delphi One is a financial intelligence platform designed to help investors and analysts structure research, evaluate perspectives, and make more informed decisions around specific assets.',
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
    { label: 'Duration', value: '2025 - Present' },
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
      alt: 'Delphi One onboarding upload research screen',
      variant: 'wide',
    },
    {
      id: 'interface',
      image: createDebateImage,
      alt: 'Delphi One create a debate screen',
      variant: 'wide',
    },
  ],
} satisfies ProjectCaseStudy
