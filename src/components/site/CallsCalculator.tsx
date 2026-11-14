'use client';

import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent } from 'react';
import { summarise, type ScanPoint } from '@/lib/calc-maths';

const MONO = 'var(--font-jb),monospace';
const BLUE = '#2F6BFF';
const INK = '#111110';
const GRID = 5;
const FN = '/.netlify/functions';
// Cloudflare Turnstile site key (public). Set NEXT_PUBLIC_TURNSTILE_SITE_KEY in Netlify; without it the check is skipped.
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

interface Turnstile {
  render: (el: HTMLElement, o: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
}
const turnstile = () => (window as unknown as { turnstile?: Turnstile }).turnstile;

const LABEL: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 6 };
const LABEL_TEXT: CSSProperties = { fontSize: 13, fontWeight: 700 };
const HINT: CSSProperties = { fontSize: 13, color: '#55534d' };
const FIELD: CSSProperties = { height: 50, border: `2px solid ${INK}`, borderRadius: 0, padding: '0 14px', font: 'inherit', fontSize: 16, background: '#fff', color: INK, width: '100%', outline: 'none' };
const BTN: CSSProperties = { minHeight: 60, padding: '8px 16px', border: 0, background: BLUE, color: '#fff', font: 'inherit', fontStretch: '125%', fontWeight: 800, fontSize: 'clamp(14px,4vw,18px)', lineHeight: 1.2, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 };
const KICKER: CSSProperties = { fontFamily: MONO, fontSize: 12, letterSpacing: '.14em', color: '#55534d', textTransform: 'uppercase' };
const BIG: CSSProperties = { fontStretch: '125%', fontWeight: 900, fontSize: 'clamp(34px,7vw,60px)', lineHeight: 0.95, letterSpacing: '-.03em', fontVariantNumeric: 'tabular-nums' };
const CARD: CSSProperties = { border: `3px solid ${INK}`, background: '#fff', padding: 'clamp(16px,3vw,24px)', display: 'flex', flexDirection: 'column', gap: 8 };
const ERR: CSSProperties = { margin: 0, fontSize: 14, fontWeight: 700, color: '#b3261e' };

interface Candidate { title: string; address: string; category: string; rating: number | null; reviews: number | null; token: string }
type Step = 'form' | 'finding' | 'pick' | 'scanning' | 'result';

const aud = (n: number) => `$${Math.round(n).toLocaleString('en-AU')}`;
const range = (a: number, b: number, f: (n: number) => string = String) => (a === b ? f(a) : `${f(a)} to ${f(b)}`);
const dot = (rank: number | null, failed?: boolean) =>
  failed ? { bg: '#e6e3da', fg: '#55534d' } : rank != null && rank <= 3 ? { bg: '#22b455', fg: '#fff' } : rank != null && rank <= 10 ? { bg: '#e9b72e', fg: INK } : { bg: '#e8443a', fg: '#fff' };

