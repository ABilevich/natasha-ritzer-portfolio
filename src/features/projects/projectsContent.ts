import agendaVitalImage from '@/assets/figma/Agenda-Vital.jpg'
import bncImage from '@/assets/figma/BNC.jpg'
import delphiOneProjectManagementImage from '@/assets/projects/delphi-one/card-project-management.jpg'
import delphiOneImage from '@/assets/projects/delphi-one/card-ux-ui.jpg'
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
  detailPath?: string
}

export const projects: PortfolioProject[] = [
  {
    slug: 'delphi-one-ux-ui',
    title: 'Delphi One',
    category: 'UX UI Design',
    description:
      'A crypto community platform redesigned around clearer navigation, sharper content flows, and easier decision-making.',
    image: delphiOneImage,
    detailPath: '/projects/delphi-one',
  },
  {
    slug: 'bnc',
    title: 'BNC',
    category: 'UX UI Design',
    description:
      'A product configurator experience that simplifies carport customization from first selection to final quote.',
    image: bncImage,
  },
  {
    slug: 'agenda-vital',
    title: 'Agenda Vital',
    category: 'UX UI Design',
    description:
      'A wellness scheduling concept focused on calmer booking flows, service discovery, and everyday planning.',
    image: agendaVitalImage,
  },
  {
    slug: 'regalalo',
    title: 'Regalalo',
    category: 'Graphic Design',
    description:
      'A visual identity and gifting experience built around playful discovery, clear product moments, and memorable packaging.',
    image: regalaloImage,
  },
  {
    slug: 'port-salus',
    title: 'Port Salus',
    category: 'Graphic Design',
    description:
      'A coastal brand system with calm visual direction, editorial layouts, and polished campaign assets.',
    image: portSalusImage,
  },
  {
    slug: 'habit-driven',
    title: 'Habit Driven',
    category: 'Graphic Design',
    description:
      'A lifestyle brand exploration shaped around habit-building, motivational visuals, and flexible digital content.',
    image: habitDrivenImage,
  },
  {
    slug: 'delphi-one-project-management',
    title: 'Delphi One',
    category: 'Project Management',
    description:
      'A product delivery workflow coordinating design, content, and implementation across a fast-moving crypto platform.',
    image: delphiOneProjectManagementImage,
    detailPath: '/projects/delphi-one',
  },
  {
    slug: 'pasimedia',
    title: 'Pasimedia',
    category: 'Project Management',
    description:
      'A production management effort aligning creative direction, team priorities, and launch-ready deliverables.',
    image: pasimediaProjectManagementImage,
  },
  {
    slug: 'mazalosa',
    title: 'Mazalosa',
    category: 'Project Management',
    description:
      'A coordinated brand and operations project focused on timelines, stakeholder alignment, and final asset delivery.',
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
