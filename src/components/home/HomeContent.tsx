import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';
import { HomeCalculator, HomeMotion, HomeNav, LeadForm, MobileBar, PlayVideo } from './HomeIslands';
import { FAQS } from './faqs';
import './home.css';

// The homepage from Mitchell's design export (MRG Homepage v2, 3 Nov 2026). This file renders on the server, so
// every word and link is in the HTML. Only the form, calculator, video players, menu and motion run in the browser.

const logo = (file: string, alt: string) => ({ src: `/images/home/mrg-marketing-client-${file}-logo.webp`, alt });
const LOGOS = [
  logo('polish-hub', 'Polish Hub'),
  logo('mjlt-services', 'MJLT Services'),
  logo('ceramic-coating-gold-coast', 'Ceramic Coating Gold Coast'),
  logo('washroom-essentials', 'Washroom Essentials'),
  logo('office-cleaning-solutions', 'Office Cleaning Solutions'),
  logo('fleur-weddings-events', 'Fleur Weddings & Events'),
  logo('greenstone-karate', 'Greenstone Karate'),
  logo('elite-football-academy', 'Elite Football Academy'),
];
const logoLoop = LOGOS.concat(LOGOS.map((l) => ({ ...l, alt: '' })));

const A = ({ href, children }: { href: string; children: ReactNode }) => <Link href={href}>{children}</Link>;

const STEP_ROWS: [string, string, string, ReactNode, string][] = [
  ['01', 'WEEK 1', 'Benchmark', <>I <A href="/local-seo-audit-gold-coast/">scan your main search</A> across your area and study the three businesses above you.</>, 'You get the dated "before" grid.'],
  ['02', 'WEEKS 1–2', 'Fix the profile and website basics', <><A href="/google-business-profile-gold-coast/">Categories that rank, a full services list</A>, every feature filled, photos, booking link. Name, address and phone matched on every page, a map, business schema (the sexy stuff).</>, 'Where the first jump usually shows.'],
  ['03', 'WEEKS 2–3', 'Citations', <>Identical details on <A href="/local-citations-gold-coast/">the directories Google</A> and <A href="/ai-search-geo-gold-coast/">the AI models</A> trust. Old numbers cleaned up. The first batch is done by week 3, then 10 more go out every week after that.</>, 'A few verification emails and SMS codes for you.'],
  ['04', 'WEEKS 3–7', 'Service pages', <><A href="/services/">A page for every service</A> you want calls for, so Google sees you as the expert in your trade, not just another listing.</>, 'I write it, you check the facts.'],
  ['05', 'WEEKS 8–12', 'Area pages', <><A href="/areas/">A page for every suburb you serve</A>, so Google trusts you in the streets where the calls are, not just your own.</>, 'Your "areas we serve" built out properly.'],
  ['06', 'WEEKS 1–12', 'Keep it moving', <>A post every day. Geotagged photos uploaded weekly. <A href="/review-management-gold-coast/">Reviews answered daily</A>. A <A href="/google-maps-ranking-gold-coast/">grid scan</A> every month so you can see the progress.</>, 'Running the whole time, alongside every step above.'],
  ['07', 'WEEK 12 →', 'Review and raise the ceiling', "We sit down with the before and after grids, then keep pushing so the businesses below you can't catch up.", 'Week 12: before and after grids, side by side.'],
];
const steps = STEP_ROWS.map(([n, when, title, body, foot], i) => ({ n, when, title, body, foot, t: (i / 7 + 0.01).toFixed(3) }));

type Trade = { t: string; q: string; href?: string };
const trades: { name: string; href?: string; items: Trade[] }[] = [
  { name: 'Trades and home services', href: '/seo-for-tradies-gold-coast/', items: [
    { t: 'Building and renovation', q: 'home renovations near me', href: '/seo-for-builders/' },
    { t: 'Roofing', q: 'roof leak repair Coomera' },
    { t: 'Gas and hot water', q: 'hot water repair Beenleigh', href: '/seo-for-plumbers/' },
    { t: 'Paving and fencing', q: 'fencing contractor Pimpama' },
    { t: 'Locksmiths', q: 'locksmith near me' },
  ] },
  { name: 'Outdoors and cleaning', items: [
    { t: 'Tree care', q: 'arborist near me' },
    { t: 'Landscaping and garden', q: 'landscaper Upper Coomera' },
    { t: 'Cleaning businesses', q: 'office cleaning Gold Coast' },
    { t: 'Pressure washing', q: 'pressure washing Ormeau' },
    { t: 'Car and marine detailing', q: 'marine detailer Gold Coast', href: '/case-studies/polish-hub-marine-detailing-google-maps/' },
  ] },
  { name: 'Weddings and hospitality', items: [
    { t: 'Bridal, everything', q: 'wedding hair and makeup Gold Coast' },
    { t: 'Catering and private dining', q: 'private chef Gold Coast' },
  ] },
  { name: 'Health, fitness and family', items: [
    { t: 'Health and wellness', q: 'physio near me' },
    { t: 'Hair salons', q: 'hair salon Coomera' },
    { t: 'Gyms and fitness studios', q: 'pilates studio Helensvale' },
    { t: 'Karate and martial arts', q: 'karate classes Ormeau' },
    { t: 'Childcare and education', q: 'childcare Pimpama' },
  ] },
  { name: 'Property and professional', items: [
    { t: 'Real estate agencies', q: 'real estate agent Ormeau' },
    { t: 'Accountants and advisers', q: 'accountant near me' },
  ] },
];
const ALL_T = trades.flatMap((g) => g.items);
const HALF = Math.ceil(ALL_T.length / 2);
const tradeLoopA = ALL_T.slice(0, HALF).concat(ALL_T.slice(0, HALF));
const tradeLoopB = ALL_T.slice(HALF).concat(ALL_T.slice(HALF));

const SEARCHES = ['plumber Coomera', 'physio near me', 'electrician Ormeau', 'roof leak repair Coomera', 'pilates studio Helensvale', 'landscaper Upper Coomera', 'accountant near me', 'hot water repair Beenleigh', 'wedding makeup Gold Coast', 'locksmith near me'];
const searchLoop = SEARCHES.concat(SEARCHES);

// Everything the old homepage linked to is in here or in the page above: nothing lost its homepage link.
const siteLinks = [
  { h: 'SERVICES', links: [
    { t: 'Google Business Profile optimisation', href: '/google-business-profile-gold-coast/' },
    { t: 'Local SEO', href: '/best-local-seo-expert-in-gold-coast/' },
    { t: 'AI Search (GEO)', href: '/ai-search-geo-gold-coast/' },
    { t: 'All services', href: '/services/' },
    { t: 'Current offers', href: '/services/#offers' },
  ] },
  { h: 'THE PARTS OF THE JOB', links: [
    { t: 'SEO for tradies', href: '/seo-for-tradies-gold-coast/' },
    { t: 'Google Maps ranking', href: '/google-maps-ranking-gold-coast/' },
    { t: 'Review management', href: '/review-management-gold-coast/' },
    { t: 'Local citations', href: '/local-citations-gold-coast/' },
    { t: 'Local SEO audit', href: '/local-seo-audit-gold-coast/' },
    { t: 'Email marketing', href: '/email-marketing-gold-coast/' },
  ] },
  { h: 'BY TRADE', links: [
    { t: 'SEO for plumbers', href: '/seo-for-plumbers/' },
    { t: 'SEO for electricians', href: '/seo-for-electricians/' },
    { t: 'SEO for builders', href: '/seo-for-builders/' },
  ] },
  { h: 'MORE', links: [
    { t: 'Best local SEO expert in Gold Coast', href: '/best-local-seo-expert-in-gold-coast/' },
    { t: 'Best marketing agency in Gold Coast', href: '/best-marketing-agency-in-gold-coast/' },
    { t: 'Hardest working SEO expert in Gold Coast', href: '/hardest-working-seo-expert-in-gold-coast/' },
    { t: 'Best SEO agency for tradies in Australia', href: '/best-seo-agency-for-tradies-in-australia/' },
    { t: 'Case studies', href: '/case-studies/' },
    { t: 'Blog', href: '/blog/' },
    { t: 'Local SEO for tradies in 2026', href: '/blog/local-seo-gold-coast-tradies-2026/' },
    { t: 'Contact', href: '/contact/' },
  ] },
];

const AREA_PAGES: Record<string, string> = { Ormeau: 'ormeau', Pimpama: 'pimpama', Coomera: 'coomera', 'Upper Coomera': 'upper-coomera', Yatala: 'yatala', Stapylton: 'stapylton', Beenleigh: 'beenleigh' };
const areas = ['Ormeau', 'Ormeau Hills', 'Pimpama', 'Coomera', 'Upper Coomera', 'Yatala', 'Stapylton', 'Jacobs Well', 'Alberton', 'Willow Vale', 'Gilberton', 'Norwell', 'Woongoolba', 'Beenleigh', 'Eagleby', 'Bahrs Scrub', 'Waterford', 'Oxenford', 'Helensvale', 'Hope Island', 'Gold Coast', 'Brisbane'].map((t) => ({ t, href: AREA_PAGES[t] ? `/areas/${AREA_PAGES[t]}/` : '/areas/' }));

const GOOD = 'oklch(0.66 0.17 150)', MID = 'oklch(0.8 0.15 85)', BAD = 'oklch(0.62 0.2 28)';
const cells: { b: string; a: string; bg: string; fg: string; ag: string; t: string }[] = [];
for (let y = 0; y < 7; y++) for (let x = 0; x < 7; x++) {
  const d = Math.hypot(x - 3, y - 3), j = ((x * 7 + y * 3) % 5) / 10;
  const b = d < 0.5 ? 3 : d < 1.5 ? 6 + Math.round(d * 2 + j * 4) : d < 2.9 ? 12 + Math.round(d * 2 + j * 6) : 20;
  const a = d < 2.1 ? 1 : d < 3.2 ? 2 : 3;
  cells.push({ b: b >= 20 ? '20+' : String(b), a: String(a), bg: b <= 3 ? GOOD : b <= 10 ? MID : BAD, fg: b <= 10 && b > 3 ? '#111110' : '#fff', ag: GOOD, t: (0.06 + (d / 4.3) * 0.7 + j * 0.08).toFixed(3) });
}

