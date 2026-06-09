import projectPlaceholder from '@/assets/figma/project-placeholder.png'

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
    image: projectPlaceholder,
  },
  {
    slug: 'bnc',
    title: 'BNC',
    category: 'UX UI Design',
    description: placeholderDescription,
    image: projectPlaceholder,
  },
  {
    slug: 'agenda-vital',
    title: 'Agenda Vital',
    category: 'UX UI Design',
    description: placeholderDescription,
    image: projectPlaceholder,
  },
  {
    slug: 'regalalo',
    title: 'Regalalo',
    category: 'Graphic Design',
    description: placeholderDescription,
    image: projectPlaceholder,
  },
  {
    slug: 'aurum',
    title: 'Aurum',
    category: 'Graphic Design',
    description: placeholderDescription,
    image: projectPlaceholder,
  },
  {
    slug: 'habit-driven',
    title: 'Habit Driven',
    category: 'Graphic Design',
    description: placeholderDescription,
    image: projectPlaceholder,
  },
  {
    slug: 'delphi-one-project-management',
    title: 'Delphi One',
    category: 'Project Management',
    description: placeholderDescription,
    image: projectPlaceholder,
  },
  {
    slug: 'pasimedia',
    title: 'Pasimedia',
    category: 'Project Management',
    description: placeholderDescription,
    image: projectPlaceholder,
  },
  {
    slug: 'mazalosa',
    title: 'Mazalosa',
    category: 'Project Management',
    description: placeholderDescription,
    image: projectPlaceholder,
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
