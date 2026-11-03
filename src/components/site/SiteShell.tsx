import type { ReactNode } from 'react';
import { Archivo, JetBrains_Mono } from 'next/font/google';
import { HomeMotion, HomeNav, MobileBar } from './SiteIslands';
import SiteFooter from './SiteFooter';
import './site.css';

const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-jb', display: 'swap' });

/**
 * Frame for every page in the new design: header, footer, phone button and scroll motion.
 * Add the page's path to MINIMAL_ROUTES in LayoutClient so the old header and footer stay off it.
 * The page must include a section with id="get-video" (the form), because the header button goes there.
 */
export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className={`${archivo.variable} ${jetbrains.variable}`}>
      <div className="mrg-home">
        <a href="#main" className="skip-link">Skip to content</a>
        <HomeMotion />
        <HomeNav />
        <main id="main" tabIndex={-1} style={{ outline: 'none' }}>
          {children}
        </main>
        <MobileBar />
        <SiteFooter />
      </div>
    </div>
  );
}