const spotBars = Array.from({ length: 10 }, (_, i) => ({ bg: '#2F6BFF', d: (0.3 + i * 0.06).toFixed(2) }));

export default function HomeContent() {
  return (
    <div className="mrg-home">
      <a href="#main" className="skip-link">Skip to content</a>
      <HomeMotion />
<HomeNav />
<main id="main" tabIndex={-1} style={{outline:"none"}}>

<section className="mrg-rise" style={{"padding":"clamp(28px,6vw,64px) 20px clamp(40px,6vw,64px)","background":"#f3f1ec","overflow":"hidden"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","display":"flex","flexWrap":"wrap","gap":"36px","alignItems":"flex-start"}}>
    <div style={{"containerType":"inline-size","flex":"1 1 400px","minWidth":"0","maxWidth":"620px","display":"flex","flexDirection":"column","gap":"18px"}}>
      <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}>
        <h1 data-rv="left" style={{"margin":"0","display":"flex","alignItems":"center","gap":"10px","fontFamily":"var(--font-jb),monospace","fontSize":"13px","letterSpacing":".14em","fontWeight":"600","textTransform":"uppercase","lineHeight":"1.3"}}><span style={{"width":"8px","height":"8px","borderRadius":"50%","background":"#2F6BFF","flex":"none","margin":"0 2px 0 4px","animation":"mrgPulse 2s infinite"}}></span>Internet Marketing Service Ormeau</h1>
        <p style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(30px,8.6cqi,68px)","lineHeight":".95","letterSpacing":"-.03em","display":"flex","flexDirection":"column","whiteSpace":"nowrap"}}>
          <span data-rv="up" data-d=".05">Get into the top 3</span>
          <span data-rv="up" data-d=".15">on Google Maps.</span>
          <span data-rv="up" data-d=".25" style={{"color":"#2F6BFF"}}>Get more calls.</span>
        </p>
        <h2 data-rv="up" data-d=".3" style={{"margin":"0","fontSize":"14px","fontWeight":"600","lineHeight":"1.4","color":"#55534d","maxWidth":"520px","textWrap":"pretty"}}>Marketing Agency &amp; Marketing Consultant for Local SEO, Google Business Profile Optimisation &amp; AI Search (GEO) in Ormeau</h2>
      </div>
      <p data-rv="up" data-d=".35" style={{"margin":"0","fontSize":"clamp(16px,2vw,19px)","lineHeight":"1.45","color":"#3b3a36","maxWidth":"560px","textWrap":"pretty"}}>I fix your Google Business Profile, build the pages behind it, and keep it moving every week until you&apos;re the business people call. One person, no account manager, no lock-in.</p>
      <div className="only-narrow">
        <div data-rv="scale" data-d=".4" style={{"position":"relative","aspectRatio":"16/9","overflow":"hidden","background":"#111110","border":"3px solid #111110","boxShadow":"8px 8px 0 #2F6BFF","margin":"4px 0 6px"}}>
          <PlayVideo embed="https://www.youtube-nocookie.com/embed/uC-0gdj_ii4?autoplay=1&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" title="Meet Mitchell, MRG Marketing" label="Play founder video">
              <img src="https://i.ytimg.com/vi/uC-0gdj_ii4/maxresdefault.jpg" alt="Mitchell Giles, MRG Marketing" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} fetchPriority="high" decoding="async" />
              <span style={{"position":"absolute","left":"50%","top":"50%","transform":"translate(-50%,-50%)","width":"68px","height":"68px","borderRadius":"50%","background":"#2F6BFF","display":"flex","alignItems":"center","justifyContent":"center","animation":"mrgPulse 2s infinite"}}><span style={{"width":"0","height":"0","borderLeft":"20px solid #fff","borderTop":"12px solid transparent","borderBottom":"12px solid transparent","marginLeft":"6px"}}></span></span>
              <span style={{"position":"absolute","left":"10px","bottom":"10px","background":"#111110","color":"#fff","fontFamily":"var(--font-jb),monospace","fontSize":"11px","letterSpacing":".08em","padding":"4px 8px"}}>MEET MITCHELL · 1:40</span>
            </PlayVideo>
        </div>
      </div>
      <div data-hero-form="" data-rv="up" data-d=".45" style={{"background":"#fff","border":"3px solid #111110","boxShadow":"8px 8px 0 #111110","padding":"clamp(16px,4vw,20px)"}}><LeadForm variant="home-hero" />
      </div>
      <div data-rv="up" data-d=".55" style={{"display":"flex","flexWrap":"wrap","gap":"8px 18px","alignItems":"center","fontSize":"14px","color":"#3b3a36"}}>
        <span><strong data-num="" data-target="266" data-suf=" calls" style={{"color":"#111110","fontVariantNumeric":"tabular-nums"}}>266 calls</strong> in 5 months from one profile</span>
        <span style={{"color":"#2F6BFF","letterSpacing":"1px"}}>★★★★★</span><span><strong style={{"color":"#111110"}}>5.0</strong> on Google</span>
      </div>
    </div>
    <div className="only-wide">
      <div style={{"flex":"1 1 360px","minWidth":"0","display":"flex","flexDirection":"column","gap":"12px","paddingTop":"clamp(0px,4vw,40px)"}}>
        <div data-rv="scale" data-d=".3" style={{"position":"relative","aspectRatio":"16/9","overflow":"hidden","background":"#111110","border":"3px solid #111110","boxShadow":"10px 10px 0 #2F6BFF"}}>
          <PlayVideo embed="https://www.youtube-nocookie.com/embed/uC-0gdj_ii4?autoplay=1&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" title="Meet Mitchell, MRG Marketing" label="Play founder video">
              <img src="https://i.ytimg.com/vi/uC-0gdj_ii4/maxresdefault.jpg" alt="Mitchell Giles, MRG Marketing" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} fetchPriority="high" decoding="async" />
              <span style={{"position":"absolute","left":"50%","top":"50%","transform":"translate(-50%,-50%)","width":"80px","height":"80px","borderRadius":"50%","background":"#2F6BFF","display":"flex","alignItems":"center","justifyContent":"center","animation":"mrgPulse 2s infinite"}}><span style={{"width":"0","height":"0","borderLeft":"24px solid #fff","borderTop":"14px solid transparent","borderBottom":"14px solid transparent","marginLeft":"6px"}}></span></span>
            </PlayVideo>
        </div>
        
      </div>
    </div>
  </div>
</section>

<div style={{"background":"#111110","color":"#fff","overflow":"hidden","padding":"18px 0","borderTop":"1px solid #111110"}}>
  <div aria-hidden="true" data-marquee="" style={{"display":"flex","width":"max-content","animation":"mrgMarquee 40s linear infinite"}}>
    {searchLoop.map((q, qIdx) => (<Fragment key={qIdx}>
      <span style={{"display":"flex","alignItems":"center","gap":"22px","paddingRight":"22px","whiteSpace":"nowrap","fontStretch":"125%","fontWeight":"800","fontSize":"clamp(20px,3vw,30px)","letterSpacing":"-.01em"}}><span style={{"color":"#6f98ff","fontFamily":"var(--font-jb),monospace","fontSize":"14px","fontWeight":"600"}}>⌕</span>{q}<span style={{"width":"8px","height":"8px","background":"#2F6BFF","transform":"rotate(45deg)"}}></span></span>
    </Fragment>))}
  </div>
</div>

<section style={{"padding":"clamp(56px,8vw,88px) 20px","background":"#fff"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","display":"flex","flexDirection":"column","gap":"36px"}}>
    <div data-rv="up" style={{"containerType":"inline-size","display":"flex","flexWrap":"wrap","alignItems":"flex-end","gap":"8px 28px","paddingBottom":"32px","borderBottom":"3px solid #111110"}}>
      <div data-num="" data-target="2.4" data-fmt="d1" data-pre="$" data-suf="M+" style={{"fontStretch":"125%","fontWeight":"900","fontSize":"clamp(72px,19cqi,220px)","lineHeight":".8","letterSpacing":"-.05em","fontVariantNumeric":"tabular-nums","color":"#2F6BFF"}}>$2.4M+</div>
      <div style={{"fontSize":"clamp(18px,2.2vw,24px)","fontWeight":"700","lineHeight":"1.2","maxWidth":"340px","paddingBottom":"6px","textWrap":"pretty"}}>generated for clients since MRG was established in 2024.</div>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,260px),1fr))","gap":"0"}}>
      <div data-rv="up" style={{"containerType":"inline-size","padding":"8px 24px 8px 0","borderLeft":"0","display":"flex","flexDirection":"column","gap":"10px"}}>
        <div data-num="" data-target="266" style={{"fontStretch":"125%","fontWeight":"900","fontSize":"clamp(64px,30cqi,120px)","lineHeight":".85","letterSpacing":"-.04em","fontVariantNumeric":"tabular-nums","color":"#111110"}}>266</div>
        <div style={{"fontSize":"17px","color":"#3b3a36","maxWidth":"260px"}}>calls from one client&apos;s Google profile in five months.</div>
      </div>
      <div data-rv="up" data-d=".12" style={{"containerType":"inline-size","padding":"8px 24px","borderLeft":"1px solid #d9d6cd","display":"flex","flexDirection":"column","gap":"10px"}}>
        <div style={{"fontStretch":"125%","fontWeight":"900","fontSize":"clamp(64px,30cqi,120px)","lineHeight":".85","letterSpacing":"-.04em","fontVariantNumeric":"tabular-nums","color":"#2F6BFF","whiteSpace":"nowrap"}}><span data-num="" data-from="30" data-target="2">2</span><span style={{"fontSize":".4em","letterSpacing":"0"}}> days</span></div>
        <div style={{"fontSize":"17px","color":"#3b3a36","maxWidth":"260px"}}>from 7th to 1st on Google Maps for a Gold Coast detailer.</div>
      </div>
      <div data-rv="up" data-d=".24" style={{"containerType":"inline-size","padding":"8px 24px","borderLeft":"1px solid #d9d6cd","display":"flex","flexDirection":"column","gap":"10px"}}>
        <div data-num="" data-target="208" style={{"fontStretch":"125%","fontWeight":"900","fontSize":"clamp(64px,30cqi,120px)","lineHeight":".85","letterSpacing":"-.04em","fontVariantNumeric":"tabular-nums","color":"#111110"}}>208</div>
        <div style={{"fontSize":"17px","color":"#3b3a36","maxWidth":"260px"}}>calls in three months for two local plumbers.</div>
      </div>
    </div>
    <div style={{"display":"flex","flexDirection":"column","gap":"16px"}}>
      <div style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".14em","color":"#55534d"}}>LOCAL BUSINESSES I&apos;VE PUT ON THE MAP</div>
      <div style={{"overflow":"hidden","margin":"0 -20px","WebkitMaskImage":"linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)","maskImage":"linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)"}}>
        <div data-marquee="" style={{"display":"flex","gap":"40px","paddingRight":"40px","width":"max-content","alignItems":"center","animation":"mrgMarquee 34s linear infinite"}}>
          {logoLoop.map((logo, logoIdx) => (<Fragment key={logoIdx}>
            <div style={{"width":"130px","height":"64px","flex":"none","display":"flex","alignItems":"center","justifyContent":"center"}}><img src={logo.src} alt={logo.alt} style={{"maxWidth":"100%","maxHeight":"100%","objectFit":"contain","display":"block"}} loading="lazy" decoding="async" /></div>
          </Fragment>))}
        </div>
      </div>
      
    </div>
  </div>
