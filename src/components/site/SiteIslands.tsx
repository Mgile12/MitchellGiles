'use client';

import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';

const MONO = 'var(--font-jb),monospace';
const BLUE = '#2F6BFF';
const INK = '#111110';

const NAV_LINKS: { label: string; mobileLabel?: string; href: string }[] = [
  { label: 'Services', href: '/services/' },
  { label: 'Case studies', href: '/case-studies/' },
  { label: 'Areas', mobileLabel: 'Areas we serve', href: '/areas/' },
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

/** Sticky header. Desktop links stay in the HTML on every width; the phone menu opens under 860px. */
export function HomeNav() {
  const [open, setOpen] = useState(false);
  const row: CSSProperties = { color: INK, textDecoration: 'none', padding: '14px 20px', borderBottom: '1px solid #d9d6cd' };
  return (
    <header
      data-scrub="page"
      style={{ position: 'sticky', top: 0, zIndex: 60, background: 'rgba(243,241,236,.94)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderBottom: `1px solid ${INK}` }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <Link href="/" style={{ display: 'block', flex: 'none' }}>
          <img src="/images/home/mrg-marketing-logo-black.webp" width={64} height={30} alt="MRG Marketing" style={{ height: 30, width: 'auto', display: 'block' }} />
        </Link>
        <nav className="only-wide-flex" aria-label="Main" style={{ alignItems: 'center', gap: 22, fontWeight: 700, fontSize: 15 }}>
          {NAV_LINKS.map((l) =>
            l.href.startsWith('#') ? (
              <a key={l.href} href={l.href} className="hv-blue-text" style={{ color: INK, textDecoration: 'none' }}>{l.label}</a>
            ) : (
              <Link key={l.href} href={l.href} className="hv-blue-text" style={{ color: INK, textDecoration: 'none' }}>{l.label}</Link>
            ),
          )}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href="#get-video" className="hv-ink-bg s-nav-cta" style={{ height: 44, padding: '0 16px', display: 'inline-flex', alignItems: 'center', background: BLUE, color: '#fff', textDecoration: 'none', fontStretch: '125%', fontWeight: 800, fontSize: 15, whiteSpace: 'nowrap' }}>
            Get my map video
          </a>
          <button
            type="button"
            className="only-narrow-flex"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            style={{ width: 44, height: 44, border: `1px solid ${INK}`, background: '#fff', cursor: 'pointer', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, padding: 0 }}
          >
            <span style={{ width: 18, height: 2, background: INK }} /><span style={{ width: 18, height: 2, background: INK }} /><span style={{ width: 18, height: 2, background: INK }} />
          </button>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 3, background: BLUE, transformOrigin: '0 50%', transform: 'scaleX(var(--p,0))' }} />
      {open && (
        <nav aria-label="Mobile" className="only-narrow-flex" style={{ borderTop: `1px solid ${INK}`, background: '#fff', flexDirection: 'column', fontWeight: 800, fontSize: 18 }}>
          {NAV_LINKS.map((l) =>
            l.href.startsWith('#') ? (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={row}>{l.mobileLabel ?? l.label}</a>
            ) : (
              <Link key={l.href} href={l.href} style={row}>{l.mobileLabel ?? l.label}</Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}

/** Thumbnail first, player only once tapped, so the videos cost nothing on page load. */
export function PlayVideo({ embed, title, label, children }: { embed: string; title: string; label: string; children: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  if (playing) {
    return <iframe src={embed} title={title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }} />;
  }
  return (
    <button type="button" onClick={() => setPlaying(true)} aria-label={label} style={{ position: 'absolute', inset: 0, border: 0, padding: 0, margin: 0, background: 'none', cursor: 'pointer', display: 'block', width: '100%', height: '100%' }}>
      {children}
    </button>
  );
}

const FIELD: CSSProperties = { height: 50, border: `2px solid ${INK}`, borderRadius: 0, padding: '0 14px', font: 'inherit', fontSize: 16, background: '#fff', color: INK, width: '100%', outline: 'none' };
const LABEL: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 6 };
const LABEL_TEXT: CSSProperties = { fontSize: 13, fontWeight: 700 };

/**
 * The map video form. It posts to the same Netlify form as /free-map-video/, so every lead lands in one list
 * and `variant` says where it came from. Netlify registers the form from that page's HTML at deploy time, which
 * is why this one carries no data-netlify attribute: Netlify rewriting React's HTML would break hydration.
 * Keep /free-map-video/ (or another static copy of the form) in the build, or these submissions stop working.
 */
export function LeadForm({ variant, hero = false, searchHint = 'e.g. plumber Coomera' }: { variant: string; hero?: boolean; searchHint?: string }) {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  // A lead from either form closes both, so nobody is asked twice
  useEffect(() => {
    const done = () => setState('done');
    window.addEventListener('mrg-lead-sent', done);
    return () => window.removeEventListener('mrg-lead-sent', done);
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('sending');
    const data = new FormData(e.currentTarget);
    const q = new URLSearchParams(window.location.search);
    data.set('utm_campaign', q.get('utm_campaign') ?? '');
    data.set('utm_content', q.get('utm_content') ?? '');
    try {
      const body = new URLSearchParams(data as unknown as Record<string, string>).toString();
      const r = await fetch('/free-map-video/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
      if (!r.ok) throw new Error(`form ${r.status}`);
      window.dispatchEvent(new Event('mrg-lead-sent'));
      const w = window as unknown as { fbq?: (...a: unknown[]) => void; gtag?: (...a: unknown[]) => void };
      w.fbq?.('track', 'Lead');
      w.gtag?.('event', 'generate_lead', { form: 'map-video', variant });
    } catch {
      setState('error');
    }
  };

  if (state === 'done') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '6px 0' }}>
        <div style={{ fontStretch: '125%', fontWeight: 900, fontSize: 30, lineHeight: 1 }}>You&apos;re in. <span style={{ color: BLUE }}>Cheers.</span></div>
        <p style={{ margin: 0, color: '#3b3a36' }}>I&apos;ll text you the link to your map video within 48 hours.</p>
      </div>
    );
  }

  return (
    <form name="map-video" method="POST" action="/free-map-video/" onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: 0 }}>
      <input type="hidden" name="form-name" value="map-video" />
      <input type="hidden" name="variant" value={variant} />
      <input type="hidden" name="utm_campaign" value="" />
      <input type="hidden" name="utm_content" value="" />
      <p style={{ position: 'absolute', left: -9999 }} aria-hidden="true"><label>Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label></p>
      {hero && <div style={{ fontStretch: '125%', fontWeight: 900, fontSize: 20, lineHeight: 1.1 }}>Free: your Google Maps position, on video.</div>}
      <label style={LABEL}><span style={LABEL_TEXT}>Your business</span><input className="mrg-input" required name="biz" autoComplete="organization" enterKeyHint="next" placeholder="Business name or Google profile link" style={FIELD} /></label>
      <label style={LABEL}><span style={LABEL_TEXT}>The search you want to win</span><input className="mrg-input" required name="search" autoComplete="off" enterKeyHint="next" placeholder={searchHint} style={FIELD} /></label>
      <label style={LABEL}><span style={LABEL_TEXT}>Mobile</span><input className="mrg-input" required name="mobile" type="tel" inputMode="tel" autoComplete="tel" enterKeyHint="send" placeholder="04xx xxx xxx" style={FIELD} /></label>
      <button type="submit" disabled={state === 'sending'} className="hv-ink-bg" style={{ height: 62, border: 0, background: BLUE, color: '#fff', font: 'inherit', fontStretch: '125%', fontWeight: 800, fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        {hero ? 'Get my free map video' : 'Send me my map video'} <span style={{ fontSize: 22 }}>→</span>
      </button>
      {state === 'error' && (
        <p role="alert" style={{ margin: 0, fontSize: 14, color: '#b3261e', fontWeight: 700 }}>
          That didn&apos;t send. Try again, or ring me on <a href={`tel:${BUSINESS_INFO.phoneFormatted}`}>{BUSINESS_INFO.phone}</a>.
        </p>
      )}
      <p style={{ margin: 0, fontSize: 14, textAlign: 'center', color: '#3b3a36', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
        {hero && <span style={{ width: 8, height: 8, borderRadius: '50%', background: BLUE, animation: 'mrgPulse 2s infinite' }} />}
        No discovery call unless you ask.{hero && <> <strong style={{ color: INK }}>10 a week.</strong></>}
      </p>
      <p style={{ margin: 0, fontSize: 12, textAlign: 'center', color: '#55534d' }}>
        How I handle your details: <Link href="/privacy/">privacy policy</Link>
      </p>
    </form>
  );
}

const aud = (n: number) => '$' + Math.round(n).toLocaleString('en-AU');
const whole = (n: number) => String(Math.round(n));

/** Eases the shown number towards the latest calculation. */
function Tween({ value, format = whole }: { value: number; format?: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const shown = useRef(value);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      shown.current = value;
      el.textContent = format(value);
      return;
    }
    let raf = 0;
    const step = () => {
      shown.current += (value - shown.current) * 0.14;
      if (Math.abs(value - shown.current) < Math.max(Math.abs(value) * 0.002, 0.5)) shown.current = value;
      el.textContent = format(shown.current);
      if (shown.current !== value) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, format]);
  return <span ref={ref}>{format(value)}</span>;
}

/** Project maths: the visitor's own numbers. An estimate, never MRG's price. */
export function HomeCalculator() {
  const [calls, setCalls] = useState<number | ''>(20);
  const [value, setValue] = useState<number | ''>(800);
  const [close, setClose] = useState(30);
  const [mult, setMult] = useState(2);
  const [spend, setSpend] = useState<number | ''>('');

  const num = (set: (v: number | '') => void) => (e: { target: { value: string } }) =>
    set(e.target.value === '' ? '' : Math.max(0, Number(e.target.value)));

  const c = Number(calls) || 0;
  const v = Number(value) || 0;
  const s = Number(spend) || 0;
  const newCalls = Math.round(c * mult);
  const extra = newCalls - c;
  const jobs = Math.round((extra * close) / 100);
  const rev = jobs * v;

  const box: CSSProperties = { ...FIELD, fontSize: 18, fontWeight: 700 };
  const big: CSSProperties = { fontStretch: '125%', fontWeight: 900, fontSize: 'clamp(32px,5vw,52px)', lineHeight: 1, fontVariantNumeric: 'tabular-nums' };
  const sub: CSSProperties = { color: '#d4d1c8', fontSize: 14 };
  const strong: CSSProperties = { fontWeight: 800 };
  const hint: CSSProperties = { fontSize: 14, color: '#55534d' };
  const slider: CSSProperties = { display: 'flex', justifyContent: 'space-between', gap: 12, fontWeight: 800 };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, alignItems: 'stretch', border: `3px solid ${INK}` }}>
      <div style={{ flex: '1 1 380px', minWidth: 0, background: '#fff', padding: 'clamp(18px,4vw,32px)', display: 'flex', flexDirection: 'column', gap: 22 }}>
        <label style={LABEL}><span style={strong}>Calls from Google a month, right now</span><span style={hint}>Your Business Profile shows this under Performance. Guess if you have to.</span><input className="mrg-input" type="number" inputMode="numeric" min={0} value={calls} onChange={num(setCalls)} style={box} /></label>
        <label style={LABEL}><span style={strong}>Average job value ($)</span><span style={hint}>What a typical job is worth to you.</span><input className="mrg-input" type="number" inputMode="numeric" min={0} value={value} onChange={num(setValue)} style={box} /></label>
        <label style={{ ...LABEL, gap: 8 }}><span style={slider}><span>Calls that become jobs</span><span style={{ color: BLUE }}>{close}%</span></span><input type="range" min={5} max={80} step={5} value={close} onChange={(e) => setClose(Number(e.target.value))} style={{ width: '100%' }} /></label>
        <label style={{ ...LABEL, gap: 8 }}>
          <span style={slider}><span>Calls at a top-3 position</span><span style={{ color: BLUE }}>{mult === 2 ? '2x (conservative)' : `${mult}x`}</span></span>
          <input type="range" min={1} max={4} step={0.5} value={mult} onChange={(e) => setMult(Number(e.target.value))} style={{ width: '100%' }} />
          <span style={{ display: 'flex', justifyContent: 'space-between', fontFamily: MONO, fontSize: 11, color: '#55534d' }}><span>1x</span><span>2x</span><span>3x</span><span>4x</span></span>
        </label>
        <label style={LABEL}><span style={strong}>What you&apos;d spend a month on this <span style={{ fontWeight: 400, color: '#55534d' }}>(optional)</span></span><span style={hint}>Your own budget, not my price. Leave blank for revenue only.</span><input className="mrg-input" type="number" inputMode="numeric" min={0} placeholder="e.g. 1500" value={spend} onChange={num(setSpend)} style={box} /></label>
      </div>
      <div style={{ flex: '1 1 340px', minWidth: 0, background: INK, color: '#fff', padding: 'clamp(18px,4vw,32px)', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '.14em', color: '#b8b5ac' }}>AT A TOP-3 POSITION</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 18, borderBottom: '1px solid #3a3a38', paddingBottom: 18 }}>
          <div><div style={big}><Tween value={newCalls} /></div><div style={sub}>calls a month, up from {c}</div></div>
          <div><div style={big}><Tween value={jobs} /></div><div style={sub}>extra jobs, from {extra} extra calls</div></div>
        </div>
        <div><div style={sub}>Extra revenue a month</div><div style={{ ...big, fontSize: 'clamp(40px,7vw,68px)', color: '#6f98ff' }}><Tween value={rev} format={aud} /></div></div>
        <div><div style={sub}>Extra revenue a year</div><div style={{ ...big, fontSize: 'clamp(40px,7vw,68px)' }}><Tween value={rev * 12} format={aud} /></div></div>
        {s > 0 && <div style={{ border: '1px solid #fff', padding: '12px 14px', fontWeight: 700 }}>Every $1 spent returns about <span style={{ color: '#6f98ff' }}>${(rev / s).toFixed(2)}</span> a month.</div>}
        <a href="#get-video" className="hv-white-bg" style={{ marginTop: 'auto', height: 56, background: BLUE, color: '#fff', textDecoration: 'none', fontStretch: '125%', fontWeight: 800, fontSize: 17, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          See where you stand now <span style={{ fontSize: 20 }}>→</span>
        </a>
      </div>
    </div>
  );
}

/**
 * Phone-only button. Hidden while a form is on screen. On pages with the 12-week grid (the homepage) it stays
 * hidden from the top of the page until the visitor has scrolled past the end of the grid.
 */
export function MobileBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const forms = [document.querySelector('[data-hero-form]'), document.querySelector('[data-final]')].filter(Boolean) as Element[];
    const story = document.querySelector('[data-scrub="sticky"]');
    let pending = false;
    const check = () => {
      pending = false;
      const vh = window.innerHeight;
      const passedStory = !story || story.getBoundingClientRect().bottom <= 0;
      const formOnScreen = forms.some((f) => {
        const r = f.getBoundingClientRect();
        return r.bottom > 0 && r.top < vh;
      });
      setShow(passedStory && !formOnScreen);
    };
    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(check);
    };
    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return (
    <div className="only-narrow-block" style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50, padding: '10px 12px calc(10px + env(safe-area-inset-bottom))', background: '#f3f1ec', borderTop: `1px solid ${INK}`, transform: show ? 'translateY(0)' : 'translateY(110%)', transition: 'transform .3s ease' }}>
      <a href="#get-video" tabIndex={show ? 0 : -1} style={{ width: '100%', height: 56, background: BLUE, color: '#fff', textDecoration: 'none', fontStretch: '125%', fontWeight: 800, fontSize: 17, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        Get my free map video <span style={{ fontSize: 20 }}>→</span>
      </a>
    </div>
  );
}

