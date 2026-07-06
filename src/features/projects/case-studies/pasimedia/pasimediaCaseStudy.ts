import collectionWorldImage from '@/assets/projects/pasimedia/Image-big.jpg'
import levelXImage from '@/assets/projects/pasimedia/Image-big-1.jpg'
import playDirtyImage from '@/assets/projects/pasimedia/Image-big-2.jpg'
import type { ProjectCaseStudy } from '../types'

export const pasimediaCaseStudy = {
  title: 'Pasimedia',
  category: 'Project Management',
  intro: [
    'Pasimedia is a digital agency focused on hospitality and competitive socialising brands, creating websites and digital experiences for venues that depend on strong booking and conversion flows.',
    'During a 6-month maternity leave cover, I supported several client accounts as Project Manager, coordinating priorities, timelines, client feedback, internal tasks, QA checks, and handoff between design and development across Lane7, Five Iron, Play Dirty, and Collection World.',
  ],
  details: [
    { label: 'Client', value: 'Pasimedia' },
    { label: 'Industry', value: 'Digital Agency' },
    { label: 'Role', value: 'Project Manager & Web Designer' },
    {
      label: 'Scope',
      value: 'Client Coordination · Timelines · QA Support · Handoff · Design Support',
    },
    { label: 'Duration', value: '6 months' },
  ],
  gallery: [
    {
      id: 'overview',
      image: collectionWorldImage,
      alt: 'Pasimedia Collection World website design overview',
      variant: 'tall',
    },
    {
      id: 'flow',
      image: levelXImage,
      alt: 'Pasimedia Level X website design overview',
      variant: 'wide',
    },
    {
      id: 'interface',
      image: playDirtyImage,
      alt: 'Pasimedia Play Dirty website design overview',
      variant: 'wide',
    },
  ],
  galleryNote: {
    paragraphs: [
      'Alongside project coordination, I also supported selected web design tasks, helping the team adjust layouts, prepare visual assets, review details, and keep client-facing work moving when design support was needed.',
    ],
  },
} satisfies ProjectCaseStudy