</section>

<section style={{"background":"#111110","color":"#fff"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","padding":"clamp(64px,10vw,112px) 20px 0","display":"flex","flexDirection":"column","gap":"22px"}}>
    
    <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(32px,6.4vw,64px)","lineHeight":".95","letterSpacing":"-.03em","textWrap":"balance","maxWidth":"980px"}}>Google doesn&apos;t rank you once. It ranks you <span style={{"color":"#6f98ff"}}>street by street.</span></h2>
    <p data-rv="up" data-d=".1" style={{"margin":"0","fontSize":"18px","color":"#d4d1c8","maxWidth":"680px","textWrap":"pretty"}}>Every search is <Link href="/google-maps-ranking-gold-coast/" style={{"color":"#6f98ff"}}>ranked from where the customer is standing</Link>. Most profiles are half-built, so you show up in your own street and disappear three streets away, where most of the calls are. Scroll to watch 12 weeks of work.</p>
  </div>
  <div data-scrub="sticky" style={{"position":"relative","height":"280vh"}}>
    <div style={{"position":"sticky","top":"60px","height":"calc(100vh - 60px)","display":"flex","alignItems":"center","padding":"16px 20px","overflow":"hidden"}}>
      <div style={{"maxWidth":"1240px","width":"100%","margin":"0 auto","display":"flex","flexWrap":"wrap","gap":"clamp(20px,5vw,64px)","alignItems":"center","justifyContent":"center"}}>
        <div style={{"flex":"1 1 300px","minWidth":"0","maxWidth":"440px","display":"flex","flexDirection":"column","gap":"clamp(12px,2.4vh,24px)"}}>
          <div style={{"display":"flex","alignItems":"baseline","gap":"14px","flexWrap":"wrap"}}><span data-pnum="" data-min="0" data-max="12" data-pre="Week " style={{"fontStretch":"125%","fontWeight":"900","fontSize":"clamp(40px,7vw,80px)","lineHeight":".9","letterSpacing":"-.03em","fontVariantNumeric":"tabular-nums"}}>Week 0</span><span style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".1em","color":"#b8b5ac"}}>&quot;BLOCKED DRAINS&quot;</span></div>
          <div style={{"height":"6px","background":"#2a2a28","position":"relative"}}><div style={{"position":"absolute","inset":"0","background":"#2F6BFF","transformOrigin":"0 50%","transform":"scaleX(var(--p,0))"}}></div></div>
          <div style={{"display":"grid","gridTemplateColumns":"repeat(2,minmax(0,1fr))","gap":"16px"}}>
            <div><div data-pnum="" data-min="6" data-max="92" data-suf="%" style={{"fontStretch":"125%","fontWeight":"900","fontSize":"clamp(30px,4.4vw,48px)","lineHeight":"1","color":"oklch(0.74 0.17 150)","fontVariantNumeric":"tabular-nums"}}>6%</div><div style={{"fontSize":"14px","color":"#b8b5ac"}}>of streets where you&apos;re top 3</div></div>
            <div><div data-pnum="" data-min="17" data-max="2" data-pre="#" style={{"fontStretch":"125%","fontWeight":"900","fontSize":"clamp(30px,4.4vw,48px)","lineHeight":"1","fontVariantNumeric":"tabular-nums"}}>#17</div><div style={{"fontSize":"14px","color":"#b8b5ac"}}>average map position</div></div>
          </div>
          <div style={{"display":"flex","flexWrap":"wrap","gap":"12px 18px","fontSize":"13px","color":"#d4d1c8"}}><span style={{"display":"flex","alignItems":"center","gap":"6px"}}><span style={{"width":"12px","height":"12px","borderRadius":"50%","background":"oklch(0.66 0.17 150)"}}></span>Top 3</span><span style={{"display":"flex","alignItems":"center","gap":"6px"}}><span style={{"width":"12px","height":"12px","borderRadius":"50%","background":"oklch(0.8 0.15 85)"}}></span>4–10</span><span style={{"display":"flex","alignItems":"center","gap":"6px"}}><span style={{"width":"12px","height":"12px","borderRadius":"50%","background":"oklch(0.62 0.2 28)"}}></span>11+</span></div>
          <div style={{"fontSize":"12px","color":"#8a877e"}}>Illustration modelled on a real client&apos;s 7x7 Local Falcon grid.</div>
        </div>
        <div style={{"flex":"0 1 auto","width":"min(100%,50vh,520px)","position":"relative"}}>
          <div style={{"display":"grid","gridTemplateColumns":"repeat(7,minmax(0,1fr))","gap":"clamp(4px,1vw,8px)","padding":"clamp(10px,2vw,18px)","background":"#1c1c1b","border":"1px solid #3a3a38"}}>
            {cells.map((c, cIdx) => (<Fragment key={cIdx}>
              <div style={{"position":"relative","aspectRatio":"1/1","borderRadius":"50%","background":`${c.bg}`,"color":`${c.fg}`,"display":"flex","alignItems":"center","justifyContent":"center","fontWeight":"800","fontSize":"clamp(9px,1.6vh,14px)","fontVariantNumeric":"tabular-nums"}}>{c.b}<span style={{"position":"absolute","inset":"0","borderRadius":"50%","background":`${c.ag}`,"color":"#fff","display":"flex","alignItems":"center","justifyContent":"center","opacity":`clamp(0, calc((var(--p,0) - ${c.t}) * 9), 1)`,"transform":`scale(clamp(.6, calc(.6 + (var(--p,0) - ${c.t}) * 4), 1))`}}>{c.a}</span></div>
            </Fragment>))}
          </div>
          <div style={{"position":"absolute","left":"50%","top":"50%","width":"clamp(14px,2.4vh,22px)","height":"clamp(14px,2.4vh,22px)","margin":"calc(clamp(14px,2.4vh,22px) / -2) 0 0 calc(clamp(14px,2.4vh,22px) / -2)","borderRadius":"50%","background":"#2F6BFF","border":"3px solid #fff","animation":"mrgPulse 2s infinite","pointerEvents":"none"}}></div>
          <div style={{"position":"absolute","left":"0","right":"0","bottom":"-34px","textAlign":"center","fontFamily":"var(--font-jb),monospace","fontSize":"11px","letterSpacing":".14em","color":"#b8b5ac","opacity":"calc(1 - var(--p,0) * 8)"}}><span style={{"display":"inline-block","animation":"mrgBob 1.4s ease-in-out infinite"}}>KEEP SCROLLING ↓</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section style={{"padding":"clamp(64px,10vw,112px) 20px","background":"#f3f1ec","overflow":"hidden"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","display":"flex","flexWrap":"wrap","gap":"clamp(28px,5vw,56px)","alignItems":"center"}}>
    <div style={{"flex":"1 1 380px","minWidth":"0","display":"flex","flexDirection":"column","gap":"20px"}}>
      
      <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(32px,6vw,60px)","lineHeight":".95","letterSpacing":"-.03em","textWrap":"balance"}}>Your map video <span style={{"color":"#2F6BFF"}}>looks like this.</span></h2>
      <p data-rv="up" data-d=".1" style={{"margin":"0","fontSize":"18px","color":"#3b3a36","maxWidth":"520px","textWrap":"pretty"}}>A few minutes, recorded for your business only. No pitch deck, no follow-up call.</p>
      <div style={{"display":"flex","flexDirection":"column","borderTop":"1px solid #111110"}}>
        <div data-rv="up" data-d=".15" style={{"display":"flex","gap":"16px","padding":"14px 0","borderBottom":"1px solid #d9d6cd"}}><span style={{"fontFamily":"var(--font-jb),monospace","color":"#2F6BFF","fontWeight":"600"}}>01</span><span style={{"fontWeight":"700"}}>Where you rank, street by street, for the search you pick</span></div>
        <div data-rv="up" data-d=".25" style={{"display":"flex","gap":"16px","padding":"14px 0","borderBottom":"1px solid #d9d6cd"}}><span style={{"fontFamily":"var(--font-jb),monospace","color":"#2F6BFF","fontWeight":"600"}}>02</span><span style={{"fontWeight":"700"}}>Who&apos;s beating you, and why Google prefers them</span></div>
        <div data-rv="up" data-d=".35" style={{"display":"flex","gap":"16px","padding":"14px 0","borderBottom":"1px solid #d9d6cd"}}><span style={{"fontFamily":"var(--font-jb),monospace","color":"#2F6BFF","fontWeight":"600"}}>03</span><span style={{"fontWeight":"700"}}>The three things I&apos;d fix first. Keep them either way.</span></div>
      </div>
      <a className="hv0" data-rv="up" data-d=".4" href="#get-video" style={{"textDecoration":"none","alignSelf":"flex-start","height":"56px","padding":"0 24px","background":"#111110","color":"#fff","fontStretch":"125%","fontWeight":"800","fontSize":"17px","display":"flex","alignItems":"center","gap":"10px"}}>Get mine <span style={{"fontSize":"20px"}}>→</span></a>
    </div>
    <div style={{"flex":"1 1 440px","minWidth":"0"}}>
      <div data-par="40">
        <div data-rv="scale" style={{"position":"relative","aspectRatio":"16/9","overflow":"hidden","background":"#111110","border":"3px solid #111110","boxShadow":"12px 12px 0 #2F6BFF"}}>
          <PlayVideo embed="https://www.loom.com/embed/b43ca59cf6884b7b8edf9e9afa5f967d?autoplay=1&amp;hide_owner=true&amp;hide_share=true&amp;hide_title=true&amp;hideEmbedTopBar=true" title="Sample map video" label="Play sample map video">
              <img src="/images/home/sample-google-maps-video-heatmap-grid.webp" alt="Frame from a real Google Maps video: heatmap grid with Mitchell on face cam" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} loading="lazy" decoding="async" />
              <span style={{"position":"absolute","left":"50%","top":"50%","transform":"translate(-50%,-50%)","width":"76px","height":"76px","borderRadius":"50%","background":"#2F6BFF","display":"flex","alignItems":"center","justifyContent":"center","animation":"mrgPulse 2s infinite"}}><span style={{"width":"0","height":"0","borderLeft":"22px solid #fff","borderTop":"13px solid transparent","borderBottom":"13px solid transparent","marginLeft":"6px"}}></span></span>
              <span style={{"position":"absolute","left":"12px","top":"12px","background":"#2F6BFF","color":"#fff","fontFamily":"var(--font-jb),monospace","fontSize":"11px","letterSpacing":".1em","padding":"4px 8px"}}>REAL EXAMPLE</span>
            </PlayVideo>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="project-maths" style={{"padding":"clamp(64px,10vw,112px) 20px","background":"#fff"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","display":"flex","flexDirection":"column","gap":"28px"}}>
    
    <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(32px,6.4vw,64px)","lineHeight":".95","letterSpacing":"-.03em","textWrap":"balance","maxWidth":"900px"}}>What would the top 3 be <span style={{"color":"#2F6BFF"}}>worth to you?</span></h2>
    <p data-rv="up" data-d=".1" style={{"margin":"0","fontSize":"18px","color":"#3b3a36","maxWidth":"640px","textWrap":"pretty"}}>Put in your own numbers. It&apos;s an estimate to think with, not a forecast. The 2x default is below what the two plumbers did: 2.5x and 2.7x the calls in a quarter.</p>
    <HomeCalculator />
    <p style={{"margin":"0","fontSize":"13px","color":"#55534d","maxWidth":"760px"}}>Estimates only. Results depend on your market, your competition, your website and your reviews. Calls means taps on the Call button in Google, which is how every number on this site is measured.</p>
  </div>
</section>

<section id="why-me" style={{"background":"#f3f1ec"}}>
  <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,420px),1fr))"}}>
    <div style={{"background":"#111110","color":"#fff","padding":"clamp(56px,8vw,96px) clamp(20px,5vw,64px)","display":"flex","flexDirection":"column","gap":"18px"}}>
      <div data-rv="left" style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".14em","color":"#b8b5ac"}}>RENT THE SPOT · GOOGLE ADS</div>
      <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(32px,5.4vw,56px)","lineHeight":".95","letterSpacing":"-.03em"}}>Pay for every click.</h2>
      <p data-rv="up" data-d=".1" style={{"margin":"0","color":"#d4d1c8","fontSize":"18px","maxWidth":"460px","textWrap":"pretty"}}>Including the tyre-kickers. The day you stop paying, you disappear.</p>
      <div data-rv="up" data-d=".2" style={{"marginTop":"auto","paddingTop":"24px","borderTop":"1px solid #3a3a38","display":"flex","flexDirection":"column","gap":"4px"}}>
        <div style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".1em","color":"#b8b5ac"}}>SPENT ON CLICKS WHILE YOU READ THIS</div>
        <div data-tick="" data-rate="2.35" data-fmt="aud2" style={{"fontStretch":"125%","fontWeight":"900","fontSize":"clamp(48px,8vw,88px)","lineHeight":"1","color":"oklch(0.7 0.18 28)","fontVariantNumeric":"tabular-nums"}}>$0.00</div>
        <div style={{"fontSize":"13px","color":"#8a877e"}}>Ticker at a typical local trade click cost. Illustrative.</div>
      </div>
    </div>
    <div style={{"background":"#fff","padding":"clamp(56px,8vw,96px) clamp(20px,5vw,64px)","display":"flex","flexDirection":"column","gap":"18px"}}>
      <div data-rv="left" style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".14em","color":"#2F6BFF","fontWeight":"600"}}>EARN THE SPOT · TOP 3 ON GOOGLE MAPS</div>
      <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(32px,5.4vw,56px)","lineHeight":".95","letterSpacing":"-.03em"}}>Pay for <span style={{"color":"#2F6BFF"}}>none of them.</span></h2>
      <p data-rv="up" data-d=".1" style={{"margin":"0","color":"#3b3a36","fontSize":"18px","maxWidth":"460px","textWrap":"pretty"}}>The map spots can&apos;t be bought. Earn them and the calls keep coming, with no bill per click.</p>
      <div data-rv="up" data-d=".2" style={{"marginTop":"auto","paddingTop":"24px","borderTop":"1px solid #111110","display":"flex","flexDirection":"column","gap":"4px"}}>
        <div style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".1em","color":"#55534d"}}>WHAT GOOGLE CHARGES PER MAP CALL</div>
        <div style={{"fontStretch":"125%","fontWeight":"900","fontSize":"clamp(48px,8vw,88px)","lineHeight":"1","color":"#2F6BFF"}}>$0.00</div>
        <div style={{"fontSize":"13px","color":"#55534d"}}>Forever.</div>
      </div>
    </div>
  </div>
  <div style={{"maxWidth":"1240px","margin":"0 auto","padding":"clamp(56px,8vw,88px) 20px","display":"flex","flexDirection":"column","gap":"28px"}}>
    <h3 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(26px,4.4vw,44px)","lineHeight":"1","letterSpacing":"-.02em"}}>So who does the earning?</h3>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,240px),1fr))","gap":"28px"}}>
      <div data-rv="up" style={{"borderTop":"3px solid #111110","paddingTop":"16px","display":"flex","flexDirection":"column","gap":"8px"}}><div style={{"fontWeight":"800","fontSize":"20px"}}>Do it yourself</div><div style={{"color":"#3b3a36"}}>A second full-time job on top of the one you already don&apos;t have time for. By the time you&apos;ve worked it out, the season&apos;s gone.</div></div>
      <div data-rv="up" data-d=".1" style={{"borderTop":"3px solid #111110","paddingTop":"16px","display":"flex","flexDirection":"column","gap":"8px"}}><div style={{"fontWeight":"800","fontSize":"20px"}}>Put someone on</div><div style={{"color":"#3b3a36"}}>A good marketer is hard to find and dear to keep. Hire the wrong one and you&apos;ve burned months and a wage.</div></div>
      <div data-rv="up" data-d=".2" style={{"borderTop":"3px solid #111110","paddingTop":"16px","display":"flex","flexDirection":"column","gap":"8px"}}><div style={{"fontWeight":"800","fontSize":"20px"}}>A big agency</div><div style={{"color":"#3b3a36"}}>Unless you spend tens of thousands a month, you&apos;re a small account. The work goes to a junior and you pay either way.</div></div>
      <div data-rv="up" data-d=".3" style={{"borderTop":"3px solid #2F6BFF","paddingTop":"16px","display":"flex","flexDirection":"column","gap":"8px"}}><div style={{"fontWeight":"800","fontSize":"20px","color":"#2F6BFF"}}>Me</div><div style={{"color":"#111110","fontWeight":"600"}}>One person who does the work, picks up the same day, sends an update every Friday, and stays until the numbers move.</div></div>
    </div>
  </div>
