import { Footer as UIFooter } from '@/components/ui/footer';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l16 16m0-16L4 20" />
  </svg>
);

export default function Footer({ onOpenModal }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <UIFooter
      logo={<img src="https://iili.io/fyI7mAB.png" alt="MG Logo" className="h-12 w-12 object-contain" />}
      brandName="Mitchell Giles"
      tagline="Pipelines & leads for Aussie businesses."
      mainLinks={[
        {
          href: '/case-studies',
          label: 'Case Studies',
        },
        {
          label: 'Process',
          onClick: () => scrollToSection('services'),
        },
        {
          label: 'Contact',
          onClick: onOpenModal,
        },
      ]}
      contactInfo={{
        email: 'MitchellGiles134@Gmail.com',
        phone: '0474 870 535',
        location: '82 Marine Parade, Southport QLD 4215',
      }}
      socialLinks={[
        {
          href: 'https://www.facebook.com/mitchell.giles.56',
          icon: <Facebook size={20} />,
          label: 'Facebook',
        },
        {
          href: 'https://www.instagram.com/mitcheeellgiles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          icon: <Instagram size={20} />,
          label: 'Instagram',
        },
        {
          href: 'https://x.com/MitchellGilesAu',
          icon: <XIcon size={20} />,
          label: 'X (Twitter)',
        },
        {
          href: 'https://www.linkedin.com/in/mitchellgiles-au',
          icon: <Linkedin size={20} />,
          label: 'LinkedIn',
        },
      ]}
      copyright={{
        text: `© ${new Date().getFullYear()} Mitchell Giles`,
        license: 'All rights reserved',
      }}
      bottomTagline="Built for speed & conversion. No agency fluff."
    />
  );
}
