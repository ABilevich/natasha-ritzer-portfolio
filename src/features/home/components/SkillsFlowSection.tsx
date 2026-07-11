import { useState } from 'react'
import figmaIcon from '@/assets/tools/alex-figma.png'
import { SectionTitle } from './SectionTitle'
import './SkillsFlowSection.css'

const tools = [
  {
    label: 'Figma',
    description: 'Interface design, prototypes, and systems',
    icon: figmaIcon,
  },
  {
    label: 'Adobe Illustrator',
    description: 'Vector graphics and visual identity work',
    shortLabel: 'Ai',
  },
  {
    label: 'Adobe Photoshop',
    description: 'Image editing and visual production',
    shortLabel: 'Ps',
  },
  {
    label: 'Blender',
    description: '3D explorations and product visuals',
    shortLabel: 'B',
  },
  {
    label: 'Notion',
    description: 'Documentation, planning, and project notes',
    shortLabel: 'N',
  },
  {
    label: 'Jira',
    description: 'Delivery planning and product workflows',
    shortLabel: 'J',
  },
  {
    label: 'Codex',
    description: 'AI-assisted implementation and iteration',
    shortLabel: 'C',
  },
  {
    label: 'Claude AI',
    description: 'Research synthesis and writing support',
    shortLabel: 'Cl',
  },
  {
    label: 'Microsoft Clarity',
    description: 'Behavior analytics and usability signals',
    shortLabel: 'Mc',
  },
  {
    label: 'Google Analytics',
    description: 'Traffic, conversion, and product insights',
    shortLabel: 'GA',
  },
]

const featuredProcessTools = tools.slice(0, 4)

const processSteps = [
  {
    label: 'Research',
    title: 'Research & Validation',
    description:
      'I use qualitative feedback, usability signals, and analytics to understand users, identify friction, and sharpen product direction.',
    items: [
      ['User Interviews', 'Gather needs, motivations, and product context'],
      ['Competitive Analysis', 'Map patterns, gaps, and market expectations'],
      ['Microsoft Clarity', 'Read behavior signals and session patterns'],
      ['Google Analytics', 'Track traffic, conversion, and usage insights'],
    ],
  },
  {
    label: 'Strategy',
    title: 'Product & UX Strategy',
    description:
      'I frame product problems, map flows, and shape decisions around user needs, business goals, and system constraints.',
    items: [
      ['Product Design', 'Connect user needs with product outcomes'],
      ['UX Strategy', 'Define direction, priorities, and experience goals'],
      ['Information Architecture', 'Structure content, navigation, and logic'],
      ['User Flows', 'Map key paths across tasks and touchpoints'],
      ['Systems Thinking', 'Keep decisions connected across the product'],
    ],
  },
  {
    label: 'Design',
    title: 'Design Execution & Systems',
    description:
      'I move from early structure to polished interfaces, reusable systems, and consistent visual languages across products, websites, and brand assets.',
    items: [
      ['Wireframing', 'Define structure, content, and user flow'],
      ['Prototyping', 'Build interactive flows to test and iterate'],
      ['Interaction Design', 'Craft intuitive interactions and micro-patterns'],
      ['Responsive Design', 'Design seamlessly across breakpoints'],
      ['Design Systems', 'Create reusable components and guidelines'],
      ['Visual Design', 'Shape polished interface and brand expression'],
      ['Branding', 'Connect identity decisions to digital experiences'],
      ['Graphic Design', 'Create visual assets that support the system'],
    ],
  },
  {
    label: 'Validate',
    title: 'Validation & Design QA',
    description:
      'I test, review, and refine experiences so decisions are grounded in usability, accessibility, and real product signals.',
    items: [
      ['Usability Testing', 'Evaluate flows with users and task scenarios'],
      ['Heuristic Evaluation', 'Review clarity, consistency, and usability'],
      ['Accessibility', 'Design inclusive experiences for all users'],
      ['Design QA', 'Check implementation quality before launch'],
      ['Microsoft Clarity', 'Validate behavior patterns after release'],
      ['Google Analytics', 'Measure product and traffic performance'],
    ],
  },
  {
    label: 'Deliver',
    title: 'Collaboration & Delivery',
    description:
      'I keep design work aligned with stakeholders, developers, and project goals from discovery through handoff and launch.',
    items: [
      ['Stakeholder Management', 'Align decisions across business and product teams'],
      ['Project Leadership', 'Coordinate scope, timing, and next steps'],
      ['Agile & Scrum', 'Work inside iterative delivery rhythms'],
      ['Developer Handoff', 'Translate design details into build-ready specs'],
      ['Documentation', 'Capture decisions, systems, and implementation notes'],
      ['Jira & Notion', 'Organize delivery, tasks, and shared context'],
    ],
  },
]

