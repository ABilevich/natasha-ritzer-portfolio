import { ProjectCaseStudyLayout } from '@/features/projects/components/ProjectCaseStudyLayout'
import { habitDrivenCaseStudy } from '@/features/projects/case-studies/habit-driven/habitDrivenCaseStudy'

export function ProjectHabitDrivenPage() {
  return <ProjectCaseStudyLayout project={habitDrivenCaseStudy} />
}
