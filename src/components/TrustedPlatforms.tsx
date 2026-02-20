import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

const partners = [
  {
    src: '/new-Google-Partner-logo-png-large-size copy.png',
    alt: 'Google Partner',
    width: 120,
    bordered: false,
  },
  {
    src: '/Met-Business-Partners copy.png',
    alt: 'Meta Business Partner',
    width: 180,
    bordered: false,
  },
  {
    src: '/Mailchimp-Partner-logo-mad-cat-marketing copy.png',
    alt: 'Mailchimp Partner',
    width: 160,
    bordered: true,
  },
];

export default function TrustedPlatforms() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Certified Partnerships
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              Trusted By The Platforms That Matter
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Accredited as an official partner across Google, Meta, and Mailchimp — so you know your campaigns are in qualified hands.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20">
            {partners.map((partner) => (
              <div
                key={partner.alt}
                className={`flex items-center justify-center ${
                  partner.bordered
                    ? 'border border-white/30 rounded-xl px-6 py-4'
                    : ''
                }`}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={80}
                  className="object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                  style={{ maxHeight: '80px', width: 'auto' }}
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