</section>

<section id="reviews" style={{"padding":"clamp(64px,10vw,112px) 20px","background":"#fff"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","display":"flex","flexDirection":"column","gap":"clamp(32px,5vw,48px)"}}>
    <div style={{"display":"flex","flexDirection":"column","gap":"18px"}}>
      
      <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(32px,6.4vw,64px)","lineHeight":".95","letterSpacing":"-.03em"}}>Real profiles. <span style={{"color":"#2F6BFF"}}>Real calls.</span></h2>
    </div>
    <div style={{"display":"flex","flexDirection":"column","borderTop":"3px solid #111110"}}>
      <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,260px),1fr))","gap":"12px 32px","padding":"24px 0","borderBottom":"1px solid #d9d6cd","alignItems":"center"}}>
        <div data-rv="left" style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".12em","color":"#55534d"}}>MARINE DETAILING · GOLD COAST</div>
        <div data-rv="up" style={{"fontStretch":"125%","fontWeight":"900","fontSize":"clamp(40px,6vw,64px)","lineHeight":".9","letterSpacing":"-.03em","display":"flex","flexWrap":"wrap","alignItems":"baseline","gap":"4px 12px","minWidth":"0"}}>#<span data-num="" data-from="7" data-target="1">1</span> <span style={{"fontSize":".45em","color":"#2F6BFF","letterSpacing":"0"}}>in 2 days</span></div>
        <div data-rv="up" data-d=".1" style={{"color":"#3b3a36"}}>Polish Hub. From 7th to top of Google Maps for &quot;marine detailer&quot;. <Link href="/case-studies/polish-hub-marine-detailing-google-maps/">Read the Polish Hub case study</Link></div>
      </div>
      <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,260px),1fr))","gap":"12px 32px","padding":"24px 0","borderBottom":"1px solid #d9d6cd","alignItems":"center"}}>
        <div data-rv="left" style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".12em","color":"#55534d"}}>PLUMBING · TWO BUSINESSES</div>
        <div data-rv="up" style={{"display":"flex","flexDirection":"column","gap":"8px"}}>
          <div style={{"display":"flex","alignItems":"center","gap":"10px"}}><span style={{"width":"62px","fontSize":"13px","fontWeight":"700","flex":"none"}}>Before</span><div style={{"flex":"1","height":"14px","background":"#f3f1ec"}}><div data-rv="grow" data-d=".1" style={{"width":"37%","height":"100%","background":"#b8b5ac"}}></div></div><span style={{"width":"40px","fontWeight":"800","fontSize":"14px"}}>1x</span></div>
          <div style={{"display":"flex","alignItems":"center","gap":"10px"}}><span style={{"width":"62px","fontSize":"13px","fontWeight":"700","flex":"none"}}>Plumber A</span><div style={{"flex":"1","height":"14px","background":"#f3f1ec"}}><div data-rv="grow" data-d=".3" style={{"width":"93%","height":"100%","background":"#2F6BFF"}}></div></div><span data-num="" data-from="1" data-target="2.5" data-fmt="x" style={{"width":"40px","fontWeight":"800","fontSize":"14px"}}>2.5x</span></div>
          <div style={{"display":"flex","alignItems":"center","gap":"10px"}}><span style={{"width":"62px","fontSize":"13px","fontWeight":"700","flex":"none"}}>Plumber B</span><div style={{"flex":"1","height":"14px","background":"#f3f1ec"}}><div data-rv="grow" data-d=".5" style={{"width":"100%","height":"100%","background":"#111110"}}></div></div><span data-num="" data-from="1" data-target="2.7" data-fmt="x" style={{"width":"40px","fontWeight":"800","fontSize":"14px"}}>2.7x</span></div>
        </div>
        <div data-rv="up" data-d=".1" style={{"color":"#3b3a36"}}><strong data-num="" data-target="208" data-suf=" calls" style={{"color":"#111110"}}>208 calls</strong> between them in three months. <Link href="/case-studies/gold-coast-plumber-calls-from-google-nearly-tripled/">Gold Coast plumber</Link> and <Link href="/case-studies/logan-plumber-2-5x-calls-in-first-three-months/">Logan plumber</Link> case studies.</div>
      </div>
      <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,260px),1fr))","gap":"12px 32px","padding":"24px 0","borderBottom":"1px solid #d9d6cd","alignItems":"center"}}>
        <div data-rv="left" style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".12em","color":"#55534d"}}>LOCAL SERVICE · ONE PROFILE</div>
        <div data-rv="up" style={{"fontStretch":"125%","fontWeight":"900","fontSize":"clamp(40px,6vw,64px)","lineHeight":".9","letterSpacing":"-.03em","display":"flex","flexWrap":"wrap","alignItems":"baseline","gap":"4px 12px","minWidth":"0"}}><span data-num="" data-target="266">266</span> <span style={{"fontSize":".45em","color":"#2F6BFF","letterSpacing":"0"}}>calls, 5 months</span></div>
        <div data-rv="up" data-d=".1" style={{"color":"#3b3a36"}}>Call-button taps from one Business Profile I manage.</div>
      </div>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,340px),1fr))","gap":"clamp(28px,5vw,56px)"}}>
      <figure data-rv="up" style={{"margin":"0","display":"flex","flexDirection":"column","gap":"16px"}}>
        <div style={{"display":"flex","gap":"3px","color":"#2F6BFF","fontSize":"22px"}}><span data-rv="scale" data-d=".1">★</span><span data-rv="scale" data-d=".18">★</span><span data-rv="scale" data-d=".26">★</span><span data-rv="scale" data-d=".34">★</span><span data-rv="scale" data-d=".42">★</span></div>
        <blockquote style={{"margin":"0","fontStretch":"115%","fontSize":"clamp(22px,2.8vw,30px)","fontWeight":"800","lineHeight":"1.15","letterSpacing":"-.01em","textWrap":"pretty"}}>&quot;I honestly couldn&apos;t believe how quickly Mitchell got results.&quot;</blockquote>
        <p style={{"margin":"0","fontSize":"17px","color":"#2a2926","textWrap":"pretty"}}>On 13 March, my business was sitting around 7th on Google Maps for &quot;marine detailer&quot;. Two days later, we were ranking 1st. I messaged him straight away because I was genuinely shocked at how fast he&apos;d managed to move things. Highly recommend MRG Marketing.</p>
        <figcaption style={{"display":"flex","alignItems":"center","gap":"12px"}}><div style={{"width":"48px","height":"48px","flex":"none","borderRadius":"50%","overflow":"hidden","background":"#e6e3da"}}><img src="/images/home/google-review-conrad-smith-polish-hub.webp" alt="Conrad Smith" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} loading="lazy" decoding="async" /></div><div style={{"fontWeight":"800","minWidth":"0"}}>Conrad Smith <span style={{"fontWeight":"400","color":"#55534d"}}>· Polish Hub, Gold Coast · Google review</span></div></figcaption>
      </figure>
      <figure data-rv="up" data-d=".15" style={{"margin":"0","display":"flex","flexDirection":"column","gap":"16px"}}>
        <div style={{"display":"flex","gap":"3px","color":"#2F6BFF","fontSize":"22px"}}><span data-rv="scale" data-d=".25">★</span><span data-rv="scale" data-d=".33">★</span><span data-rv="scale" data-d=".41">★</span><span data-rv="scale" data-d=".49">★</span><span data-rv="scale" data-d=".57">★</span></div>
        <blockquote style={{"margin":"0","fontStretch":"115%","fontSize":"clamp(22px,2.8vw,30px)","fontWeight":"800","lineHeight":"1.15","letterSpacing":"-.01em","textWrap":"pretty"}}>&quot;He was able to get us 71 calls in the last four months.&quot;</blockquote>
        <p style={{"margin":"0","fontSize":"17px","color":"#2a2926","textWrap":"pretty"}}>We were having difficulties appearing in the top 3 on Google as it&apos;s very competitive, with Uber being a problem. I don&apos;t really understand local SEO but Mitchell gave more than enough time to break down how it works. I highly recommend MRG.</p>
        <figcaption style={{"display":"flex","alignItems":"center","gap":"12px"}}><div style={{"width":"48px","height":"48px","flex":"none","borderRadius":"50%","overflow":"hidden","background":"#e6e3da"}}><img src="/images/home/google-review-cathy-ann-jones-chasi-taxi.webp" alt="Cathy-Ann Jones" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} loading="lazy" decoding="async" /></div><div style={{"fontWeight":"800","minWidth":"0"}}>Cathy-Ann Jones <span style={{"fontWeight":"400","color":"#55534d"}}>· CHASI Taxi, Coffs Harbour · Google review</span></div></figcaption>
      </figure>
    </div>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"10px 24px","fontWeight":"700"}}><a href="https://www.google.com/maps/search/?api=1&amp;query=MRG%20Marketing&amp;query_place_id=ChIJI7me_LgPkWsRiuaYKm_2oqc" rel="noopener noreferrer">See all reviews on Google</a><Link href="/case-studies/">Read the case studies</Link></div>
  </div>
