import Link from 'next/link';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, LinksSection, PageHero } from '@/components/site/Blocks';

const IMAGE = '/hardest-working-seo-expert-in-gold-coast.jpg';
const ALT = 'hardest working seo expert in gold coast';

export default function HardestWorkingContent() {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Hardest working SEO expert in Gold Coast' }]}
        kicker="Mitchell Giles, Ormeau"
        title={<>Hardest working SEO expert in <span className="s-accent">Gold Coast</span></>}
        lead={<>


              <p>
                My name is Mitchell Giles. If you just Googled &ldquo;hardest working SEO expert in Gold Coast&rdquo;, you
                found me. Hi.
              </p>
              <p>Who called me that? Well, I did. It is a solid headline.</p>
              <p>But stay a minute, because how this page got in front of you is the whole point.</p>

              
        </>}
        links={<Link href="/case-studies/">Read the case studies →</Link>}
        variant="hardest-working"
        image={{ src: IMAGE, alt: ALT, title: ALT, width: 1000, height: 1500 }}
      />

      <section className="s-sec s-white">
        <div className="s-wrap">
          <article data-rv="up" className="s-prose">
<h2>How this started</h2>
              <p>
                In 2026 I deleted an old page on this site about marketing in Ormeau. Months later it was still sitting at
                number three on Google for &ldquo;marketing consultant Ormeau&rdquo;, 404 and all. A page I had thrown
                away was outranking people who were trying. That told me something about how little competition there is
                for most local searches, and how much of the job is just doing the basics properly and not stopping.
              </p>
              <p>So I rebuilt it, then picked a phrase nobody else was chasing and built one page to own it. You are reading it.</p>

              <h2>What it takes to rank for anything</h2>
              <p>
                Ranking for a cheeky phrase and ranking a plumber in Pimpama run on the same rules. Pick the phrase people
                actually type. Build one page that answers it. Make sure Google can find that page and that your Business
                Profile says the same thing the page does. Point a few real links at it. Check the result, fix what is
                broken, repeat.
              </p>
              <p>
                That is it. The difference is competition. Nobody else wants this phrase. &ldquo;Plumber Southport&rdquo;
                has dozens of businesses fighting for the top three. Same rules, far more work. Which is where the hardest
                working part comes in.
              </p>

              <h2>Why &ldquo;hardest working&rdquo;</h2>
              <p>
                I run local SEO and Google Business Profiles for trades and local services, for my own clients and
                white-label for other agencies. Every profile gets worked every week: reviews answered, photos posted,
                services and categories kept straight, the website checked against the listing. Not once at the start.
                Every week, until the business sits in the top three on Google Maps, and then every week after that so it
                stays there.
              </p>
              <p>
                The numbers are on this site. Two plumbers went from 79 calls from Google in three months to 208. One
                profile went from number one at 5 of 49 map points to all 49 in five weeks. Two Gold Coast businesses went
                from page two to the top three on Maps in two and eleven days. Every figure is a screenshot with dates.
              </p>
              <p>Do the work. Show the result. Repeat.</p>

              <h2>So, is it true?</h2>
              <p>You found this page by Googling a phrase. This page came out on top. Draw your own conclusions.</p>
              <p>Now imagine that for the phrase your customers type when they need what you sell. That is the only job I do.</p>

              
          </article>
        </div>
      </section>

      <CtaSection title={<>Want this for <span className="s-accent">your business?</span></>} variant="hardest-working">
        <p>
          MRG Marketing gets Gold Coast and Brisbane businesses into the top three on Google for the searches that bring in customers. If you have read this far looking for the hardest working SEO expert in Gold Coast, tell me what you do and where. I will send you a short video of where you stand and what is realistic, and if I can&apos;t help, I will say so.
        </p>
      </CtaSection>

      <LinksSection title="Keep reading" intro="If the phrase got you here, this is the work behind it." current="/hardest-working-seo-expert-in-gold-coast/" />
    </SiteShell>
  );
}
