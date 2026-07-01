import galleryImageOne from '@/assets/projects/agenda-vital/1-AV.jpg'
import galleryImageTwo from '@/assets/projects/agenda-vital/2-AV.jpg'
import galleryImageThree from '@/assets/projects/agenda-vital/3-AV.jpg'
import galleryImageFour from '@/assets/projects/agenda-vital/4-AV.jpg'
import type { ProjectCaseStudy } from '../types'

export const agendaVitalCaseStudy = {
  title: 'Agenda Vital',
  category: 'UX UI Design',
  intro: [
    'Agenda Vital is a digital healthcare platform created to make clinical information easier to access, organize, and share across doctors, patients, and medical teams.',
    'My role focused on translating complex healthcare workflows into a clear MVP experience, from research and information architecture to user flows, interface design, and handoff. The goal was to support secure collaboration, reduce friction during consultations, and create a scalable foundation for future patient and doctor features.',
  ],
  details: [
    { label: 'Client', value: 'Web Design Pilots' },
    { label: 'Industry', value: 'Healthcare' },
    { label: 'Role', value: 'UX/UI Designer' },
    {
      label: 'Scope',
      value: 'Research · User Flows · Architecture · UI Design · Design System · Handoff',
    },
    { label: 'Duration', value: '8 Months' },
  ],
  galleryLayout: 'grid-2x2',
  gallery: [
    {
      id: 'patient-specialty',
      image: galleryImageOne,
      alt: 'Agenda Vital add specialty flow',
      variant: 'wide',
    },
    {
      id: 'patient-history',
      image: galleryImageTwo,
      alt: 'Agenda Vital patient clinical history flow',
      variant: 'wide',
    },
    {
      id: 'patient-record',
      image: galleryImageThree,
      alt: 'Agenda Vital patient record view',
      variant: 'wide',
    },
    {
      id: 'medical-note',
      image: galleryImageFour,
      alt: 'Agenda Vital medical note form',
      variant: 'wide',
    },
  ],
} satisfies ProjectCaseStudy
