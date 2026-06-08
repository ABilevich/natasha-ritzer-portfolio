import { AboutSection } from '../features/home/components/AboutSection'
import { HeroSection } from '../features/home/components/HeroSection'
import { ProjectsSection } from '../features/home/components/ProjectsSection'
import { SkillsSection } from '../features/home/components/SkillsSection'

export function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  )
}
