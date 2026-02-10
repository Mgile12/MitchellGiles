import { Button } from "@/components/ui/button"

interface FooterProps {
  logo: React.ReactNode
  brandName: string
  tagline: string
  socialLinks?: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href?: string
    label: string
    onClick?: () => void
  }>
  contactInfo: {
    email: string
    phone: string
    location: string
  }
  copyright?: {
    text: string
    license?: string
  }
}

export function Footer({
  logo,
  brandName,
  tagline,
  socialLinks,
  mainLinks,
  contactInfo,
  copyright,
}: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-50 border-t border-slate-800/50 pb-6 pt-16 lg:pb-8 lg:pt-20">
      <div className="px-4 lg:px-8 max-w-5xl mx-auto">
        <div className="md:flex md:items-start md:justify-between">
          <div className="space-y-2">
            <a
              href="/"
              className="flex items-center gap-x-2.5 group"
              aria-label={brandName}
            >
              {logo}
              <span className="font-bold text-xl text-slate-50 group-hover:text-gold transition-colors">
                {brandName}
              </span>
            </a>
            <p className="text-sm text-slate-400 font-sans">{tagline}</p>
          </div>

          {socialLinks && socialLinks.length > 0 && (
            <ul className="flex list-none mt-6 md:mt-0 space-x-3">
              {socialLinks.map((link, i) => (
                <li key={i}>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-slate-800/50 hover:bg-gold/20 border border-slate-700/50 hover:border-gold/30 text-slate-300 hover:text-gold transition-all duration-200"
                    asChild
                  >
                    <a href={link.href} target="_blank" aria-label={link.label}>
                      {link.icon}
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-slate-800/50 mt-8 pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="text-sm text-slate-300 hover:text-gold underline-offset-4 hover:underline transition-colors font-sans"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-gold underline-offset-4 hover:underline transition-colors font-sans"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-col space-y-1 lg:items-end">
              <li className="text-sm text-slate-400 font-sans">{contactInfo.email}</li>
              <li className="text-sm text-slate-400 font-sans">{contactInfo.phone}</li>
              <li className="text-sm text-slate-400 font-sans">{contactInfo.location}</li>
            </ul>
          </div>

          {copyright && (
            <div className="mt-6 text-sm leading-6 text-slate-500 whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4] font-sans">
              <div>{copyright.text}</div>
              {copyright.license && <div>{copyright.license}</div>}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