const HIDE: Record<string, string> = { up: 'translate3d(0,36px,0)', left: 'translate3d(-44px,0,0)', right: 'translate3d(44px,0,0)', scale: 'scale(.9)' };
const DEMO = [
  { q: 'plumber coomera', src: 'GOOGLE MAPS', ai: false },
  { q: 'physio near me', src: 'GOOGLE MAPS', ai: false },
  { q: 'who should I call for blocked drains in Ormeau?', src: 'CHATGPT', ai: true },
  { q: 'landscaper upper coomera', src: 'GOOGLE MAPS', ai: false },
  { q: 'best wedding makeup on the gold coast?', src: 'GEMINI', ai: true },
];

function formatNum(v: number, el: HTMLElement) {
  const f = el.dataset.fmt;
  let s: string;
  if (f === 'aud') s = aud(v);
  else if (f === 'aud2') s = '$' + v.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  else if (f === 'x') s = v.toFixed(1) + 'x';
  else if (f === 'd1') s = v.toFixed(1);
  else s = Math.round(v).toLocaleString('en-AU');
  return (el.dataset.pre ?? '') + s + (el.dataset.suf ?? '');
}

/**
 * All the scroll motion from the design, in one place. The page's text is complete in the HTML without this:
 * nothing above the fold is ever hidden, and anything below it is only hidden after this has run.
 */
