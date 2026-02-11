interface FooterProps {
  logo: React.ReactNode
  brandName: string
  tagline: string
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
  socialLinks?: Array<{
    href: string
    icon: React.ReactNode
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
  bottomTagline?: string
}

export function Footer({
  logo,
  brandName,
  tagline,
  mainLinks,
  contactInfo,
  socialLinks,
  copyright,
  bottomTagline,
}: FooterProps) {
  return (
    <footer className="bg-navy-950 text-slate-50 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 pb-8 sm:pt-16 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-4">
            <a
              href="/"
              className="inline-flex items-center gap-3 group"
              aria-label={brandName}
            >
              {logo}
              <span className="font-bold text-2xl text-slate-50 tracking-tight group-hover:text-gold transition-colors duration-200">
                {brandName}
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs font-sans">
              {tagline}
            </p>
          </div>

          <div className="space-y-5 md:text-right">
            <nav>
              <ul className="list-none flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
                {mainLinks.map((link, i) => (
                  <li key={i}>
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200 font-sans"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200 font-sans"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-1.5">
              <a
                href={`mailto:${contactInfo.email}`}
                className="block text-sm text-slate-400 hover:text-gold transition-colors duration-200 py-0.5 font-sans"
              >
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="block text-sm text-slate-400 hover:text-gold transition-colors duration-200 py-0.5 font-sans"
              >
                {contactInfo.phone}
              </a>
              <p className="text-sm text-slate-500 py-0.5 font-sans">
                {contactInfo.location}
              </p>
            </div>

            {socialLinks && socialLinks.length > 0 && (
              <div className="flex gap-3 md:justify-end pt-1">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-slate-400 hover:text-gold transition-colors duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-slate-500 leading-relaxed font-sans">
              <span>{copyright.text}</span>
              {copyright.license && (
                <>
                  <span className="mx-1.5 text-slate-700">|</span>
                  <span>{copyright.license}</span>
                </>
              )}
            </div>

            {bottomTagline && (
              <p className="text-xs text-slate-600 italic font-sans">
                {bottomTagline}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
