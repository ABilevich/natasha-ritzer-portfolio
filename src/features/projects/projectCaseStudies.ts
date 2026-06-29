export type ProjectCaseStudyDetail = {
  label: string
  value: string
}

export type ProjectCaseStudy = {
  title: string
  category: string
  intro: string[]
  details: ProjectCaseStudyDetail[]
  gallery: Array<{
    id: string
    aspectClassName: string
  }>
}

export const delphiOneCaseStudy = {
  title: 'Delphi One',
  category: 'UX UI Design',
  intro: [
    'Delphi One is a financial intelligence platform designed to help investors and analysts structure research, evaluate perspectives, and make more informed decisions around specific assets.',
    'I led the product design process across key areas of the platform, improving usability, information architecture, user flows, and interface consistency while helping shape a clearer and more scalable product experience.',
  ],
  details: [
    { label: 'Client', value: 'Delphi One' },
    { label: 'Industry', value: 'Investment' },
    { label: 'Role', value: 'Senior UX/UI Designer' },
    {
      label: 'Scope',
      value: 'Product Strategy · User Flows · Design System · Testing · Handoff',
    },
    { label: 'Duration', value: '2025 - Present' },
  ],
  gallery: [
    {
      id: 'overview',
      aspectClassName: 'aspect-[1312/620]',
    },
    {
      id: 'flow',
      aspectClassName: 'aspect-[641/520]',
    },
    {
      id: 'interface',
      aspectClassName: 'aspect-[641/520]',
    },
  ],
} satisfies ProjectCaseStudy
