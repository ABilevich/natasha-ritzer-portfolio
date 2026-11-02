import { ProjectPasswordGate } from '@/features/projects/components/ProjectPasswordGate'
import { ProjectCaseStudyLayout } from '@/features/projects/components/ProjectCaseStudyLayout'
import { modulUniversityCaseStudy } from '@/features/projects/case-studies/modul-university/modulUniversityCaseStudy'

export function ProjectModulUniversityPage() {
  return (
    <ProjectPasswordGate title="Modul University" password="Modulpreview">
      <ProjectCaseStudyLayout project={modulUniversityCaseStudy} />
    </ProjectPasswordGate>
  )
}