export function HomeMotion() {
  useEffect(() => {
    const root = document.querySelector('.mrg-home');
    if (!root) return;
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const all = (sel: string) => Array.from(root.querySelectorAll<HTMLElement>(sel));
    const observers: IntersectionObserver[] = [];
    const H = () => window.innerHeight;

    // Reveals
    const hide = (el: HTMLElement) => {
      const m = el.dataset.rv || 'up';
      if (m === 'clip') el.style.clipPath = 'inset(0 0 100% 0)';
      else if (m === 'grow') el.style.transform = el.dataset.o === '50% 100%' ? 'scaleY(0)' : 'scaleX(0)';
      else { el.style.opacity = '0'; el.style.transform = HIDE[m] ?? HIDE.up; }
    };
    const show = (el: HTMLElement) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      if (el.dataset.rv === 'clip') el.style.clipPath = 'inset(0 0 0 0)';
    };
    if (!still) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) show(el);
          else if (e.boundingClientRect.top > H()) hide(el);
        }),
        { rootMargin: '0px 0px -10% 0px' },
      );
      observers.push(io);
      const below = all('[data-rv]').filter((el) => !el.closest('.mrg-rise') && el.getBoundingClientRect().top > H());
      below.forEach((el) => {
        if (el.dataset.rv === 'grow') el.style.transformOrigin = el.dataset.o || '0 50%';
        hide(el);
      });
      void document.body.offsetWidth;
      below.forEach((el) => {
        el.style.transition = 'opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1),clip-path 1.1s cubic-bezier(.7,0,.2,1)';
        el.style.transitionDelay = `${el.dataset.d ?? 0}s`;
        io.observe(el);
      });
    }

    // Everything that runs per frame only runs while it is on screen
    const active = new Set<(dt: number) => void>();
    let raf = 0;
    let last = 0;
    const loop = (now: number) => {
      const dt = Math.min(0.1, (now - (last || now)) / 1000);
      last = now;
      active.forEach((fn) => fn(dt));
      raf = active.size ? requestAnimationFrame(loop) : 0;
      if (!raf) last = 0;
    };
    const wake = () => { if (!raf && active.size) raf = requestAnimationFrame(loop); };
    const whileVisible = (el: Element, fn: (dt: number) => void) => {
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { active.add(fn); wake(); } else active.delete(fn);
      });
      io.observe(el);
      observers.push(io);
    };

    // Counting numbers
    if (!still) {
      all('[data-num]').forEach((el) => {
        const target = parseFloat(el.dataset.target ?? '0');
        const from = parseFloat(el.dataset.from ?? '0');
        let v = from;
        const io = new IntersectionObserver(([e]) => {
          if (e.isIntersecting) {
            const step = (dt: number) => {
              v += (target - v) * Math.min(1, dt * 2.6);
              if (Math.abs(target - v) < Math.max(Math.abs(target - from) * 0.002, 0.02)) { v = target; active.delete(step); }
              el.textContent = formatNum(v, el);
            };
            active.add(step);
            wake();
          } else if (e.boundingClientRect.top > H()) {
            v = from;
          }
        });
        io.observe(el);
        observers.push(io);
      });
    }

    // The ad-spend ticker
    all('[data-tick]').forEach((el) => {
      let t = 0;
      whileVisible(el, (dt) => { t += parseFloat(el.dataset.rate ?? '0') * dt; el.textContent = formatNum(t, el); });
    });

    // The animated search demo
    const d = root.querySelector<HTMLElement>('[data-demo]');
    if (d) {
      const set = (sel: string, fn: (e: HTMLElement) => void) => d.querySelectorAll<HTMLElement>(sel).forEach(fn);
      let T = still ? 6 : 0;
      const paint = (dt: number) => {
        T += still ? 0 : dt;
        const L = 7, q = DEMO[Math.floor(T / L) % DEMO.length], t = T % L;
        const typeEnd = 0.3 + q.q.length * 0.055, n = Math.max(0, Math.min(q.q.length, Math.floor((t - 0.3) / 0.055)));
        const res = t > typeEnd + 0.3, rise = t > typeEnd + 1.3, pop = t > typeEnd + 2.1;
        set('[data-demo-q]', (e) => { const s = q.q.slice(0, n); if (e.textContent !== s) e.textContent = s; });
        set('[data-demo-src]', (e) => { if (e.textContent !== q.src) e.textContent = q.src; });
        set('[data-demo-maps]', (e) => { e.style.opacity = q.ai ? '0' : '1'; });
        set('[data-demo-ai]', (e) => { e.style.opacity = q.ai ? '1' : '0'; });
        set('[data-demo-ans]', (e) => { e.style.opacity = res ? '1' : '0'; e.style.transform = res ? 'none' : 'translateY(10px)'; });
        set('[data-demo-row]', (e) => { const b = Number(e.dataset.demoRow), pos = rise ? (b === 2 ? 0 : b + 1) : b; e.style.transform = `translateY(${pos * 78 + (res ? 0 : 12)}px)`; e.style.opacity = res ? '1' : '0'; });
        set('[data-demo-pop]', (e) => { e.style.opacity = pop && !q.ai ? '1' : '0'; e.style.transform = pop ? 'scale(1)' : 'scale(.5)'; });
      };
      paint(0);
      if (!still) whileVisible(d, paint);
    }

    // Scroll-linked parts: page progress bar, the 12-week grid, the 90-day line, image parallax
    const scrubs = all('[data-scrub]');
    const pars = still ? [] : all('[data-par]');
    let pending = false;
    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        const vh = H();
        scrubs.forEach((el) => {
          const r = el.getBoundingClientRect(), mode = el.dataset.scrub;
          let p: number;
          if (mode === 'page') p = window.scrollY / Math.max(1, document.documentElement.scrollHeight - vh);
          else if (r.bottom < -vh || r.top > vh * 2) return;
          else if (mode === 'sticky') p = -r.top / Math.max(1, r.height - vh);
          else p = (vh * 0.65 - r.top) / Math.max(1, r.height);
          p = Math.max(0, Math.min(1, p));
          el.style.setProperty('--p', p.toFixed(4));
          el.querySelectorAll<HTMLElement>('[data-pnum]').forEach((n) => {
            const a = parseFloat(n.dataset.min ?? '0'), b = parseFloat(n.dataset.max ?? '0');
            n.textContent = (n.dataset.pre ?? '') + Math.round(a + (b - a) * Math.min(1, p * 1.12)) + (n.dataset.suf ?? '');
          });
        });
        pars.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) return;
          const c = (r.top + r.height / 2 - vh / 2) / vh;
          el.style.transform = `translate3d(0,${(c * parseFloat(el.dataset.par ?? '0')).toFixed(1)}px,0)`;
        });
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      observers.forEach((o) => o.disconnect());
      active.clear();
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return null;
}
