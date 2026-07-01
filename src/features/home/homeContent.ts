import TSP from '@/assets/figma/TSP.png'
import delphiOneImage from '@/assets/projects/delphi-one/home-parallax.png'
import AV from '@/assets/projects/agenda-vital/home-parallax.png'
import HD from '@/assets/figma/HB1.jpg'
import halfbikeImage from '@/assets/figma/halfbike-1.jpg'
import mercadoPagoImage from '@/assets/figma/mercado pago-1.jpg'
import regalaloImage from '@/assets/projects/regalalo/home-parallax.jpg'

export const aboutStats = [
  { value: 'Vienna', label: 'Based in' },
  { value: '4 years', label: 'Experience' },
  { value: '+25', label: 'Projects completed' },
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
    speed: 0.48,
    rotation: 0,
    size: 25,
    position: { left: '1%', top: '7%' } satisfies GalleryPosition,
    mobilePosition: { left: '-18%', top: '8%' } satisfies GalleryPosition,
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
    position: { right: '1%', top: '5%' } satisfies GalleryPosition,
    mobilePosition: { right: '-24%', top: '19%' } satisfies GalleryPosition,
  },
  {
    id: 'portfolio-moment',
    image: mercadoPagoImage,
    alt: '',
    speed: 2,
    rotation: 0,
    size: 25,
    position: { left: '25%', bottom: '10%' } satisfies GalleryPosition,
    mobilePosition: { left: '14%', top: '38%' } satisfies GalleryPosition,
  },
  {
    id: 'research-notes',
    image: AV,
    title: 'Agenda Vital',
    alt: '',
    href: '/projects/agenda-vital',
    speed: 0.38,
    rotation: 0,
    size: 32,
    position: { left: '35%', top: '4%' } satisfies GalleryPosition,
    mobilePosition: { left: '36%', top: '5%' } satisfies GalleryPosition,
  },
  {
    id: 'brand-system',
    image: HD,
    alt: '',
    speed: 1.5,
    rotation: 0,
    size: 25,
    position: { right: '20%', bottom: '20%' } satisfies GalleryPosition,
    mobilePosition: { right: '18%', bottom: '9%' } satisfies GalleryPosition,
  },
  {
    id: 'concept-board',
    image: TSP,
    alt: '',
    speed: 1.5,
    rotation: 0,
    size: 25,
    position: { right: '0%', bottom: '5%' } satisfies GalleryPosition,
    mobilePosition: { right: '-32%', top: '55%' } satisfies GalleryPosition,
  },
  {
    id: 'product-thinking',
    image: halfbikeImage,
    alt: '',
    speed: 0.95,
    rotation: 0,
    size: 20,
    position: { left: '5%', bottom: '5%' } satisfies GalleryPosition,
    mobilePosition: { left: '-18%', bottom: '24%' } satisfies GalleryPosition,
  },
]
