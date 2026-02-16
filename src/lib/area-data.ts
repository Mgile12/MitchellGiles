export interface AreaFAQ {
  question: string;
  answer: string;
}

export interface AreaLandmark {
  name: string;
  time: string;
}

export interface AreaImage {
  src: string;
  alt: string;
}

export interface AreaPageData {
  name: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  heroH1: string;
  heroIntro: string[];
  whyDifferentTitle: string;
  whyDifferentIntro: string[];
  whyDifferentPoints: string[];
  whyChooseLocalAuthority: string[];
  servicesIntro: string;
  seoTargets: string[];
  ctaNearbyPlaces: string[];
  directions: string[];
  publicTransport: string[];
  landmarks: AreaLandmark[];
  faqItems: AreaFAQ[];
  images: AreaImage[];
  internalLinks: { href: string; label: string }[];
}
