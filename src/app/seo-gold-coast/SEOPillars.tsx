import { Settings, FileText, MapPin, PenTool, Link2 } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const pillars = [
  {
    number: '01',
    icon: Settings,
    title: 'Technical SEO',
    description: 'The foundation everything else sits on. If search engines cannot crawl and index your site properly, nothing else matters.',
    points: [
      'Site speed and Core Web Vitals optimisation',
      'Mobile responsiveness and usability',
      'Crawl error identification and resolution',
      'Schema markup and structured data implementation',
      'XML sitemap and robots.txt configuration',
    ],
  },
  {
    number: '02',
    icon: FileText,
    title: 'On-Page Optimisation',
    description: 'Making every page on your site work harder. Content, structure, and intent alignment that tells Google exactly what you offer.',
    points: [
      'Keyword research and intent mapping',
      'Title tags, meta descriptions, and header structure',
      'Internal linking architecture',
      'Content quality and relevance scoring',
      'Image optimisation and alt text strategy',
    ],
  },
  {
    number: '03',
    icon: MapPin,
    title: 'Local SEO',
    description: 'Dominating the Map Pack and local search results where Gold Coast customers are actively looking for services.',
    points: [
      'Google Business Profile optimisation',
      'Local citation building and NAP consistency',
      'Review generation and reputation management',
      'Suburb-level keyword targeting',
      'Local link acquisition from Gold Coast sources',
    ],
  },
  {
    number: '04',
    icon: PenTool,
    title: 'Content Strategy',
    description: 'Creating content that earns rankings and converts visitors. Not blog posts for the sake of blog posts -- strategic content with purpose.',
    points: [
      'Topic cluster and pillar page architecture',
      'Search intent-driven content creation',
      'Service page and landing page optimisation',
      'FAQ and informational content development',
      'Content gap analysis against competitors',
    ],
  },
  {
    number: '05',
    icon: Link2,
    title: 'Link Building',
    description: 'Earning quality backlinks that build domain authority. No spam, no shortcuts -- just legitimate digital PR and outreach.',
    points: [
      'Industry-relevant link acquisition',
      'Local Gold Coast directory submissions',
      'Digital PR and content-based outreach',
      'Competitor backlink analysis',
      'Toxic link identification and disavow management',
    ],
  },
];

export default function SEOPillars() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            The Five Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            What SEO Actually Involves
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              SEO is not one thing. It is five interconnected disciplines that work together to build sustainable organic visibility.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-8 sm:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block" />

          <div className="space-y-6 sm:space-y-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <AnimateOnScroll key={index} stagger={index + 1} className="group relative">
                  <div className="md:pl-24 relative">
                    <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gold/5 border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-300">
                        <span className="text-gold font-bold text-lg sm:text-xl font-serif">{pillar.number}</span>
                      </div>
                    </div>

                    <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-5">
                        <div className="md:hidden shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                          <span className="text-gold font-bold text-sm font-serif">{pillar.number}</span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                              <Icon className="w-4.5 h-4.5 text-gold" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                              {pillar.title}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4 font-sans">
                            {pillar.description}
                          </p>
                          <ul className="space-y-2">
                            {pillar.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-300 font-sans">
                                <span className="text-gold mt-1.5 text-[8px]">&#9670;</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/[0.03] to-transparent rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
