export function Footer() {
  const footerLinks = ['Projects', 'CV', 'Articles', 'Bookshelf']

  return (
    <footer className="bg-black px-[clamp(20px,6.6vw,100px)] pb-14 pt-9 text-sm font-medium text-white md:pb-20 md:pt-[45px]">
      <div className="mx-auto flex w-full max-w-[1312px] items-center justify-between gap-8 max-[860px]:flex-col max-[860px]:items-start">
        <nav className="flex items-center gap-8 max-[860px]:flex-wrap max-[860px]:gap-6 lg:gap-[54px]">
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
