import agendaVitalImage from '@/assets/figma/Agenda-Vital.jpg'
import bncImage from '@/assets/figma/BNC.jpg'
import delphiOneProjectManagementImage from '@/assets/figma/D1-PM.jpg'
import delphiOneImage from '@/assets/figma/D1.jpg'
import habitDrivenImage from '@/assets/figma/HD.jpg'
import mazalosaProjectManagementImage from '@/assets/figma/Mazalosa-pm.jpg'
import pasimediaProjectManagementImage from '@/assets/figma/Pasimedia-pm.jpg'
import regalaloImage from '@/assets/figma/Regalalo.jpg'
import portSalusImage from '@/assets/figma/port-salus.jpg'

export type ProjectCategoryTitle =
  | 'UX UI Design'
  | 'Graphic Design'
  | 'Project Management'

export type PortfolioProject = {
  slug: string
  title: string
  category: ProjectCategoryTitle
  description: string
  image: string
}

const placeholderDescription =
  'Project description coming soon. Replace this text with a short summary for the homepage card.'

export const projects: PortfolioProject[] = [
  {
    slug: 'delphi-one-ux-ui',
    title: 'Delphi One',
    category: 'UX UI Design',
    description: placeholderDescription,
    image: delphiOneImage,
  },
  {
    slug: 'bnc',
    title: 'BNC',
    category: 'UX UI Design',
    description: placeholderDescription,
    image: bncImage,
  },
  {
    slug: 'agenda-vital',
    title: 'Agenda Vital',
    category: 'UX UI Design',
    description: placeholderDescription,
    image: agendaVitalImage,
  },
  {
    slug: 'regalalo',
    title: 'Regalalo',
    category: 'Graphic Design',
    description: placeholderDescription,
    image: regalaloImage,
  },
  {
    slug: 'port-salus',
    title: 'Port Salus',
    category: 'Graphic Design',
    description: placeholderDescription,
    image: portSalusImage,
  },
  {
    slug: 'habit-driven',
    title: 'Habit Driven',
    category: 'Graphic Design',
    description: placeholderDescription,
    image: habitDrivenImage,
  },
  {
    slug: 'delphi-one-project-management',
    title: 'Delphi One',
    category: 'Project Management',
    description: placeholderDescription,
    image: delphiOneProjectManagementImage,
  },
  {
    slug: 'pasimedia',
    title: 'Pasimedia',
    category: 'Project Management',
    description: placeholderDescription,
    image: pasimediaProjectManagementImage,
  },
  {
    slug: 'mazalosa',
    title: 'Mazalosa',
    category: 'Project Management',
    description: placeholderDescription,
    image: mazalosaProjectManagementImage,
  },
]

export const projectCategories = [
  {
    title: 'UX UI Design',
    defaultExpanded: true,
  },
  {
    title: 'Graphic Design',
    defaultExpanded: false,
  },
  {
    title: 'Project Management',
    defaultExpanded: false,
  },
] satisfies Array<{
  title: ProjectCategoryTitle
  defaultExpanded: boolean
}>

export const projectCategoryGroups = projectCategories.map((category) => ({
  ...category,
  projects: projects.filter((project) => project.category === category.title),
}))
