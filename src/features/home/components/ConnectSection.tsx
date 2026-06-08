import { AtSign, Globe2, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const socialLinks = [
  { label: 'Portfolio', href: 'https://www.natasharitzer.com', Icon: Globe2 },
  { label: 'Social', href: 'https://www.linkedin.com', Icon: AtSign },
  { label: 'Email', href: 'mailto:hello@natasharitzer.com', Icon: Mail },
]

export function ConnectSection() {
  return (
    <section className="bg-black px-[clamp(20px,6.6vw,100px)] pt-12 text-white md:pt-16">
      <div className="mx-auto flex max-w-[1312px] items-center justify-between gap-8 border-b border-white py-8 max-[860px]:flex-col max-[860px]:items-start">
        <h2 className="m-0 text-3xl font-semibold leading-tight text-white md:text-[45px]">
          Let’s Connect
        </h2>
        <div className="flex flex-wrap items-center gap-6 md:gap-12 lg:gap-16">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-white transition-opacity hover:opacity-70"
            >
              <Icon className="size-7 md:size-8" aria-hidden="true" />
            </a>
          ))}
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-full border-white bg-transparent px-5 text-white hover:bg-white hover:text-black md:h-12 md:px-6"
          >
            <a href="mailto:hello@natasharitzer.com">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
