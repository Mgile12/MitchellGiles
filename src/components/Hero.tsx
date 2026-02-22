import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="bg-navy-950 text-slate-50 relative overflow-hidden hero-grain"
      aria-labelledby="hero-headline"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 lg:pb-36">
        <div className="grid gap-12 lg:gap-20 md:grid-cols-2 md:items-center">
          <div className="text-left animate-fade-in-up">
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up animate-delay-50">
              <span className="h-px w-8 bg-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold font-sans">
                Revenue-Driven Strategy & Execution
              </p>
            </div>

            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-white leading-[1.1] font-serif animate-fade-in-up animate-delay-100"
            >
              Marketing Consultant Gold Coast
            </h1>

            <div className="mt-8 space-y-5 animate-fade-in-up animate-delay-150">
              <h2 className="text-base sm:text-lg text-slate-200 leading-[1.9] tracking-wide font-medium font-sans">
                Email Marketing, Copywriting, Lead Generation &amp; Paid Advertising<br />
                Brand Awareness, Strategic SEO, Business Automation, Event Management &amp; Business Consulting
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-[1.9] tracking-wide font-normal font-sans">
                Pipelines that deliver while you sleep
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 animate-fade-in-up animate-delay-250">
              <Link
                href="/book"
                className="gold-flat-btn inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-semibold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                Book Your Strategy Call
              </Link>

              <a
                href="#results"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-semibold tracking-wide border border-white/50 text-white hover:bg-white/5 hover:border-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                View Results
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto animate-fade-in-up animate-delay-200">
            <div className="relative aspect-[3/4] w-full overflow-hidden border-l-2 border-l-gold shadow-2xl shadow-black/60">
              <img
                src="https://iili.io/fynfkw7.jpg"
                alt="Mitchell Giles"
                className="w-full h-full object-cover object-top scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/30 to-transparent" />

              <div className="absolute bottom-4 right-4 left-auto max-w-[220px] bg-navy-950/70 backdrop-blur-xl rounded-lg p-4 border border-gold/25 animate-fade-in-up animate-delay-700">
                <p className="text-xs uppercase tracking-[0.15em] text-gold mb-1.5 font-sans">Proven Results</p>
                <p className="text-2xl font-bold text-white font-serif">$190,000</p>
                <p className="text-xs text-slate-300 mt-1 font-sans">Generated through email marketing in 2 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
