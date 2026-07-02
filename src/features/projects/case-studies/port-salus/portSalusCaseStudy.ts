import brandGuideImage from '@/assets/projects/port-salus/Image-big-2.jpg'
import brandLockupImage from '@/assets/projects/port-salus/Image-big.jpg'
import logoConstructionImage from '@/assets/projects/port-salus/Group 1000004193.jpg'
import logoOptionsImage from '@/assets/projects/port-salus/Image-big-1.jpg'
import type { ProjectCaseStudy } from '../types'

export const portSalusCaseStudy = {
  title: 'Port Salus',
  category: 'Graphic Design',
  intro: [
    'PortSalus is a wealth management brand that needed a refined and trustworthy visual identity to support its communication across digital and corporate touchpoints.',
    "For this project, I designed the logo, visual direction, color system, typography guidelines, and usage rules that shaped the brand's look and feel. The work focused on creating a sophisticated and consistent identity, balancing financial credibility with a calm, maritime-inspired visual language.",
  ],
  details: [
    { label: 'Client', value: 'Web Design Pilots' },
    { label: 'Industry', value: 'Wealth Management' },
    { label: 'Role', value: 'Graphic Designer' },
    {
      label: 'Scope',
      value:
        'Logo Design · Visual Identity · Brand Guidelines · Color System · Typography · Usage Rules',
    },
    { label: 'Duration', value: '1Month' },
  ],
  galleryLayout: 'grid-2x2',
  gallery: [
    {
      id: 'logo-construction',
      image: logoConstructionImage,
      alt: 'Port Salus logo construction on a blue grid',
      variant: 'wide',
    },
    {
      id: 'logo-options',
      image: logoOptionsImage,
      alt: 'Port Salus logo exploration options',
      variant: 'wide',
    },
    {
      id: 'brand-lockup',
      image: brandLockupImage,
      alt: 'Port Salus wealth management brand lockup',
      variant: 'wide',
    },
    {
      id: 'brand-guidelines',
      image: brandGuideImage,
      alt: 'Port Salus brand guidelines overview',
      variant: 'wide',
    },
  ],
} satisfies ProjectCaseStudy
