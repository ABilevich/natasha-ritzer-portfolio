export type ProjectCaseStudyDetail = {
  label: string
  value: string
}

export type ProjectCaseStudyGalleryItem = {
  id: string
  image: string
  alt: string
  variant: 'tall' | 'wide'
}

export type ProjectCaseStudy = {
  title: string
  category: string
  intro: string[]
  details: ProjectCaseStudyDetail[]
  gallery: ProjectCaseStudyGalleryItem[]
}
