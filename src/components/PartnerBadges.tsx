import React from "react";
import Image from "next/image";

const partners = [
  {
    src: "/new-Google-Partner-logo-png-large-size copy.png",
    alt: "Google Partner",
    width: 160,
    height: 100,
  },
  {
    src: "/Met-Business-Partners copy.png",
    alt: "Meta Business Partner",
    width: 200,
    height: 100,
  },
  {
    src: "/Mailchimp-Partner-logo-mad-cat-marketing copy.png",
    alt: "Mailchimp Partner",
    width: 180,
    height: 100,
  },
];

export default function PartnerBadges() {
  return (
    <section className="bg-[#070c18] py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.22em] uppercase mb-5">
          Certified Partnerships
        </p>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-[2.5rem] font-bold mb-4 leading-tight">
          Trusted By The Platforms That Matter
        </h2>
        <p className="text-white/50 text-base max-w-md mb-16 leading-relaxed">
          Accredited as an official partner across Google, Meta, and
          Mailchimp — so you know your campaigns are in qualified hands.
        </p>

        <div className="grid grid-cols-3 gap-6 sm:gap-10 lg:gap-16 w-full max-w-3xl items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.alt}
              className="flex items-center justify-center w-full py-2"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="object-contain w-auto max-h-[80px] sm:max-h-[100px] select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
