import { Link } from 'react-router-dom';

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
    <footer className="bg-slate-950 text-slate-50 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start">
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-slate-50">Mitchell Giles</h3>
            <p className="text-sm text-slate-400">Pipelines & leads for Aussie businesses.</p>
          </div>

          <div className="space-y-2 text-sm">
            <nav className="flex gap-3 text-slate-300">
              <Link to="/case-studies" className="hover:text-slate-100 transition-colors">
                Case Studies
              </Link>
              <span className="text-slate-600">·</span>
              <button onClick={() => scrollToSection('services')} className="hover:text-slate-100 transition-colors">
                Process
              </button>
              <span className="text-slate-600">·</span>
              <button onClick={onOpenModal} className="hover:text-slate-100 transition-colors">
                Contact
              </button>
            </nav>
            <p className="text-slate-400">MitchellGiles134@Gmail.com</p>
            <p className="text-slate-400">0474 870 535</p>
            <p className="text-slate-400">Gold Coast, QLD</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
