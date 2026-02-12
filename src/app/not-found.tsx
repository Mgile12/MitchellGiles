import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-gold font-serif mb-4">404</h1>
      <p className="text-xl text-slate-300 mb-8 font-sans">Page not found</p>
      <Link
        href="/"
        className="gold-flat-btn inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-semibold tracking-wide"
      >
        Back to Home
      </Link>
    </div>
  );
}
