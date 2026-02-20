"use client";

import React from "react";
import Image from "next/image";
import { LogoCarousel, type Logo } from "@/components/ui/logo-carousel";

function GoogleLogo(_props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/new-Google-Partner-logo-png-large-size.png"
        alt="Google Partner"
        width={160}
        height={80}
        className="object-contain max-h-16 md:max-h-24 w-auto"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

function MetaLogo(_props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/Met-Business-Partners.png"
        alt="Meta Business Partner"
        width={160}
        height={80}
        className="object-contain max-h-16 md:max-h-24 w-auto"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

function MailchimpLogo(_props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/Mailchimp-Partner-logo-mad-cat-marketing.png"
        alt="Mailchimp Partner"
        width={160}
        height={80}
        className="object-contain max-h-16 md:max-h-24 w-auto"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

function MondayCRMLogo(_props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/68ad9288ef124251014c5e7b_certification_badge-CRM_v1.png"
        alt="Monday.com CRM Pro Certified"
        width={100}
        height={100}
        className="object-contain max-h-20 md:max-h-28 w-auto"
        style={{ opacity: 0.85 }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

function ZapierLogo(_props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/ZapierLogo.png"
        alt="Zapier"
        width={160}
        height={80}
        className="object-contain max-h-12 md:max-h-16 w-auto"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

function BoltNewLogo(_props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/sponsor_boltnew.png"
        alt="Bolt.new"
        width={160}
        height={80}
        className="object-contain max-h-12 md:max-h-16 w-auto"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

const partnerLogos: Logo[] = [
  { name: "Google Partner", id: 1, img: GoogleLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
  { name: "Meta Business Partner", id: 2, img: MetaLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
  { name: "Mailchimp Partner", id: 3, img: MailchimpLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
  { name: "Monday CRM Pro", id: 4, img: MondayCRMLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
  { name: "Zapier", id: 5, img: ZapierLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
  { name: "Bolt.new", id: 6, img: BoltNewLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
];

export default function PartnerBadges() {
  return (
    <section className="bg-[#0a0e1a] py-16 md:py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-10">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] mb-3">
              Certified Partnerships
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Trusted By The Platforms That Matter
            </h2>
            <p className="mt-3 text-white/50 text-sm max-w-md mx-auto">
              Certified and trusted across the platforms that power modern business growth.
            </p>
          </div>

          <div className="flex items-center justify-center w-full">
            <LogoCarousel columnCount={3} logos={partnerLogos} />
          </div>
        </div>
      </div>
    </section>
  );
}
