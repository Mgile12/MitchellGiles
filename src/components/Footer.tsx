import { Footer as UIFooter } from '@/components/ui/footer';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
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