async function post<T>(fn: string, body: unknown): Promise<T> {
  const r = await fetch(`${FN}/${fn}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error((data as { error?: string }).error ?? `http ${r.status}`);
  return data as T;
}

export default function CallsCalculator() {
  const [step, setStep] = useState<Step>('form');
  const [error, setError] = useState('');
  const [biz, setBiz] = useState({ name: '', suburb: '', keyword: '' });
  const [calls, setCalls] = useState<number | ''>(20);
  const [value, setValue] = useState<number | ''>(800);
  const [close, setClose] = useState(30);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [chosen, setChosen] = useState<Candidate | null>(null);
  const [points, setPoints] = useState<ScanPoint[]>([]);
  const [rowsDone, setRowsDone] = useState(0);
  const [sample, setSample] = useState(false);
  const [gate, setGate] = useState<'locked' | 'sending' | 'open'>('locked');
  const [gateError, setGateError] = useState('');
  const [emailed, setEmailed] = useState(false);

  const formShown = step === 'form' || step === 'finding';

  // Human check: loads when the calculator is on screen, runs invisibly, asks for a tick only if unsure
  const humanBox = useRef<HTMLDivElement>(null);
  const human = useRef({ token: '', id: '', waiters: [] as ((t: string) => void)[] });
  useEffect(() => {
    if (!SITE_KEY || !humanBox.current) return;
    const box = humanBox.current;
    const draw = () => {
      const t = turnstile();
      if (!t || human.current.id || !box.isConnected) return;
      human.current.id = t.render(box, {
        sitekey: SITE_KEY,
        appearance: 'interaction-only',
        action: 'calculator',
        callback: (token: string) => {
          human.current.token = token;
          human.current.waiters.splice(0).forEach((w) => w(token));
        },
        'expired-callback': () => { human.current.token = ''; },
      });
    };
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      io.disconnect();
      if (turnstile()) return draw();
      const sc = document.createElement('script');
      sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      sc.async = true;
      sc.onload = draw;
      document.head.appendChild(sc);
    }, { rootMargin: '200px' });
    io.observe(box);
    const h = human.current;
    return () => {
      io.disconnect();
      if (h.id) turnstile()?.remove(h.id);
      h.id = '';
      h.token = '';
    };
  }, [formShown]);

  const humanToken = () =>
    !SITE_KEY || human.current.token
      ? Promise.resolve(human.current.token)
      : new Promise<string>((done) => {
          human.current.waiters.push(done);
          setTimeout(() => done(''), 15000);
        });

  const inputs = useMemo(() => ({ calls: Number(calls) || 0, close, value: Number(value) || 0 }), [calls, close, value]);
  const sum = useMemo(() => summarise(points, inputs, GRID), [points, inputs]);

  const fail = (code: string) => {
    setStep('form');
    setError(
      code === 'not_configured'
        ? 'The live scan is being set up. Ask for the free map video below and I will run your numbers by hand.'
        : code === 'expired'
          ? 'That took a while and the session ran out. Please run it again.'
          : code === 'bot'
            ? 'I couldn’t confirm you’re a person. Refresh the page and try again.'
            : code === 'rate_limited'
              ? 'You’ve run a few scans today. Ask for the free map video below and I’ll look at your map myself.'
              : code === 'busy'
                ? 'The scanner has hit its limit for today. Ask for the free map video below and I’ll look at your map myself.'
                : 'That did not work. Check the business name and suburb, then try again.',
    );
  };

  const find = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setStep('finding');
    const website = (new FormData(e.currentTarget).get('website') as string) ?? '';
    try {
      const token = await humanToken();
      // A check token works once, so get a fresh one ready for the next search
      human.current.token = '';
      if (human.current.id) turnstile()?.reset(human.current.id);
      const d = await post<{ candidates: Candidate[]; demo?: boolean }>('calc-find', { name: biz.name, suburb: biz.suburb, website, human: token });
      setSample(Boolean(d.demo));
      setCandidates(d.candidates);
      setStep('pick');
    } catch (err) {
      fail((err as Error).message);
    }
  };

  const scan = async (c: Candidate) => {
    setChosen(c);
    setPoints([]);
    setRowsDone(0);
    setGate('locked');
    setStep('scanning');
    try {
      const rows = await Promise.all(
        Array.from({ length: GRID }, (_, row) =>
          post<{ points: ScanPoint[] }>('calc-scan', { token: c.token, keyword: biz.keyword, row }).then((d) => {
            setRowsDone((n) => n + 1);
            return d.points;
          }),
        ),
      );
      const all = rows.flat();
      if (all.filter((p) => !p.failed).length < (GRID * GRID) / 2) throw new Error('scan_failed');
      setPoints(all);
      setStep('result');
    } catch (err) {
      fail((err as Error).message);
    }
  };

  const unlock = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!chosen) return;
    const form = new FormData(e.currentTarget);
    const email = String(form.get('email') ?? '').trim();
    const mobile = String(form.get('mobile') ?? '').replace(/[\s-]/g, '');
    if (!/^(\+?61|0)4\d{8}$/.test(mobile)) return setGateError('Please enter an Australian mobile, like 0412 345 678.');
    setGateError('');
    setGate('sending');
    const lead = new URLSearchParams({
      'form-name': 'calculator',
      biz: chosen.title,
      address: chosen.address,
      search: biz.keyword,
      email,
      mobile,
      calls: String(inputs.calls),
      close: String(inputs.close),
      value: String(inputs.value),
      rank_at_address: sum.centreRank ? String(sum.centreRank) : 'not in first 20',
      top3_points: `${sum.top3} of ${sum.usable}`,
      leader: sum.leader?.title ?? '',
      extra_calls: range(sum.extraCallsLow, sum.extraCallsHigh),
      extra_revenue_month: range(sum.revLow, sum.revHigh, aud),
      website: String(form.get('website') ?? ''),
    });
    try {
      // The lead is saved first, so it is never lost if the email step fails
      const r = await fetch('/free-map-video/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: lead.toString() });
      if (!r.ok) throw new Error(`form ${r.status}`);
      const w = window as unknown as { fbq?: (...a: unknown[]) => void; gtag?: (...a: unknown[]) => void };
      w.fbq?.('track', 'Lead');
      w.gtag?.('event', 'generate_lead', { form: 'calculator' });
      setGate('open');
      const sent = await post<{ emailed?: boolean }>('calc-lead', { token: chosen.token, email, keyword: biz.keyword, summary: { ...inputs, ...sum, points: sum.usable } }).catch(() => ({ emailed: false }));
      setEmailed(Boolean(sent.emailed));
    } catch {
      setGate('locked');
      setGateError('That did not send. Please try again, or text me on 0474 870 535.');
    }
  };

  const num = (set: (v: number | '') => void) => (e: { target: { value: string } }) => set(e.target.value === '' ? '' : Math.max(0, Number(e.target.value)));
  const text = (k: keyof typeof biz) => (e: { target: { value: string } }) => setBiz((b) => ({ ...b, [k]: e.target.value }));

  return (
    <div id="calculator" style={{ border: `3px solid ${INK}`, boxShadow: `10px 10px 0 ${INK}`, background: '#f3f1ec', scrollMarginTop: 90 }}>
      {sample && <div style={{ background: '#e9b72e', color: INK, padding: '8px 16px', fontFamily: MONO, fontSize: 12, letterSpacing: '.08em' }}>SAMPLE DATA · NOT A REAL SCAN</div>}

      {(step === 'form' || step === 'finding') && (
        <form onSubmit={find} style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
          <div style={{ flex: '1 1 340px', minWidth: 0, background: '#fff', padding: 'clamp(18px,4vw,32px)', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ ...KICKER, margin: 0 }}>1 · Your business</p>
            <p hidden><label>Leave this empty <input name="website" tabIndex={-1} autoComplete="off" /></label></p>
            <label style={LABEL}><span style={LABEL_TEXT}>Business name</span><input className="mrg-input" required minLength={2} maxLength={80} value={biz.name} onChange={text('name')} autoComplete="organization" placeholder="As it appears on Google" style={FIELD} /></label>
            <label style={LABEL}><span style={LABEL_TEXT}>Suburb</span><input className="mrg-input" required minLength={2} maxLength={60} value={biz.suburb} onChange={text('suburb')} autoComplete="address-level2" placeholder="e.g. Coomera" style={FIELD} /></label>
            <label style={LABEL}><span style={LABEL_TEXT}>The search you want to win</span><span style={HINT}>What a customer types into Google. Leave the suburb off.</span><input className="mrg-input" required minLength={2} maxLength={60} value={biz.keyword} onChange={text('keyword')} autoComplete="off" placeholder="e.g. plumber" style={FIELD} /></label>
          </div>
          <div style={{ flex: '1 1 340px', minWidth: 0, padding: 'clamp(18px,4vw,32px)', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ ...KICKER, margin: 0 }}>2 · Your numbers</p>
            <label style={LABEL}><span style={LABEL_TEXT}>Calls from Google a month, right now</span><span style={HINT}>Your Business Profile shows this under Performance. Guess if you have to.</span><input className="mrg-input" type="number" inputMode="numeric" required min={1} max={5000} value={calls} onChange={num(setCalls)} style={FIELD} /></label>
            <label style={LABEL}><span style={LABEL_TEXT}>Average job value ($)</span><input className="mrg-input" type="number" inputMode="numeric" required min={1} max={1000000} value={value} onChange={num(setValue)} style={FIELD} /></label>
            <label style={{ ...LABEL, gap: 8 }}><span style={{ ...LABEL_TEXT, display: 'flex', justifyContent: 'space-between', gap: 12 }}><span>Calls that become jobs</span><span style={{ color: BLUE }}>{close}%</span></span><input type="range" min={5} max={90} step={5} value={close} onChange={(e) => setClose(Number(e.target.value))} style={{ width: '100%' }} /></label>
            <div ref={humanBox} style={{ marginTop: 'auto' }} />
            <button type="submit" disabled={step === 'finding'} className="hv-ink-bg" style={BTN}>{step === 'finding' ? 'Finding your listing…' : 'Scan my area'} <span aria-hidden="true" style={{ fontSize: 22, flex: 'none' }}>→</span></button>
            {error && <p role="alert" style={ERR}>{error}</p>}
            <p style={{ ...HINT, margin: 0, textAlign: 'center' }}>Free. Takes about 30 seconds. No email needed to see where you rank.</p>
          </div>
        </form>
      )}

      {step === 'pick' && (
        <div style={{ background: '#fff', padding: 'clamp(18px,4vw,32px)', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <p style={{ ...KICKER, margin: 0 }}>Which one is you?</p>
          {candidates.length === 0 && <p style={{ margin: 0 }}>I couldn&apos;t find a Google listing for &quot;{biz.name}&quot; in {biz.suburb}. Check the spelling, or if you don&apos;t have a Google Business Profile yet, that&apos;s the first thing to fix: ask for the free map video below.</p>}
          {candidates.map((c) => (
            <button key={c.token} type="button" onClick={() => scan(c)} className="hv2" style={{ textAlign: 'left', border: `2px solid ${INK}`, background: '#fff', color: INK, font: 'inherit', padding: '14px 16px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 2 }}>
              <strong style={{ fontSize: 17 }}>{c.title}</strong>
              <span style={HINT}>{c.address}{c.rating ? ` · ${c.rating.toFixed(1)}★ (${c.reviews ?? 0} reviews)` : ''}</span>
            </button>
          ))}
          <button type="button" onClick={() => setStep('form')} style={{ alignSelf: 'flex-start', border: 0, background: 'none', padding: 0, font: 'inherit', color: BLUE, textDecoration: 'underline', cursor: 'pointer' }}>None of these. Go back</button>
        </div>
      )}

      {step === 'scanning' && (
        <div role="status" style={{ background: INK, color: '#fff', padding: 'clamp(28px,6vw,56px)', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ ...KICKER, margin: 0, color: '#b8b5ac' }}>Scanning {GRID * GRID} points around {chosen?.title}</p>
          <div style={{ ...BIG, fontSize: 'clamp(28px,5vw,44px)' }}>Searching &quot;{biz.keyword}&quot; street by street…</div>
          <div style={{ height: 8, background: '#3a3a38' }}><div style={{ height: '100%', width: `${(rowsDone / GRID) * 100}%`, background: BLUE, transition: 'width .4s ease' }} /></div>
          <p style={{ margin: 0, color: '#d4d1c8' }}>{rowsDone * GRID} of {GRID * GRID} points checked. This takes about 30 seconds.</p>
        </div>
      )}

      {step === 'result' && chosen && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: INK, color: '#fff', padding: 'clamp(20px,4vw,36px)', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <p style={{ ...KICKER, margin: 0, color: '#b8b5ac' }}>{chosen.title} · &quot;{biz.keyword}&quot;</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: '20px 28px' }}>
              <div><div style={BIG}>{sum.centreRank ? `#${sum.centreRank}` : '20+'}</div><div style={{ color: '#d4d1c8' }}>your position at your own address{sum.centreRank ? '' : ' (not in the first 20)'}</div></div>
              <div><div style={BIG}>{sum.top3}<span style={{ fontSize: '.5em' }}> of {sum.usable}</span></div><div style={{ color: '#d4d1c8' }}>points around you where you&apos;re in the top 3</div></div>
              <div><div style={{ ...BIG, color: '#6f98ff' }}>{sum.strong ? '0' : range(sum.extraCallsLow, sum.extraCallsHigh)}</div><div style={{ color: '#d4d1c8' }}>calls a month you could be missing</div></div>
            </div>
            {sum.strong ? (
              <p style={{ margin: 0, color: '#d4d1c8' }}>You&apos;re already in the top 3 across most of this area for this search. The gains for you are in other searches and suburbs, which the free map video covers.</p>
            ) : sum.leader ? (
              <p style={{ margin: 0, color: '#d4d1c8' }}><strong style={{ color: '#fff' }}>{sum.leader.title}</strong> shows in the top 3 at {sum.leader.top3} of {sum.usable} points. Those are calls going to them.</p>
            ) : null}
          </div>

          {gate !== 'open' ? (
            <form onSubmit={unlock} style={{ background: '#fff', padding: 'clamp(20px,4vw,36px)', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
              <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ ...KICKER, margin: 0 }}>Your full report</p>
                <div style={{ fontStretch: '125%', fontWeight: 900, fontSize: 'clamp(24px,4vw,34px)', lineHeight: 1 }}>See what those calls are worth.</div>
                <ul style={{ margin: 0, paddingLeft: 20, listStyle: 'disc', color: '#3b3a36', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <li>The dollar value, a month and a year</li>
                  <li>Who&apos;s above you, with their reviews next to yours</li>
                  <li>Your map, street by street</li>
                  <li>A copy emailed to you</li>
                </ul>
              </div>
              <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <p hidden><label>Leave this empty <input name="website" tabIndex={-1} autoComplete="off" /></label></p>
                <label style={LABEL}><span style={LABEL_TEXT}>Email</span><input className="mrg-input" required name="email" type="email" autoComplete="email" placeholder="you@yourbusiness.com.au" style={FIELD} /></label>
                <label style={LABEL}><span style={LABEL_TEXT}>Mobile</span><input className="mrg-input" required name="mobile" type="tel" inputMode="tel" autoComplete="tel" placeholder="04xx xxx xxx" style={FIELD} /></label>
                <button type="submit" disabled={gate === 'sending'} className="hv-ink-bg" style={BTN}>{gate === 'sending' ? 'Unlocking…' : 'Show my full report'} <span aria-hidden="true" style={{ fontSize: 22, flex: 'none' }}>→</span></button>
                {gateError && <p role="alert" style={ERR}>{gateError}</p>}
                <p style={{ ...HINT, margin: 0 }}>I&apos;ll email your report and may text you about it. No discovery call unless you ask. <a href="/privacy/">Privacy policy</a></p>
              </div>
            </form>
          ) : (
            <div style={{ background: '#fff', padding: 'clamp(20px,4vw,36px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
              {!sum.strong && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 14 }}>
                  <div style={CARD}><span style={KICKER}>Extra revenue a month</span><span style={{ ...BIG, fontSize: 'clamp(28px,5vw,46px)', color: BLUE }}>{range(sum.revLow, sum.revHigh, aud)}</span></div>
                  <div style={CARD}><span style={KICKER}>Over a year</span><span style={{ ...BIG, fontSize: 'clamp(28px,5vw,46px)' }}>{range(sum.revLow * 12, sum.revHigh * 12, aud)}</span></div>
                </div>
              )}
              <p style={{ ...HINT, margin: '-14px 0 0' }}>An estimate, not a promise. It uses your numbers ({inputs.calls} calls a month, {inputs.close}% becoming jobs, {aud(inputs.value)} a job) and today&apos;s scan, and assumes a top-3 position across most of your area.{sum.capped ? ' Capped at three times your current calls.' : ''}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28 }}>
                <div style={{ flex: '0 1 340px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={KICKER}>Your map, street by street</span>
                  <div role="img" aria-label={`Ranking grid: top 3 at ${sum.top3} of ${sum.usable} points`} style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID},1fr)`, gap: 8, padding: 14, background: '#e6e3da', border: `3px solid ${INK}` }}>
                    {[...points].sort((a, b) => a.row - b.row || a.col - b.col).map((p) => {
                      const c = dot(p.rank, p.failed);
                      const home = p.row === (GRID - 1) / 2 && p.col === (GRID - 1) / 2;
                      return <span key={`${p.row}-${p.col}`} style={{ aspectRatio: '1/1', borderRadius: '50%', background: c.bg, color: c.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, boxShadow: home ? `0 0 0 3px #fff, 0 0 0 6px ${INK}` : '0 0 0 2px #fff' }}>{p.failed ? '?' : p.rank ?? '20+'}</span>;
                    })}
                  </div>
                  <span style={HINT}>Green is top 3, yellow is 4 to 10, red is 11 or lower. The ringed dot is your address. Points are 1.5 km apart.</span>
                </div>
                <div style={{ flex: '1 1 320px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={KICKER}>Who&apos;s above you</span>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                      <thead><tr style={{ textAlign: 'left', fontFamily: MONO, fontSize: 11, letterSpacing: '.08em', color: '#55534d' }}><th style={{ padding: '8px 8px 8px 0' }}>BUSINESS</th><th style={{ padding: 8 }}>RATING</th><th style={{ padding: 8 }}>REVIEWS</th><th style={{ padding: '8px 0 8px 8px' }}>TOP 3 AT</th></tr></thead>
                      <tbody>
                        {sum.competitors.map((c) => (
                          <tr key={c.title} style={{ borderTop: '1px solid #d9d6cd' }}><td style={{ padding: '10px 8px 10px 0', fontWeight: 700 }}>{c.title}</td><td style={{ padding: 8 }}>{c.rating ? c.rating.toFixed(1) : '–'}</td><td style={{ padding: 8 }}>{c.reviews ?? '–'}</td><td style={{ padding: '10px 0 10px 8px' }}>{c.top3} of {sum.usable}</td></tr>
                        ))}
                        <tr style={{ borderTop: `3px solid ${INK}`, background: '#f3f1ec' }}><td style={{ padding: '10px 8px', fontWeight: 800 }}>{chosen.title} (you)</td><td style={{ padding: 8 }}>{chosen.rating ? chosen.rating.toFixed(1) : '–'}</td><td style={{ padding: 8 }}>{chosen.reviews ?? '–'}</td><td style={{ padding: '10px 8px' }}>{sum.top3} of {sum.usable}</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: `3px solid ${INK}`, paddingTop: 20, display: 'flex', flexWrap: 'wrap', gap: '14px 24px', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: '1 1 300px', minWidth: 0 }}>
                  <strong style={{ fontSize: 18 }}>Want to know why they&apos;re above you?</strong>
                  <p style={{ margin: '4px 0 0', color: '#3b3a36' }}>I&apos;ll record a free video of your map and the three things I&apos;d fix first.{emailed ? ' Your report is on its way to your inbox.' : ''}</p>
                </div>
                <a href="#get-video" className="hv-ink-bg" style={{ ...BTN, textDecoration: 'none', padding: '8px 22px' }}>Get my free map video <span aria-hidden="true" style={{ fontSize: 22, flex: 'none' }}>→</span></a>
              </div>
            </div>
          )}

          <button type="button" onClick={() => setStep('form')} style={{ alignSelf: 'flex-start', margin: '14px 16px', border: 0, background: 'none', padding: 0, font: 'inherit', fontSize: 14, color: '#55534d', textDecoration: 'underline', cursor: 'pointer' }}>Change my numbers or run another search</button>
        </div>
      )}
    </div>
  );
}
