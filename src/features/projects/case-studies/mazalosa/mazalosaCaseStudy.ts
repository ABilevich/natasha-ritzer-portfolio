import digitalTouchpointsImage from '@/assets/projects/mazalosa/Image-big.jpg'
import jeanFitImage from '@/assets/projects/mazalosa/Image-big-1.jpg'
import selfCheckoutImage from '@/assets/projects/mazalosa/Image-big-2.jpg'
import memberClubImage from '@/assets/projects/mazalosa/Image-big-3.jpg'
import type { ProjectCaseStudy } from '../types'

export const mazalosaCaseStudy = {
  title: 'Mazalosa',
  category: 'Project Management',
  intro: [
    'Mazalosa is the company behind fashion retail brands Portsaid and Desiderata. My work was fully focused on consumer experience, especially how digital touchpoints could improve the journey inside physical stores.',
    'I explored opportunities across the retail environment, identifying where the traditional in-store experience could converge with practical digital solutions: membership sign-up screens, self-checkout, pickup for online orders, B2C support channels, and interactive tools to help shoppers find the right fit and size for jeans.',
  ],
  details: [
    { label: 'Client', value: 'Mazalosa' },
    { label: 'Industry', value: 'Fashion' },
    { label: 'Role', value: 'CX and Project Manager' },
    {
      label: 'Scope',
      value:
        'Retail Experience · Phygital Flows · Service Design · In-store Touchpoints',
    },
    { label: 'Duration', value: '1 year' },
  ],
  galleryLayout: 'grid-2x2',
  gallery: [
    {
      id: 'digital-touchpoints',
      image: digitalTouchpointsImage,
      alt: 'Mazalosa digital retail touchpoints placeholder',
      variant: 'wide',
    },
    {
      id: 'self-checkout',
      image: selfCheckoutImage,
      alt: 'Mazalosa self-checkout concept placeholder',
      variant: 'wide',
    },
    {
      id: 'jean-fit',
      image: jeanFitImage,
      alt: 'Mazalosa interactive jeans fit tool placeholder',
      variant: 'wide',
    },
    {
      id: 'member-club',
      image: memberClubImage,
      alt: 'Mazalosa membership and support flow placeholder',
      variant: 'wide',
    },
  ],
} satisfies ProjectCaseStudy
