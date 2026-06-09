import { AboutSection } from '../features/home/components/AboutSection'
import { ConnectSection } from '../features/home/components/ConnectSection'
import { HeroSection } from '../features/home/components/HeroSection'
import { ParallaxGallerySection } from '../features/home/components/ParallaxGallerySection'
import { ProjectsSection } from '../features/home/components/ProjectsSection'
import { QuoteSection } from '../features/home/components/QuoteSection'
import { SkillsSection } from '../features/home/components/SkillsSection'

export function HomePage() {
  return (
    <div className="overflow-hidden bg-white">
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <SkillsSection />
      <ParallaxGallerySection />
      <ProjectsSection />
      <ConnectSection />
    </div>
  )
}