</section>

<section id="services" style={{"padding":"clamp(64px,10vw,112px) 20px","background":"#f3f1ec"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","display":"flex","flexDirection":"column","gap":"28px"}}>
    
    <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(32px,6.4vw,64px)","lineHeight":".95","letterSpacing":"-.03em"}}>Three things. <span style={{"color":"#2F6BFF"}}>Done properly.</span></h2>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"clamp(28px,5vw,56px)","alignItems":"flex-start"}}>
      <div style={{"flex":"1 1 360px","minWidth":"0","position":"sticky","top":"90px"}}>
        <div data-demo="" data-rv="scale" style={{"background":"#fff","border":"3px solid #111110","boxShadow":"10px 10px 0 #111110","padding":"16px","display":"flex","flexDirection":"column","gap":"14px"}}>
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","gap":"10px"}}><span data-demo-src="" style={{"fontFamily":"var(--font-jb),monospace","fontSize":"11px","letterSpacing":".12em","fontWeight":"600","background":"#111110","color":"#fff","padding":"4px 8px"}}>GOOGLE MAPS</span><span style={{"fontFamily":"var(--font-jb),monospace","fontSize":"11px","letterSpacing":".1em","color":"#55534d","display":"flex","alignItems":"center","gap":"6px"}}><span style={{"width":"7px","height":"7px","borderRadius":"50%","background":"#2F6BFF","animation":"mrgPulse 2s infinite"}}></span>LIVE DEMO</span></div>
          <div style={{"height":"52px","border":"2px solid #111110","borderRadius":"26px","display":"flex","alignItems":"center","gap":"10px","padding":"0 18px","fontSize":"17px","fontWeight":"600","overflow":"hidden","whiteSpace":"nowrap"}}><span style={{"color":"#2F6BFF","fontSize":"18px"}}>⌕</span><span data-demo-q="" style={{"overflow":"hidden","textOverflow":"ellipsis"}}>plumber coomera</span><span style={{"width":"2px","height":"22px","background":"#2F6BFF","flex":"none","animation":"mrgBlink 1s infinite"}}></span></div>
          <div style={{"position":"relative","height":"232px"}}>
            <div data-demo-maps="" style={{"position":"absolute","inset":"0","transition":"opacity .4s"}}>
              <div data-demo-row="0" style={{"position":"absolute","left":"0","right":"0","top":"0","height":"68px","border":"1px solid #d9d6cd","background":"#fff","display":"flex","alignItems":"center","gap":"12px","padding":"0 12px","transition":"transform .8s cubic-bezier(.7,0,.2,1),opacity .4s"}}>
                <span style={{"width":"30px","height":"30px","borderRadius":"50%","background":"oklch(0.62 0.2 28)","flex":"none"}}></span>
                <div style={{"flex":"1","minWidth":"0","display":"flex","flexDirection":"column","gap":"6px"}}><span style={{"height":"10px","width":"70%","background":"#d9d6cd","borderRadius":"5px"}}></span><span style={{"height":"8px","width":"45%","background":"#ebe8e1","borderRadius":"4px"}}></span></div>
                <span style={{"fontSize":"13px","color":"#8a877e","fontWeight":"700"}}>★ 4.1</span>
              </div>
              <div data-demo-row="1" style={{"position":"absolute","left":"0","right":"0","top":"0","height":"68px","border":"1px solid #d9d6cd","background":"#fff","display":"flex","alignItems":"center","gap":"12px","padding":"0 12px","transition":"transform .8s cubic-bezier(.7,0,.2,1),opacity .4s"}}>
                <span style={{"width":"30px","height":"30px","borderRadius":"50%","background":"oklch(0.8 0.15 85)","flex":"none"}}></span>
                <div style={{"flex":"1","minWidth":"0","display":"flex","flexDirection":"column","gap":"6px"}}><span style={{"height":"10px","width":"58%","background":"#d9d6cd","borderRadius":"5px"}}></span><span style={{"height":"8px","width":"38%","background":"#ebe8e1","borderRadius":"4px"}}></span></div>
                <span style={{"fontSize":"13px","color":"#8a877e","fontWeight":"700"}}>★ 4.4</span>
              </div>
              <div data-demo-row="2" style={{"position":"absolute","left":"0","right":"0","top":"0","height":"68px","border":"2px solid #2F6BFF","background":"#fff","display":"flex","alignItems":"center","gap":"12px","padding":"0 12px","zIndex":"2","transition":"transform .8s cubic-bezier(.7,0,.2,1),opacity .4s"}}>
                <span style={{"width":"30px","height":"30px","borderRadius":"50%","background":"#2F6BFF","flex":"none","color":"#fff","display":"flex","alignItems":"center","justifyContent":"center","fontWeight":"900","fontSize":"14px"}}>★</span>
                <div style={{"flex":"1","minWidth":"0","display":"flex","flexDirection":"column","gap":"2px"}}><span style={{"fontWeight":"800","fontSize":"16px"}}>Your business</span><span style={{"fontSize":"13px","color":"#55534d"}}>★ 5.0 · Open now · 4 min away</span></div>
                <span style={{"height":"36px","padding":"0 14px","background":"#2F6BFF","color":"#fff","fontWeight":"800","fontSize":"14px","display":"flex","alignItems":"center"}}>Call</span>
                <span data-demo-pop="" style={{"position":"absolute","right":"-8px","top":"-14px","background":"#111110","color":"#fff","fontFamily":"var(--font-jb),monospace","fontSize":"11px","fontWeight":"600","padding":"4px 8px","transition":"opacity .3s,transform .4s cubic-bezier(.3,1.6,.5,1)"}}>+1 CALL</span>
              </div>
            </div>
            <div data-demo-ai="" style={{"position":"absolute","inset":"0","transition":"opacity .4s","display":"flex","flexDirection":"column","gap":"10px","opacity":"0"}}>
              <div style={{"alignSelf":"flex-start","fontFamily":"var(--font-jb),monospace","fontSize":"11px","letterSpacing":".1em","color":"#55534d"}}>AI ANSWER</div>
              <div data-demo-ans="" style={{"border":"1px solid #d9d6cd","background":"#f3f1ec","padding":"16px","fontSize":"16px","lineHeight":"1.5","transition":"opacity .4s,transform .5s"}}>Based on local reviews and listings, a strong option is <strong style={{"background":"#2F6BFF","color":"#fff","padding":"1px 6px"}}>Your business</strong>. 5.0 stars, open today and close to you.</div>
            </div>
          </div>
          <div style={{"fontSize":"12px","color":"#8a877e"}}>Illustration of a local result. Real rankings vary by street.</div>
        </div>
      </div>
      <div style={{"flex":"1 1 420px","minWidth":"0","display":"flex","flexDirection":"column","borderTop":"3px solid #111110"}}>
        <Link className="hv1" data-rv="up" href="/google-business-profile-gold-coast/" style={{"textDecoration":"none","color":"#111110","padding":"26px 0","borderBottom":"1px solid #111110","display":"grid","gridTemplateColumns":"auto minmax(0,1fr)","gap":"4px 20px"}}>
          <span style={{"gridRow":"span 3","fontFamily":"var(--font-jb),monospace","fontSize":"14px","fontWeight":"600","color":"#2F6BFF","paddingTop":"8px"}}>01</span>
          <h3 style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(26px,3.6vw,38px)","lineHeight":"1","letterSpacing":"-.02em"}}>Google Maps</h3>
          <span style={{"color":"#3b3a36","fontSize":"17px"}}>Your Google Business Profile, optimised and rebuilt so you&apos;re in the top 3 for searches within a few kilometres of you. The cheapest customers a local business will ever get.</span>
          <span style={{"fontWeight":"800","color":"#2F6BFF","marginTop":"6px"}}>How it works →</span>
        </Link>
        <Link className="hv1" data-rv="up" data-d=".1" href="/best-local-seo-expert-in-gold-coast/" style={{"textDecoration":"none","color":"#111110","padding":"26px 0","borderBottom":"1px solid #111110","display":"grid","gridTemplateColumns":"auto minmax(0,1fr)","gap":"4px 20px"}}>
          <span style={{"gridRow":"span 3","fontFamily":"var(--font-jb),monospace","fontSize":"14px","fontWeight":"600","color":"#2F6BFF","paddingTop":"8px"}}>02</span>
          <h3 style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(26px,3.6vw,38px)","lineHeight":"1","letterSpacing":"-.02em"}}>Local SEO</h3>
          <span style={{"color":"#3b3a36","fontSize":"17px"}}>A page for every service and every suburb you serve, so you rank for what people actually type and your profile has something to stand on.</span>
          <span style={{"fontWeight":"800","color":"#2F6BFF","marginTop":"6px"}}>How it works →</span>
        </Link>
        <Link className="hv1" data-rv="up" data-d=".2" href="/ai-search-geo-gold-coast/" style={{"textDecoration":"none","color":"#111110","padding":"26px 0","borderBottom":"1px solid #111110","display":"grid","gridTemplateColumns":"auto minmax(0,1fr)","gap":"4px 20px"}}>
          <span style={{"gridRow":"span 3","fontFamily":"var(--font-jb),monospace","fontSize":"14px","fontWeight":"600","color":"#2F6BFF","paddingTop":"8px"}}>03</span>
          <h3 style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(26px,3.6vw,38px)","lineHeight":"1","letterSpacing":"-.02em"}}>AI Search (GEO)</h3>
          <span style={{"color":"#3b3a36","fontSize":"17px"}}>Getting named when someone asks ChatGPT, Gemini or Google AI who to call. The same local signals, tuned for how the models choose.</span>
          <span style={{"fontWeight":"800","color":"#2F6BFF","marginTop":"6px"}}>How it works →</span>
        </Link>
        <p data-rv="up" style={{"margin":"20px 0 0","color":"#55534d"}}>Packages or individual services are available.</p>
      </div>
    </div>
  </div>
</section>

<section id="how-it-works" style={{"padding":"clamp(64px,10vw,112px) 20px","background":"#fff"}}>
  <div style={{"maxWidth":"1000px","margin":"0 auto","display":"flex","flexDirection":"column","gap":"clamp(32px,5vw,56px)"}}>
    <div style={{"display":"flex","flexDirection":"column","gap":"18px"}}>
      
      <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(32px,6.4vw,64px)","lineHeight":".95","letterSpacing":"-.03em","textWrap":"balance"}}>The first 90 days, <span style={{"color":"#2F6BFF"}}>step by step.</span></h2>
      <p data-rv="up" data-d=".1" style={{"margin":"0","fontSize":"18px","color":"#3b3a36","maxWidth":"640px","textWrap":"pretty"}}>Same seven steps for every client, in this order, because the order is what makes it work. The profile moves fastest, so it goes first.</p>
    </div>
    <div data-scrub="pass" style={{"position":"relative","paddingLeft":"clamp(48px,9vw,104px)"}}>
      <div style={{"position":"absolute","left":"clamp(14px,3vw,34px)","top":"6px","bottom":"0","width":"4px","background":"#ebe8e1"}}></div>
      <div style={{"position":"absolute","left":"clamp(14px,3vw,34px)","top":"6px","bottom":"0","width":"4px","background":"#2F6BFF","transformOrigin":"50% 0","transform":"scaleY(var(--p,0))"}}></div>
      {steps.map((s, sIdx) => (<Fragment key={sIdx}>
        <div style={{"position":"relative","paddingBottom":"clamp(40px,6vw,72px)","display":"flex","flexDirection":"column","gap":"10px"}}>
          <span style={{"position":"absolute","top":"2px","left":"calc(clamp(14px,3vw,34px) - clamp(48px,9vw,104px) - 12px)","width":"28px","height":"28px","borderRadius":"50%","background":"#fff","border":"4px solid #d9d6cd"}}><span style={{"position":"absolute","inset":"-4px","borderRadius":"50%","background":"#2F6BFF","opacity":`clamp(0, calc((var(--p,0) - ${s.t}) * 20), 1)`,"transform":`scale(clamp(.4, calc(.4 + (var(--p,0) - ${s.t}) * 12), 1))`}}></span></span>
          <div data-rv="left" style={{"display":"flex","alignItems":"baseline","gap":"14px","flexWrap":"wrap"}}><span style={{"fontStretch":"125%","fontWeight":"900","fontSize":"clamp(22px,3vw,28px)","color":"#2F6BFF","lineHeight":"1"}}>{s.n}</span><span style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".12em","color":"#55534d"}}>{s.when}</span></div>
          <h3 data-rv="up" data-d=".05" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(28px,4.6vw,48px)","lineHeight":"1","letterSpacing":"-.02em"}}>{s.title}</h3>
          <p data-rv="up" data-d=".12" style={{"margin":"0","fontSize":"18px","color":"#3b3a36","maxWidth":"620px","textWrap":"pretty"}}>{s.body}</p>
          <div data-rv="up" data-d=".2" style={{"alignSelf":"flex-start","fontSize":"14px","fontWeight":"700","background":"#f3f1ec","padding":"6px 10px"}}>{s.foot}</div>
        </div>
      </Fragment>))}
    </div>
    <div data-rv="up" style={{"fontSize":"16px","paddingLeft":"clamp(48px,9vw,104px)"}}>Week 1 starts the day you give me access. <a href="https://calendar.notion.com/meet/mitchellgiles134/tovi31rm" rel="noopener noreferrer">Book a 30-minute call</a></div>
  </div>
