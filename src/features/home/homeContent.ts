import TSP from '@/assets/figma/TSP.png'
import agendaVitalHeroImage from '@/assets/hero-section/AV-scroll.jpg'
import delphiOneHeroImage from '@/assets/hero-section/D1-scroll.png'
import habitDrivenHeroImage from '@/assets/hero-section/HD-1.jpg'
import delphiOneImage from '@/assets/projects/delphi-one/home-parallax.png'
import delphiOneProjectManagementImage from '@/assets/projects/delphi-one/card-project-management.jpg'
import AV from '@/assets/projects/agenda-vital/home-parallax.png'
import HD from '@/assets/projects/habit-driven/app-preview.jpg'
import mercadoPagoImage from '@/assets/figma/mercado pago-1.jpg'
import portSalusImage from '@/assets/projects/port-salus/home-parallax.png'
import regalaloImage from '@/assets/projects/regalalo/home-parallax.jpg'
import type { PortfolioProject } from '@/features/projects/projectsContent'

export const aboutStats = [
  { value: 'Vienna', label: 'Based in' },
  { value: '4 years', label: 'Experience' },
  { value: '+10', label: 'Projects completed' },
]

export const skills = [
  {
    title: 'UX Design',
    items: [
      'User Research',
      'Information Architecture',
      'Prototyping',
      'Design Systems',
      'Microsoft Clarity & Google Analytics',
    ],
  },
  {
    title: 'UI Design',
    items: ['Design Systems', 'Heuristics', 'Figma', 'Claude AI', 'Codex'],
  },
  {
    title: 'Graphic Design',
    items: [
      'Visual Identity',
      'Branding',
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Blender',
    ],
  },
  {
    title: 'Project Management',
    items: [
      'Project Leadership',
      'Agile & Scrum Methodologies',
      'Stakeholder Management',
      'Strategy & Analysis',
      'Jira & Notion',
    ],
  },
]

export const homepageProjectManagementShortcuts: PortfolioProject[] = [
  {
    slug: 'delphi-one-project-management',
    title: 'Delphi One',
    category: 'Project Management',
    description:
      'A product delivery workflow coordinating design, content, and implementation across a fast-moving crypto platform.',
    image: delphiOneProjectManagementImage,
    detailPath: '/projects/delphi-one',
  },
]

export const alternateHeroProjectCards = [
  {
    title: 'Agenda Vital',
    image: agendaVitalHeroImage,
    href: '/projects/pasimedia',
  },
  {
    title: 'Delphi One',
    image: delphiOneHeroImage,
    href: '/projects/delphi-one',
  },
  {
    title: 'Habit Driven',
    image: habitDrivenHeroImage,
    href: '/projects/habit-driven',
  },
]

type GalleryPosition = {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

export const parallaxGalleryItems = [
  {
    id: 'studio-process',
    image: delphiOneImage,
    title: 'Delphi One',
    alt: '',
    href: '/projects/delphi-one',
    speed: 0.95,
    rotation: 0,
    size: 25,
    position: { left: '1%', top: '7%' } satisfies GalleryPosition,
    tabletPosition: { left: '1%', top: '12%' } satisfies GalleryPosition,
    mobilePosition: { left: '-4%', top: '7%' } satisfies GalleryPosition,
  },
  {
    id: 'visual-detail',
    image: regalaloImage,
    title: 'Regalalo',
    alt: '',
    href: '/projects/regalalo',
    speed: 1.5,
    rotation: 0,
    size: 20,
    wideTabletScale: 1.42,
    wideTabletZIndex: 0,
    position: { right: '1%', top: '5%' } satisfies GalleryPosition,
    tabletPosition: { right: '2%', top: '17%' } satisfies GalleryPosition,
    mobilePosition: { right: '-3%', top: '31%' } satisfies GalleryPosition,
    compactMobilePosition: { right: '-3%', top: '27%' } satisfies GalleryPosition,
  },
  {
    id: 'portfolio-moment',
    image: mercadoPagoImage,
    alt: '',
    speed: 2,
    rotation: 0,
    size: 25,
    wideTabletScale: 1.42,
    position: { left: '25%', bottom: '10%' } satisfies GalleryPosition,
    tabletPosition: { left: '12%', top: '40%' } satisfies GalleryPosition,
    wideTabletPosition: { left: '12%', top: '43%' } satisfies GalleryPosition,
    mobilePosition: { left: '8%', top: '34%' } satisfies GalleryPosition,
    compactMobilePosition: { left: '8%', top: '30%' } satisfies GalleryPosition,
  },
  {
    id: 'research-notes',
    image: AV,
    title: 'Agenda Vital',
    alt: '',
    href: '/projects/pasimedia',
    speed: 0.95,
    rotation: 0,
    size: 32,
    position: { left: '35%', top: '4%' } satisfies GalleryPosition,
    tabletPosition: { left: '30%', top: '5%' } satisfies GalleryPosition,
    mobilePosition: { left: '32%', top: '4%' } satisfies GalleryPosition,
  },
  {
    id: 'brand-system',
    image: HD,
    alt: '',
    speed: 1.5,
    rotation: 0,
    size: 25,
    tabletScale: 1.5,
    wideTabletScale: 1.56,
    position: { right: '20%', bottom: '20%' } satisfies GalleryPosition,
    tabletPosition: { right: '20%', bottom: '21%' } satisfies GalleryPosition,
    wideTabletPosition: { right: '14%', bottom: '21%' } satisfies GalleryPosition,
    mobilePosition: { right: '18%', bottom: '5%' } satisfies GalleryPosition,
    compactMobilePosition: { right: '18%', bottom: '9%' } satisfies GalleryPosition,
    mobileZIndex: 30,
  },
  {
    id: 'concept-board',
    image: TSP,
    alt: '',
    speed: 1.5,
    rotation: 0,
    size: 25,
    tabletScale: 1.5,
    wideTabletScale: 1.42,
    position: { right: '0%', bottom: '5%' } satisfies GalleryPosition,
    tabletPosition: { right: '4%', bottom: '8%' } satisfies GalleryPosition,
    mobilePosition: { right: '-3%', top: '55%' } satisfies GalleryPosition,
    compactMobilePosition: { right: '-3%', top: '51%' } satisfies GalleryPosition,
  },
  {
    id: 'product-thinking',
    image: portSalusImage,
    alt: '',
    speed: 0.95,
    rotation: 0,
    size: 20,
    cropAspectRatio: '460 / 466',
    position: { left: '5%', bottom: '5%' } satisfies GalleryPosition,
    tabletPosition: { left: '6%', bottom: '11%' } satisfies GalleryPosition,
    wideTabletPosition: { left: '6%', bottom: '8%' } satisfies GalleryPosition,
    mobilePosition: { left: '-3%', bottom: '23%' } satisfies GalleryPosition,
    compactMobilePosition: { left: '-3%', bottom: '27%' } satisfies GalleryPosition,
  },
]
