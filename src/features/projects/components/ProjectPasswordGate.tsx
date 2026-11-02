import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog } from 'radix-ui'
import { ArrowRight, Eye, EyeOff, LockKeyhole, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type ProjectPasswordGateProps = {
  title: string
  password: string
  children: ReactNode
}

// A client-side viewing gate, not server-enforced access control.
export function ProjectPasswordGate({ title, password, children }: ProjectPasswordGateProps) {
  const navigate = useNavigate()
  const [unlocked, setUnlocked] = useState(false)
  const [entry, setEntry] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (entry === password) {
      setEntry('')
      setUnlocked(true)
    } else {
      setError(true)
    }
  }

  if (unlocked) return children

  return (
    <section className="min-h-[75svh] bg-[var(--color-muted)]" aria-label={`${title} preview`}>
      <Dialog.Root open onOpenChange={(open) => { if (!open) navigate('/projects') }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-[var(--color-heading)]/25 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100svh-32px)] w-[calc(100%-32px)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[20px] border border-[var(--color-border)] bg-white p-6 text-[var(--color-heading)] shadow-xl sm:p-10">
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" className="absolute right-3 top-3" aria-label="Close and return to projects">
                <X aria-hidden="true" />
              </Button>
            </Dialog.Close>
            <div className="mb-6 flex size-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-muted)]">
              <LockKeyhole className="size-5" aria-hidden="true" />
            </div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Project preview</p>
            <Dialog.Title className="m-0 text-[clamp(28px,7vw,36px)] font-semibold leading-tight">{title}</Dialog.Title>
            <Dialog.Description className="mb-7 mt-4 text-base leading-6 text-[var(--color-text-muted)]">
              Enter the password to explore this case study.
            </Dialog.Description>
            <form onSubmit={handleSubmit}>
              <label htmlFor="project-password" className="mb-2 block text-sm font-medium">Password</label>
              <div className="relative">
                <input
                  id="project-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={entry}
                  onChange={(event) => { setEntry(event.target.value); setError(false) }}
                  aria-invalid={error}
                  aria-describedby={error ? 'project-password-error' : undefined}
                  className="h-12 w-full min-w-0 rounded-lg border border-[var(--color-border)] bg-white pl-4 pr-12 text-base outline-none focus:border-[var(--color-heading)] focus:ring-2 focus:ring-[var(--color-heading)]/10 aria-invalid:border-red-600"
                />
                <Button type="button" variant="ghost" size="icon" className="absolute right-2 top-2" aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
                </Button>
              </div>
              {error && <p id="project-password-error" role="alert" className="mb-0 mt-3 text-sm text-red-700">That password isn’t correct. Please try again.</p>}
              <Button type="submit" className="mt-6 h-12 w-full gap-3 bg-[var(--color-heading)] text-base text-white hover:bg-[var(--color-heading)]/90">
                View case study <ArrowRight aria-hidden="true" />
              </Button>
            </form>
            <Dialog.Close asChild>
              <Button variant="ghost" className="mt-3 h-11 w-full text-[var(--color-text-muted)]">Back to projects</Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}
