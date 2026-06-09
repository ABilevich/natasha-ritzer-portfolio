import aidImage from '@/assets/figma/+aid-1.jpg'
import delphiOneImage from '@/assets/figma/D1-1.jpg'
import frameImage from '@/assets/figma/Frame 1319.jpg'
import hbImage from '@/assets/figma/HB1.jpg'
import halfbikeImage from '@/assets/figma/halfbike-1.jpg'
import mazalosaImage from '@/assets/figma/Mazalosa.jpg'
import mercadoPagoImage from '@/assets/figma/mercado pago-1.jpg'
import regalaloImage from '@/assets/figma/regalalo-1.jpg'

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
    alt: '',
    aspectRatio: '1724 / 1724',
    speed: 0.48,
    rotation: 0,
    size: 30,
    position: { left: '4%', top: '7%' } satisfies GalleryPosition,
    mobilePosition: { left: '-18%', top: '8%' } satisfies GalleryPosition,
  },
  {
    id: 'visual-detail',
    image: regalaloImage,
    alt: '',
    aspectRatio: '600 / 600',
    speed: 0.72,
    rotation: 0,
    size: 30,
    position: { right: '4%', top: '13%' } satisfies GalleryPosition,
    mobilePosition: { right: '-24%', top: '19%' } satisfies GalleryPosition,
  },
  {
    id: 'product-thinking',
    image: halfbikeImage,
    alt: '',
    aspectRatio: '460 / 466',
    speed: 0.95,
    rotation: 0,
    size: 30,
    position: { left: '10%', bottom: '18%' } satisfies GalleryPosition,
    mobilePosition: { left: '-18%', bottom: '24%' } satisfies GalleryPosition,
  },
  {
    id: 'interface-study',
    image: mazalosaImage,
    alt: '',
    aspectRatio: '427 / 465',
    speed: 0.58,
    rotation: 0,
    size: 30,
    position: { right: '9%', bottom: '18%' } satisfies GalleryPosition,
    mobilePosition: { right: '-22%', bottom: '18%' } satisfies GalleryPosition,
  },
  {
    id: 'portfolio-moment',
    image: mercadoPagoImage,
    alt: '',
    aspectRatio: '427 / 465',
    speed: 1.12,
    rotation: 0,
    size: 30,
    position: { left: '31%', top: '34%' } satisfies GalleryPosition,
    mobilePosition: { left: '14%', top: '38%' } satisfies GalleryPosition,
  },
  {
    id: 'research-notes',
    image: frameImage,
    alt: '',
    aspectRatio: '427 / 465',
    speed: 0.38,
    rotation: 0,
    size: 30,
    position: { left: '41%', top: '4%' } satisfies GalleryPosition,
    mobilePosition: { left: '36%', top: '5%' } satisfies GalleryPosition,
  },
  {
    id: 'brand-system',
    image: hbImage,
    alt: '',
    aspectRatio: '427 / 465',
    speed: 0.84,
    rotation: 0,
    size: 30,
    position: { right: '32%', bottom: '12%' } satisfies GalleryPosition,
    mobilePosition: { right: '18%', bottom: '9%' } satisfies GalleryPosition,
  },
  {
    id: 'concept-board',
    image: aidImage,
    alt: '',
    aspectRatio: '427 / 465',
    speed: 1.24,
    rotation: 0,
    size: 30,
    position: { right: '-1%', top: '47%' } satisfies GalleryPosition,
    mobilePosition: { right: '-32%', top: '55%' } satisfies GalleryPosition,
  },
]
