import { ProjectCaseStudyLayout } from '@/features/projects/components/ProjectCaseStudyLayout'
import { pasimediaCaseStudy } from '@/features/projects/case-studies/pasimedia/pasimediaCaseStudy'

export function ProjectPasimediaPage() {
  return <ProjectCaseStudyLayout project={pasimediaCaseStudy} />
}
