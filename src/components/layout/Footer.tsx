export function Footer() {
  const footerLinks = ['Projects', 'CV', 'Articles', 'Bookshelf']

  return (
    <footer className="bg-black px-[clamp(20px,6.6vw,100px)] pb-20 pt-[45px] text-sm font-medium text-white">
      <div className="mx-auto flex w-full max-w-[1312px] items-center justify-between gap-8 max-[720px]:flex-col max-[720px]:items-start">
        <nav className="flex items-center gap-[54px] max-[720px]:flex-wrap max-[720px]:gap-6">
          {footerLinks.map((link) => (
            <a key={link} href="/#projects" className="text-white no-underline">
              {link}
            </a>
          ))}
        </nav>
        <p className="m-0 text-white/50">2026 Natasha Ritzer.</p>
      </div>
    </footer>
  )
}