export function SkillsFlowSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(2)
  const [openAccordionStepIndex, setOpenAccordionStepIndex] = useState<
    number | null
  >(2)
  const activeStep = processSteps[activeStepIndex]

  const renderProcessContent = (
    step: (typeof processSteps)[number],
    titleId?: string,
  ) => (
    <>
      <div>
        <h3 id={titleId}>{step.title}</h3>
      </div>
      <p>{step.description}</p>
      <ul className="skills-flow-section__process-chips">
        {step.items.map(([item]) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul
        className="skills-flow-section__process-tools"
        aria-label="Featured design tools"
      >
        {featuredProcessTools.map((tool) => (
          <li key={tool.label} aria-label={tool.label} tabIndex={0}>
            <span className="skills-flow-section__process-tool-label">
              {tool.label}
            </span>
            <span
              className="skills-flow-section__process-tool-icon"
              aria-hidden="true"
            >
              {'icon' in tool ? <img src={tool.icon} alt="" /> : tool.shortLabel}
            </span>
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <section
      id="skills-profile"
      className="skills-flow-section relative overflow-hidden bg-white px-[clamp(20px,6.6vw,100px)] py-16 md:py-24 lg:py-28"
      aria-labelledby="skills-flow-title"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1312px] flex-col gap-10 md:gap-14 lg:gap-[72px]">
        <section
          className="skills-flow-section__selected"
          aria-labelledby="skills-flow-title"
        >
          <SectionTitle title="Design Process" titleId="skills-flow-title" />
          <div className="skills-flow-section__process">
            <div
              className="skills-flow-section__process-list"
              role="tablist"
              aria-label="Design process steps"
            >
              {processSteps.map((step, index) => {
                const isActive = index === activeStepIndex

                return (
                  <button
                    key={step.label}
                    type="button"
                    className="skills-flow-section__process-tab"
                    data-active={isActive ? true : undefined}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="skills-process-panel"
                    id={`skills-process-tab-${index}`}
                    onClick={() => setActiveStepIndex(index)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{step.label}</strong>
                    <span aria-hidden="true" />
                  </button>
                )
              })}
            </div>

            <article
              className="skills-flow-section__process-detail"
              role="tabpanel"
              id="skills-process-panel"
              aria-labelledby={`skills-process-tab-${activeStepIndex}`}
            >
              {renderProcessContent(activeStep)}
            </article>
          </div>

          <div
            className="skills-flow-section__process-accordion"
            aria-label="Design process steps"
          >
            {processSteps.map((step, index) => {
              const isActive = index === openAccordionStepIndex
              const buttonId = `skills-process-mobile-trigger-${index}`
              const panelId = `skills-process-mobile-panel-${index}`
              const titleId = `skills-process-mobile-title-${index}`

              return (
                <div
                  className="skills-flow-section__process-accordion-item"
                  data-active={isActive ? true : undefined}
                  key={step.label}
                >
                  <button
                    aria-controls={panelId}
                    aria-expanded={isActive}
                    className="skills-flow-section__process-accordion-trigger"
                    id={buttonId}
                    onClick={() =>
                      setOpenAccordionStepIndex(isActive ? null : index)
                    }
                    type="button"
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{step.label}</strong>
                    <span aria-hidden="true" />
                  </button>
                  {isActive ? (
                    <article
                      aria-labelledby={titleId}
                      className="skills-flow-section__process-accordion-panel"
                      id={panelId}
                    >
                      {renderProcessContent(step, titleId)}
                    </article>
                  ) : null}
                </div>
              )
            })}
          </div>
        </section>

      </div>
    </section>
  )
}
