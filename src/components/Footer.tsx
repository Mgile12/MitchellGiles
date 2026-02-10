import { Footer as UIFooter } from '@/components/ui/footer';

interface FooterProps {
  onOpenModal: () => void;
}

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
        location: 'Gold Coast, QLD',
      }}
      copyright={{
        text: `© ${new Date().getFullYear()} Mitchell Giles`,
        license: 'All rights reserved',
      }}
      bottomTagline="Built for speed & conversion. No agency fluff."
    />
  );
}
