import { Button } from '@/components/ui/button'
import behanceIcon from '@/assets/behance-icon.svg'
import dribbbleIcon from '@/assets/dribbble-icon.svg'
import linkedinIcon from '@/assets/linkedin-icon.svg'

const contactMailto =
  'mailto:di.ritzer@gmail.com?subject=Natasha%20Ritzer%20contact%20request&body=Hi%20Natasha%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20about...'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/natasha-ritzer-ux-ui/',
    icon: linkedinIcon,
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com/Natiritzer27',
    icon: dribbbleIcon,
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/natasha-ritzer-ux-ui',
    icon: behanceIcon,
  },
]

export function ConnectSection() {
  return (
    <section className="bg-black px-[clamp(20px,6.6vw,100px)] pt-12 text-white md:pt-16">
      <div className="mx-auto flex max-w-[1312px] items-center justify-between gap-8 border-b border-white py-8 max-[860px]:flex-col max-[860px]:items-start">
        <h2 className="m-0 text-3xl font-semibold leading-tight text-white md:text-[45px]">
          Let’s Connect
        </h2>
        <div className="flex flex-wrap items-center gap-6 md:gap-12 lg:gap-16">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <img
                src={icon}
                alt=""
                className="size-8"
                aria-hidden="true"
              />
            </a>
          ))}
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-full border-white bg-transparent px-5 text-white hover:bg-white hover:text-black md:h-12 md:px-6"
          >
            <a href={contactMailto}>Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
