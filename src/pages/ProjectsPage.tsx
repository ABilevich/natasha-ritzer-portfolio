import { ProjectsFeaturedSection } from '@/features/projects/components/ProjectsFeaturedSection'
import { ProjectsGallerySection } from '@/features/projects/components/ProjectsGallerySection'

export function ProjectsPage() {
  return (
    <div className="overflow-hidden bg-white text-[#111928]">
      <ProjectsFeaturedSection />
      <ProjectsGallerySection />
    </div>
  )
}
