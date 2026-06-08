import { AboutSection } from '../features/home/components/AboutSection'
import { ConnectSection } from '../features/home/components/ConnectSection'
import { HeroSection } from '../features/home/components/HeroSection'
import { ProjectsSection } from '../features/home/components/ProjectsSection'
import { QuoteSection } from '../features/home/components/QuoteSection'
import { SkillsSection } from '../features/home/components/SkillsSection'
import { VisualBreakSection } from '../features/home/components/VisualBreakSection'

export function HomePage() {
  return (
    <div className="overflow-hidden bg-white">
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <SkillsSection />
      <VisualBreakSection />
      <ProjectsSection />
      <ConnectSection />
    </div>
  )
}