</section>

<section id="about" style={{"padding":"clamp(64px,10vw,112px) 20px","background":"#111110","color":"#fff","scrollMarginTop":"70px","overflow":"hidden"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","display":"flex","flexWrap":"wrap","gap":"clamp(32px,6vw,72px)","alignItems":"center"}}>
    <div style={{"flex":"1 1 300px","minWidth":"0","maxWidth":"460px","display":"flex","flexDirection":"column","gap":"12px"}}>
      <div data-rv="clip" style={{"aspectRatio":"4/5","maxHeight":"clamp(320px,80vw,600px)","overflow":"hidden","background":"#1c1c1b"}}>
        <img data-par="-50" src="/images/home/mitchell-giles-local-seo-consultant-ormeau.webp" alt="Mitchell Giles, MRG Marketing, Ormeau" style={{"width":"100%","height":"116%","marginTop":"-8%","objectFit":"cover","objectPosition":"50% 20%","display":"block"}} loading="lazy" decoding="async" />
      </div>
      <div style={{"fontWeight":"800"}}>Mitchell Giles <span style={{"fontWeight":"400","color":"#b8b5ac"}}>· Ormeau, est. 2024</span></div>
    </div>
    <div style={{"flex":"1 1 440px","minWidth":"0","display":"flex","flexDirection":"column","gap":"22px"}}>
      <div data-rv="left" style={{"display":"flex","alignItems":"center","gap":"10px","fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".14em","color":"#b8b5ac"}}><span style={{"width":"22px","height":"3px","background":"#2F6BFF"}}></span>ABOUT</div>
      
      <p data-rv="up" data-d=".1" style={{"margin":"0","fontSize":"18px","color":"#d4d1c8","textWrap":"pretty"}}>I&apos;m Mitchell. I started in <Link href="/google-business-profile-gold-coast/" style={{"color":"#6f98ff"}}>Google Business Profiles</Link> because free Google traffic is the fastest win a local business can get. Most of my clients are <Link href="/best-seo-agency-for-tradies-in-australia/" style={{"color":"#6f98ff"}}>trades and local services</Link>. I also do the same work white-label for other agencies, which is why some results on this site have the name cropped out.</p>
      <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,220px),1fr))","gap":"0 28px"}}>
        <div data-rv="up" data-d=".1" style={{"padding":"16px 0","borderTop":"1px solid #3a3a38"}}><div style={{"fontWeight":"800"}}>You deal with me</div><div style={{"color":"#b8b5ac","fontSize":"15px"}}>I do the research and the work. A small team checks it before it reaches you.</div></div>
        <div data-rv="up" data-d=".18" style={{"padding":"16px 0","borderTop":"1px solid #3a3a38"}}><div style={{"fontWeight":"800"}}>Same-day replies</div><div style={{"color":"#b8b5ac","fontSize":"15px"}}>An update every Friday. Anything in between, answered the same day.</div></div>
        <div data-rv="up" data-d=".26" style={{"padding":"16px 0","borderTop":"1px solid #3a3a38"}}><div style={{"fontWeight":"800"}}>Local first, then the best in the world</div><div style={{"color":"#b8b5ac","fontSize":"15px"}}>I study your competitors here, then the top operators nationally and globally, and bring that standard back to your suburb.</div></div>
        <div data-rv="up" data-d=".34" style={{"padding":"16px 0","borderTop":"1px solid #3a3a38"}}><div style={{"fontWeight":"800"}}>You own everything</div><div style={{"color":"#b8b5ac","fontSize":"15px"}}>Your profile, your site, your pages. No lock-in.</div></div>
      </div>
      <Link className="hv2" data-rv="up" data-d=".4" href="/hardest-working-seo-expert-in-gold-coast/" style={{"alignSelf":"flex-start","display":"flex","alignItems":"center","gap":"12px","height":"56px","padding":"0 22px","border":"2px solid #fff","color":"#fff","textDecoration":"none","fontStretch":"125%","fontWeight":"800","fontSize":"17px"}}>Meet the hardest working SEO expert in Gold Coast <span style={{"fontSize":"20px"}}>→</span></Link>
    </div>
  </div>
</section>

<section id="industries" style={{"padding":"clamp(64px,10vw,112px) 0","background":"#f3f1ec","overflow":"hidden"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","padding":"0 20px","display":"flex","flexDirection":"column","gap":"18px"}}>
    
    <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(32px,6.4vw,64px)","lineHeight":".95","letterSpacing":"-.03em","textWrap":"balance"}}>Local businesses, <span style={{"color":"#2F6BFF"}}>not just tradies.</span></h2>
    <p data-rv="up" data-d=".1" style={{"margin":"0","fontSize":"18px","color":"#3b3a36","maxWidth":"680px","textWrap":"pretty"}}>If people find you by searching your service plus a suburb, then ring, the work is the same. If yours isn&apos;t here, ask anyway.</p>
  </div>
  <div style={{"display":"flex","flexDirection":"column","gap":"12px","margin":"36px 0"}}>
    <div aria-hidden="true" data-marquee="" style={{"display":"flex","gap":"12px","paddingRight":"12px","width":"max-content","animation":"mrgMarquee 50s linear infinite"}}>
      {tradeLoopA.map((t, tIdx) => (<Fragment key={tIdx}>
        <span style={{"flex":"none","border":"1px solid #111110","background":"#fff","padding":"10px 16px","fontWeight":"700","display":"flex","gap":"10px","alignItems":"center","whiteSpace":"nowrap"}}>{t.t}<span style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","color":"#2F6BFF","fontWeight":"400"}}>&quot;{t.q}&quot;</span></span>
      </Fragment>))}
    </div>
    <div aria-hidden="true" data-marquee="" style={{"display":"flex","gap":"12px","paddingRight":"12px","width":"max-content","animation":"mrgMarqueeR 46s linear infinite"}}>
      {tradeLoopB.map((t, tIdx) => (<Fragment key={tIdx}>
        <span style={{"flex":"none","border":"1px solid #111110","background":"#111110","color":"#fff","padding":"10px 16px","fontWeight":"700","display":"flex","gap":"10px","alignItems":"center","whiteSpace":"nowrap"}}>{t.t}<span style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","color":"#6f98ff","fontWeight":"400"}}>&quot;{t.q}&quot;</span></span>
      </Fragment>))}
    </div>
  </div>
  <div style={{"maxWidth":"1240px","margin":"0 auto","padding":"0 20px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,220px),1fr))","gap":"28px"}}>
    {trades.map((g, gIdx) => (<Fragment key={gIdx}>
      <div data-rv="up" style={{"borderTop":"3px solid #111110","paddingTop":"14px","display":"flex","flexDirection":"column","gap":"6px"}}>
        <h3 style={{margin:"0 0 4px",fontStretch:"125%",fontWeight:900,fontSize:"19px",lineHeight:1.1}}>{g.href ? <Link href={g.href} style={{color:"inherit"}}>{g.name}</Link> : g.name}</h3>
        {g.items.map((it, itIdx) => (<Fragment key={itIdx}>
          {it.href ? <Link href={it.href} style={{fontSize:"15px"}}>{it.t}</Link> : <span style={{color:"#3b3a36",fontSize:"15px"}}>{it.t}</span>}
        </Fragment>))}
      </div>
    </Fragment>))}
    <div data-rv="up" style={{"borderTop":"3px solid #2F6BFF","paddingTop":"14px","display":"flex","flexDirection":"column","gap":"10px"}}>
      <h3 style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"19px","lineHeight":"1.1","color":"#2F6BFF"}}>Not on the list?</h3>
      <span style={{"color":"#3b3a36","fontSize":"15px"}}>Send me what you do and where. I&apos;ll tell you whether it&apos;s worth doing. If it isn&apos;t, I&apos;ll say that too.</span>
      <a className="hv0" href="#get-video" style={{"textDecoration":"none","display":"inline-flex","alignItems":"center","alignSelf":"flex-start","height":"44px","padding":"0 16px","background":"#111110","color":"#fff","fontWeight":"800","fontSize":"15px","cursor":"pointer"}}>Get my map video →</a>
    </div>
  </div>
</section>

<section style={{"background":"#2F6BFF","color":"#fff","padding":"clamp(56px,9vw,96px) 20px","overflow":"hidden"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","display":"flex","flexWrap":"wrap","gap":"clamp(24px,5vw,64px)","alignItems":"center"}}>
    <div data-rv="scale" style={{"flex":"0 1 auto","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(120px,22vw,260px)","lineHeight":".8","letterSpacing":"-.06em","fontVariantNumeric":"tabular-nums"}}><span data-num="" data-target="90">90</span></div>
    <div style={{"flex":"1 1 420px","minWidth":"0","display":"flex","flexDirection":"column","gap":"18px"}}>
      <div data-rv="left" style={{"fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".14em","color":"#dbe5ff"}}>IF YOU GO AHEAD</div>
      <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(30px,5.4vw,52px)","lineHeight":".95","letterSpacing":"-.03em","textWrap":"balance"}}>Your calls, guaranteed for 90 days.</h2>
      <div style={{"display":"flex","flexDirection":"column","fontSize":"18px"}}>
        <div data-rv="up" data-d=".1" style={{"display":"flex","gap":"14px","padding":"12px 0","borderTop":"1px solid rgba(255,255,255,.4)"}}><strong>1</strong><span>We agree a call target in writing before I start.</span></div>
        <div data-rv="up" data-d=".2" style={{"display":"flex","gap":"14px","padding":"12px 0","borderTop":"1px solid rgba(255,255,255,.4)"}}><strong>2</strong><span>You do your part: 4 new reviews and 10 job photos a week.</span></div>
        <div data-rv="up" data-d=".3" style={{"display":"flex","gap":"14px","padding":"12px 0","borderTop":"1px solid rgba(255,255,255,.4)","borderBottom":"1px solid rgba(255,255,255,.4)"}}><strong>3</strong><span>Miss the target in 90 days and you get back the management fees paid in those 90 days. Cancel before the 90 days end and there is no refund.</span></div>
      </div>
      <div data-rv="up" data-d=".35" style={{"display":"flex","flexWrap":"wrap","gap":"8px 18px","alignItems":"center","fontWeight":"700","fontSize":"15px"}}>
        <span>No lock-in</span><span>·</span><span>You own everything</span><span>·</span><span>Update every Friday</span><Link href="/terms/#guarantee" style={{"color":"#fff"}}>Full terms</Link>
        
      </div>
    </div>
  </div>
</section>

<section id="faq" style={{"padding":"clamp(64px,10vw,112px) 20px","background":"#f3f1ec"}}>
  <div style={{"maxWidth":"860px","margin":"0 auto","display":"flex","flexDirection":"column","gap":"28px"}}>
    <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(32px,6.4vw,56px)","lineHeight":".95","letterSpacing":"-.03em"}}>Questions people ask.</h2>
    <div style={{"display":"flex","flexDirection":"column","borderTop":"3px solid #111110"}}>
      
      {FAQS.map((f, fIdx) => (<Fragment key={fIdx}><details data-rv="up" data-d={String((fIdx + 1) * 0.05)} style={{"borderBottom":"1px solid #111110"}}><summary style={{"listStyle":"none","cursor":"pointer","padding":"20px 0","display":"flex","justifyContent":"space-between","gap":"16px","fontWeight":"800","fontSize":"clamp(17px,2.4vw,21px)"}}>{f.q}<span style={{"color":"#2F6BFF","fontSize":"26px","lineHeight":".9"}}>+</span></summary><p style={{"margin":"0 0 20px","color":"#3b3a36","fontSize":"17px"}}>{f.a}</p></details></Fragment>))}
    </div>
  </div>
</section>

<section data-final="" id="get-video" style={{"padding":"clamp(64px,10vw,112px) 20px","background":"#111110","color":"#fff"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","display":"flex","flexWrap":"wrap","gap":"clamp(28px,5vw,64px)","alignItems":"center"}}>
    <div style={{"containerType":"inline-size","flex":"1 1 380px","minWidth":"0","display":"flex","flexDirection":"column","gap":"20px"}}>
      <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(32px,10cqi,64px)","lineHeight":".92","letterSpacing":"-.03em","textWrap":"balance"}}>Ten videos a week. <span style={{"color":"#6f98ff"}}>First in, first served.</span></h2>
      <p data-rv="up" data-d=".1" style={{"margin":"0","fontSize":"18px","color":"#d4d1c8","textWrap":"pretty","maxWidth":"520px"}}>Within 48 hours you get a short video of your own Google Maps position, street by street: who&apos;s beating you, and the three things I&apos;d fix first.</p>
      <div data-rv="up" data-d=".2" style={{"display":"flex","flexDirection":"column","gap":"10px","maxWidth":"420px"}}>
        <div style={{"display":"flex","justifyContent":"space-between","fontFamily":"var(--font-jb),monospace","fontSize":"12px","letterSpacing":".1em","color":"#b8b5ac"}}><span>THIS WEEK</span><span style={{"color":"#fff"}}>10 VIDEOS</span></div>
        <div style={{"display":"grid","gridTemplateColumns":"repeat(10,minmax(0,1fr))","gap":"4px"}}>
          {spotBars.map((b, bIdx) => (<Fragment key={bIdx}>
            <div data-rv="grow" data-o="50% 100%" data-d={b.d} style={{"height":"28px","background":`${b.bg}`}}></div>
          </Fragment>))}
        </div>
      </div>
    </div>
    <div style={{"flex":"1 1 380px","minWidth":"0","maxWidth":"560px"}}>
      <div data-rv="up" data-d=".15" style={{"background":"#fff","color":"#111110","border":"3px solid #fff","boxShadow":"10px 10px 0 #2F6BFF","padding":"clamp(16px,4vw,24px)"}}><LeadForm variant="home-final" />
      </div>
      <div style={{"fontSize":"15px","marginTop":"22px","color":"#d4d1c8"}}>Rather talk now? <a href="https://calendar.notion.com/meet/mitchellgiles134/tovi31rm" style={{"color":"#6f98ff"}} rel="noopener noreferrer">Book a 30-minute call</a> or ring <a href="tel:0474870535" style={{"color":"#6f98ff"}}>0474 870 535</a></div>
    </div>
  </div>
</section>

<section id="location" style={{"padding":"clamp(56px,9vw,96px) 20px","background":"#f3f1ec"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","display":"flex","flexDirection":"column","gap":"40px"}}>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"32px","alignItems":"flex-end","justifyContent":"space-between"}}>
      <div style={{"display":"flex","flexDirection":"column","gap":"12px","maxWidth":"560px"}}>
        <h2 data-rv="up" style={{"margin":"0","fontStretch":"125%","fontWeight":"900","fontSize":"clamp(28px,5vw,48px)","lineHeight":".95","letterSpacing":"-.03em"}}>Ormeau, northern Gold Coast.</h2>
        <p data-rv="up" data-d=".1" style={{"margin":"0","color":"#3b3a36","fontSize":"17px"}}>Between the Gold Coast and Brisbane. Most work happens online, and if you&apos;re nearby I&apos;m happy to come to you.</p>
      </div>
      <div data-rv="up" data-d=".15" style={{"display":"flex","flexDirection":"column","gap":"6px","fontWeight":"700"}}>
        <span>9 Laverton St, Ormeau QLD 4208</span>
        <a href="tel:0474870535">0474 870 535</a>
        <a href="https://www.google.com/maps/search/?api=1&amp;query=MRG%20Marketing&amp;query_place_id=ChIJI7me_LgPkWsRiuaYKm_2oqc" rel="noopener noreferrer">Open in Google Maps</a>
      </div>
    </div>
    <div data-rv="up" style={{"border":"3px solid #111110","boxShadow":"10px 10px 0 #2F6BFF","background":"#e6e3da","height":"clamp(300px,45vw,440px)"}}>
      <iframe src="https://www.google.com/maps?q=MRG%20Marketing%2C%209%20Laverton%20St%2C%20Ormeau%20QLD%204208&amp;z=15&amp;output=embed" width="100%" height="100%" style={{"border":"0","display":"block","width":"100%","height":"100%"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="MRG Marketing on Google Maps, 9 Laverton St, Ormeau"></iframe>
    </div>
    <div style={{"display":"flex","flexDirection":"column","gap":"12px"}}>
      <div style={{"fontFamily":"var(--font-jb),monospace","fontSize":"11px","letterSpacing":".14em","color":"#55534d"}}>AREAS WE SERVE</div>
      <div data-rv="up" style={{"display":"flex","flexWrap":"wrap","gap":"6px"}}>
        {areas.map((a, aIdx) => (<Fragment key={aIdx}>
          <Link className="hv3" href={a.href} style={{"border":"1px solid #111110","padding":"5px 10px","fontSize":"14px","color":"#111110","textDecoration":"none","background":"#fff"}}>{a.t}</Link>
        </Fragment>))}
      </div>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,200px),1fr))","gap":"28px","borderTop":"1px solid #111110","paddingTop":"28px"}}>
      {siteLinks.map((col, colIdx) => (<Fragment key={colIdx}>
        <div style={{"display":"flex","flexDirection":"column","gap":"8px"}}>
          <div style={{"fontFamily":"var(--font-jb),monospace","fontSize":"11px","letterSpacing":".14em","color":"#55534d"}}>{col.h}</div>
          {col.links.map((l, lIdx) => (<Fragment key={lIdx}>
            <Link className="hv4" href={l.href} style={{"color":"#111110","textDecoration":"none","fontWeight":"600","fontSize":"15px"}}>{l.t}</Link>
          </Fragment>))}
        </div>
      </Fragment>))}
    </div>
  </div>
</section>

</main>
<MobileBar />

<footer style={{"background":"#111110","color":"#b8b5ac","padding":"44px 20px 32px"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","display":"flex","flexDirection":"column","gap":"28px","fontSize":"14px"}}>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"28px","justifyContent":"space-between","alignItems":"flex-start"}}>
      <div style={{"display":"flex","flexDirection":"column","gap":"12px","maxWidth":"380px"}}>
        <img src="/images/home/mrg-marketing-logo-white.webp" alt="MRG Marketing" style={{"height":"30px","width":"auto","display":"block","alignSelf":"flex-start"}} loading="lazy" decoding="async" />
        <span>Local SEO, Google Business Profile and AI search for the Gold Coast and Brisbane.</span>
      </div>
      <div style={{"display":"flex","flexDirection":"column","gap":"6px"}}>
        <a href="mailto:mitchell@mrgmarketing.com.au" style={{"color":"#fff"}}>mitchell@mrgmarketing.com.au</a>
        <a href="tel:0474870535" style={{"color":"#fff"}}>0474 870 535</a>
        <span>9 Laverton St, Ormeau QLD 4208</span>
        <span>ABN 20 700 519 893</span>
      </div>
      <div style={{"display":"flex","flexDirection":"column","gap":"12px","alignItems":"flex-start"}}>
        <div style={{"display":"flex","flexWrap":"wrap","gap":"8px 16px"}}>
          <a href="https://www.instagram.com/mrgmarketing.agency" style={{"color":"#fff"}} rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61557011930635" style={{"color":"#fff"}} rel="noopener noreferrer">Facebook</a>
          <a href="https://www.linkedin.com/in/mrg-marketing/" style={{"color":"#fff"}} rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.youtube.com/channel/UCZA2c-THw-0CM6Z6TE2CPxA" style={{"color":"#fff"}} rel="noopener noreferrer">YouTube</a>
          <a href="https://www.tiktok.com/@mrg.marketing" style={{"color":"#fff"}} rel="noopener noreferrer">TikTok</a>
          <a href="https://x.com/MRG_MarketingAU" style={{"color":"#fff"}} rel="noopener noreferrer">X</a>
        </div>
        <a href="https://mygoldcoast.directory/business/mrg-marketing" title="MRG Marketing on My Gold Coast" style={{"display":"block"}} rel="noopener noreferrer"><img src="https://mygoldcoast.directory/images/badge-featured.png" alt="Featured on My Gold Coast" style={{"height":"52px","width":"auto","display":"block"}} loading="lazy" decoding="async" /></a>
      </div>
    </div>
    <div style={{"borderTop":"1px solid #3a3a38","paddingTop":"18px","display":"flex","flexWrap":"wrap","gap":"8px 20px","justifyContent":"space-between","fontSize":"13px"}}>
      <span>© 2026 MRG Marketing · Ormeau, Gold Coast · Established 2024</span>
      <span style={{"display":"flex","gap":"16px","flexWrap":"wrap"}}><Link href="/terms/" style={{"color":"#b8b5ac"}}>Terms</Link><Link href="/privacy/" style={{"color":"#b8b5ac"}}>Privacy</Link><span>MRG Marketing is not affiliated with Google.</span></span>
    </div>
  </div>
</footer>
    </div>
  );
}
