import AnimateOnScroll from '@/components/AnimateOnScroll';

const adTypes = [
  {
    title: 'Google Ads',
    description: 'Capture high-intent searches from people actively looking for your service. Target by keyword, location, and device to reach Gold Coast prospects at the moment they need you.',
  },
  {
    title: 'Meta Ads',
    description: 'Build awareness and generate leads from Facebook and Instagram. Interest-based targeting, lookalike audiences, and retargeting that fills the top of your funnel.',
  },
  {
    title: 'Retargeting',
    description: 'Re-engage website visitors who did not convert. Stay in front of warm prospects across Google, Facebook, and Instagram until they are ready to take action.',
  },
  {
    title: 'Landing Page Strategy',
    description: 'Dedicated landing pages built for conversion. Clear messaging, strong offers, and friction-free forms that turn ad clicks into qualified leads.',
  },
];

export default function LeadGenPaidAds() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Paid Advertising
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Paid Ads That Generate Qualified Leads
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Paid advertising is the fastest way to fill your pipeline. But speed without strategy just burns money.
              Here is how we approach it.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {adTypes.map((item, index) => (
            <AnimateOnScroll
              key={index}
              stagger={index + 1}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                <span className="text-gold font-bold text-sm font-serif">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-serif">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">{item.description}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
