import { ProjectCaseStudyLayout } from '@/features/projects/components/ProjectCaseStudyLayout'
import { delphiOneCaseStudy } from '@/features/projects/case-studies/delphi-one/delphiOneCaseStudy'

export function ProjectDelphiOnePage() {
  return <ProjectCaseStudyLayout project={delphiOneCaseStudy} />
}
