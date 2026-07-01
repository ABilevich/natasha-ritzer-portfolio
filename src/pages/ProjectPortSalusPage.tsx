import { ProjectCaseStudyLayout } from '@/features/projects/components/ProjectCaseStudyLayout'
import { portSalusCaseStudy } from '@/features/projects/case-studies/port-salus/portSalusCaseStudy'

export function ProjectPortSalusPage() {
  return <ProjectCaseStudyLayout project={portSalusCaseStudy} />
}
