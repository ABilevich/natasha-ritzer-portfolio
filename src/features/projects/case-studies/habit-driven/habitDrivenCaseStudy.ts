import appShowcaseImage from '@/assets/projects/habit-driven/Image-big.jpg'
import brandShowcaseImage from '@/assets/projects/habit-driven/Image-big-1.jpg'
import landingPageImage from '@/assets/projects/habit-driven/Frame 5315.jpg'
import type { ProjectCaseStudy } from '../types'

export const habitDrivenCaseStudy = {
  title: 'Habit Driven',
  category: 'Graphic Design',
  intro: [
    'Habit Driven was a habit tracking app designed to help users build better routines through progress tracking, personalized motivation, and an AI-powered chat experience.',
    'For this project, I worked across both product and brand design, creating the visual identity, mascot, UX/UI, AI chat experience, and brand assets for different communication channels. The goal was to build a friendly and motivating product experience that could feel approachable inside the app while staying consistent across social media, email marketing, app store graphics, banners, and landing pages.',
  ],
  details: [
    { label: 'Client', value: 'Habit Driven' },
    { label: 'Industry', value: 'Wellness / Productivity' },
    { label: 'Role', value: 'Product Designer / Visual Designer' },
    {
      label: 'Scope',
      value:
        'Brand Identity · UX/UI · AI Chat · Social Media Assets · Email Marketing · Landing Pages',
    },
    { label: 'Duration', value: '1 Year' },
  ],
  gallery: [
    {
      id: 'landing-page',
      image: landingPageImage,
      alt: 'Habit Driven landing page overview',
      variant: 'tall',
    },
    {
      id: 'app-showcase',
      image: appShowcaseImage,
      alt: 'Habit Driven mobile app habit tracking showcase',
      variant: 'wide',
    },
    {
      id: 'brand-showcase',
      image: brandShowcaseImage,
      alt: 'Habit Driven brand and app presentation',
      variant: 'wide',
    },
  ],
} satisfies ProjectCaseStudy
