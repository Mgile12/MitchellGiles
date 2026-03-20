"use client";

import React from "react";
import Image from "next/image";
import { LogoCarousel, type Logo } from "@/components/ui/logo-carousel";

function MailchimpLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/Mailchimp-Partner-logo-mad-cat-marketing.png"
        alt="Mailchimp Partner"
        width={160}
        height={80}
        className="object-contain max-h-16 md:max-h-24 w-auto"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

function MetaLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/Met-Business-Partners.png"
        alt="Meta Business Partner"
        width={160}
        height={80}
        className="object-contain max-h-16 md:max-h-24 w-auto"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

function GoogleLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/new-Google-Partner-logo-png-large-size.png"
        alt="Google Partner"
        width={160}
        height={80}
        className="object-contain max-h-16 md:max-h-24 w-auto"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

const partnerLogos: Logo[] = [
  { name: "Mailchimp Partner", id: 1, img: MailchimpLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
  { name: "Meta Business Partner", id: 2, img: MetaLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
  { name: "Google Partner", id: 3, img: GoogleLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
];

export default function PartnerBadges() {
  return (
    <section className="bg-navy-950 py-16 md:py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-10">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Certified Partnerships
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Trusted By The Platforms That Matter
            </h3>
            <p className="mt-3 text-white/50 text-sm max-w-md mx-auto">
              Accredited as an official partner across Google, Meta, and Mailchimp — so you know your campaigns are in qualified hands.
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-8 md:gap-16 w-full">
            <div className="flex items-center justify-center h-16 md:h-24 w-36 md:w-48">
              <Image
                src="/new-Google-Partner-logo-png-large-size.png"
                alt="Google Partner"
                width={180}
                height={90}
                className="object-contain max-h-14 md:max-h-20 w-auto"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
              />
            </div>
            <div className="flex items-center justify-center h-16 md:h-24 w-36 md:w-48">
              <Image
                src="/Met-Business-Partners.png"
                alt="Meta Business Partner"
                width={180}
                height={90}
                className="object-contain max-h-14 md:max-h-20 w-auto"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
              />
            </div>
            <div className="flex items-center justify-center h-16 md:h-24 w-36 md:w-48">
              <Image
                src="/Mailchimp-Partner-logo-mad-cat-marketing.png"
                alt="Mailchimp Partner"
                width={180}
                height={90}
                className="object-contain max-h-14 md:max-h-20 w-auto"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
