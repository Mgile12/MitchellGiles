"use client";

import React from "react";
import Image from "next/image";
import { LogoCarousel, type Logo } from "@/components/ui/logo-carousel";

function GoogleLogo() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/new-Google-Partner-logo-png-large-size.png"
        alt="Google Partner"
        width={180}
        height={90}
        className="object-contain max-h-14 md:max-h-20 w-auto"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

function MetaLogo() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/Met-Business-Partners.png"
        alt="Meta Business Partner"
        width={180}
        height={90}
        className="object-contain max-h-14 md:max-h-20 w-auto"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

function MailchimpLogo() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/Mailchimp-Partner-logo-mad-cat-marketing.png"
        alt="Mailchimp Partner"
        width={180}
        height={90}
        className="object-contain max-h-14 md:max-h-20 w-auto"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

function MondayCRMLogo() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/68ad9288ef124251014c5e7b_certification_badge-CRM_v1 copy.png"
        alt="Monday.com CRM Pro Certified"
        width={180}
        height={180}
        className="object-contain max-h-14 md:max-h-20 w-auto"
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

function ZapierLogo() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/ZapierLogo copy.png"
        alt="Zapier"
        width={180}
        height={90}
        className="object-contain max-h-10 md:max-h-16 w-auto"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

function BoltLogo() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/sponsor_boltnew copy.png"
        alt="bolt.new"
        width={180}
        height={90}
        className="object-contain max-h-10 md:max-h-16 w-auto"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
    </div>
  ) as unknown as React.ReactElement<SVGSVGElement>;
}

const partnerLogos: Logo[] = [
  { name: "Google Partner", id: 1, img: GoogleLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
  { name: "Meta Business Partner", id: 2, img: MetaLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
  { name: "Mailchimp Partner", id: 3, img: MailchimpLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
  { name: "Monday.com CRM Pro", id: 4, img: MondayCRMLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
  { name: "Zapier", id: 5, img: ZapierLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
  { name: "bolt.new", id: 6, img: BoltLogo as React.ComponentType<React.SVGProps<SVGSVGElement>> },
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
              Accredited as an official partner across Google, Meta, and Mailchimp — so you know your campaigns are in qualified hands.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <LogoCarousel logos={partnerLogos} columnCount={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
