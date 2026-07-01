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

export type ProjectCaseStudyGalleryLayout = 'feature-stack' | 'grid-2x2'

export type ProjectCaseStudy = {
  title: string
  category: string
  intro: string[]
  details: ProjectCaseStudyDetail[]
  galleryLayout?: ProjectCaseStudyGalleryLayout
  gallery: ProjectCaseStudyGalleryItem[]
}
