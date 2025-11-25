import { Link } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <header className="bg-slate-50 border-b border-slate-200">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="text-lg font-semibold text-slate-900 hover:text-orange-500 transition-colors duration-200">
          Mitchell Giles Marketing
        </Link>
      </nav>
    </header>
  );
}
