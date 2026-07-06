import type { FormEvent } from 'react'
import contactImage from '@/assets/figma/me-connect1.jpg'
import { Button } from '@/components/ui/button'

const contactEmail = 'di.ritzer@gmail.com'

const fieldClassName =
  'h-12 w-full rounded-lg border border-[#e5e7eb] bg-white px-4 text-base leading-6 text-[#111928] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#111928] focus:ring-3 focus:ring-[#111928]/10'

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    const subject = `Contact request from ${name}`
    const body = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n')

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section
      className="bg-white px-[clamp(20px,6.6vw,100px)] pb-16 pt-[132px] md:pb-20 md:pt-[156px] lg:pb-[100px]"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto grid w-full max-w-[1312px] gap-12 lg:grid-cols-[minmax(0,598px)_minmax(360px,1fr)] lg:items-end lg:gap-[60px]">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-6 md:gap-8"
        >
          <h1
            id="contact-title"
            className="m-0 text-[clamp(2.75rem,8vw,3.75rem)] font-bold leading-[1.12] text-[#111928]"
          >
            Contact Me
          </h1>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-name"
              className="text-base leading-6 text-[#1f2a37]"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              required
              className={fieldClassName}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-email"
              className="text-base leading-6 text-[#1f2a37]"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              className={fieldClassName}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="text-base leading-6 text-[#1f2a37]"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project"
              required
              rows={4}
              className={`${fieldClassName} min-h-24 resize-y py-3`}
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            className="h-10 w-fit rounded-full border-[#4b5563] bg-transparent px-[24px] text-base font-medium text-[#4b5563] hover:bg-[#111928] hover:text-white"
          >
            Send
          </Button>
        </form>

        <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-[#f3f4f6] md:min-h-[420px] lg:h-full lg:min-h-[528px]">
          <img
            src={contactImage}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
