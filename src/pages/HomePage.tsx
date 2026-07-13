import { AboutSection } from '../features/home/components/AboutSection'
import { AlternateHeroSection } from '../features/home/components/AlternateHeroSection'
import { ParallaxGallerySection } from '../features/home/components/ParallaxGallerySection'
import { ProjectsSection } from '../features/home/components/ProjectsSection'
import { QuoteSection } from '../features/home/components/QuoteSection'
import { SkillsFlowSection } from '../features/home/components/SkillsFlowSection'

export function HomePage() {
  return (
    <div className="overflow-hidden bg-white">
      <AlternateHeroSection />
      <AboutSection />
      <QuoteSection />
      <SkillsFlowSection />
      <ParallaxGallerySection />
      <ProjectsSection />
    </div>
  )
}
