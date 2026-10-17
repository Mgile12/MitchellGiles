import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, ChevronRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import LinkWeb from '@/components/LinkWeb';
import { type BlogPost, formatDate } from './posts';

/** Article shell: breadcrumb, H1, byline, featured image, prose body, closing CTA, link web. */
export default function BlogArticle({ post, children }: { post: BlogPost; children: ReactNode }) {
  return (
    <div className="bg-navy-950 min-h-screen">
      <article className="relative">
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.45),transparent_60%)]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-10">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-ink/55 mb-8 font-sans" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/blog" className="hover:text-gold transition-colors duration-200">Blog</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-ink/80">Local SEO for tradies</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif leading-[1.12]">{post.h1}</h1>
            <p className="mt-6 text-sm text-ink/60 font-sans">
              By{' '}
              <Link href="/hardest-working-seo-expert-in-gold-coast" className="font-semibold text-ink hover:underline">
                {BUSINESS_INFO.founder}
              </Link>
              , MRG Marketing, Ormeau. Published <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>.
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={post.image.src}
            alt={post.image.alt}
            width={1200}
            height={900}
            fetchPriority="high"
            className="w-full h-auto rounded-2xl border border-ink/10 shadow-[0_24px_64px_rgba(0,0,0,0.14)]"
          />
        </div>

        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 font-sans text-lg leading-relaxed text-ink/80
            [&_p]:mt-5 [&_h2]:mt-14 [&_h2]:mb-2 [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:font-serif [&_h2]:tracking-tight [&_h2]:text-ink
            [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:font-serif [&_h3]:text-ink
            [&_strong]:text-ink [&_a]:font-semibold [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-ink/30 hover:[&_a]:decoration-ink
            [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-2 [&_li]:pl-1
            [&_figure]:mt-10 [&_figure_img]:w-full [&_figure_img]:h-auto [&_figure_img]:rounded-2xl [&_figure_img]:border [&_figure_img]:border-ink/10"
        >
          {children}
        </div>

        <aside className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="rounded-2xl bg-ink text-white p-7 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight text-white">Not sure where your profile stands?</h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              Thirty minutes. I look at your Google Business Profile, your site and the three businesses above you on the map, and tell you what I would fix first.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={BUSINESS_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-ink px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors duration-200 group"
              >
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                Book a 30-minute call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white">
                <Phone className="w-4 h-4" aria-hidden="true" /> {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </aside>
      </article>
      <LinkWeb />
    </div>
  );
}
