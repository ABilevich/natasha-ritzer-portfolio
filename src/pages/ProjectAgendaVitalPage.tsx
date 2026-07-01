import { ProjectCaseStudyLayout } from '@/features/projects/components/ProjectCaseStudyLayout'
import { agendaVitalCaseStudy } from '@/features/projects/case-studies/agenda-vital/agendaVitalCaseStudy'

export function ProjectAgendaVitalPage() {
  return <ProjectCaseStudyLayout project={agendaVitalCaseStudy} />
}
