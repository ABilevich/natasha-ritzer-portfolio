import { ProjectCaseStudyLayout } from '@/features/projects/components/ProjectCaseStudyLayout'
import { bncCaseStudy } from '@/features/projects/case-studies/bnc/bncCaseStudy'

export function ProjectBncPage() {
  return <ProjectCaseStudyLayout project={bncCaseStudy} />
}
