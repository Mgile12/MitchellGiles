// Step 3 of the calculator: email the visitor their report. The lead itself is saved by Netlify Forms
// from the page, so a lead is never lost if the email service is down or not set up yet.
import { clean, configured, json, readBody, verify } from '../lib/calc.mjs';

const SITE = 'https://mrgmarketing.com.au';
const num = (v, max) => Math.max(0, Math.min(max, Math.round(Number(v) || 0)));
const aud = (n) => `$${num(n, 1e9).toLocaleString('en-AU')}`;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function reportHtml(biz, keyword, s) {
  const row = (label, value) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid #d9d6cd;color:#55534d">${label}</td><td style="padding:10px 0;border-bottom:1px solid #d9d6cd;font-weight:700;text-align:right">${value}</td></tr>`;
  const rivals = (s.competitors ?? [])
    .slice(0, 5)
    .map((c) => `<tr><td style="padding:8px 0;border-bottom:1px solid #d9d6cd">${esc(clean(c.title, 80))}</td><td style="padding:8px 0;border-bottom:1px solid #d9d6cd;text-align:right">${c.rating ? `${Number(c.rating).toFixed(1)}★ · ` : ''}${num(c.reviews, 1e6)} reviews · top 3 at ${num(c.top3, 25)} of ${num(s.points, 25)} points</td></tr>`)
    .join('');
  const centre = s.centreRank ? `#${num(s.centreRank, 20)}` : 'Not in the first 20';
  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#111110;max-width:600px;margin:0 auto;padding:24px;font-size:16px;line-height:1.5">
<p style="font-size:12px;letter-spacing:.12em;color:#55534d;margin:0 0 8px">MRG MARKETING · YOUR GOOGLE MAPS REPORT</p>
<h1 style="font-size:26px;line-height:1.15;margin:0 0 6px">${esc(biz.n)}</h1>
<p style="margin:0 0 20px;color:#3b3a36">Search scanned: <strong>${esc(keyword)}</strong>, from ${num(s.points, 25)} points around your address.</p>
<table style="width:100%;border-collapse:collapse;margin:0 0 20px">
${row('Your position at your own address', centre)}
${row('Points where you are in the top 3', `${num(s.top3, 25)} of ${num(s.points, 25)}`)}
${row('Calls you could be missing a month', `${num(s.extraCallsLow, 1e5)} to ${num(s.extraCallsHigh, 1e5)}`)}
${row('What those calls could be worth a month', `${aud(s.revLow)} to ${aud(s.revHigh)}`)}
${row('Over a year', `${aud(s.revLow * 12)} to ${aud(s.revHigh * 12)}`)}
</table>
${rivals ? `<h2 style="font-size:18px;margin:0 0 6px">Who is above you</h2><table style="width:100%;border-collapse:collapse;margin:0 0 20px;font-size:14px">${rivals}</table>` : ''}
<p style="font-size:14px;color:#55534d;margin:0 0 20px">These are estimates, not promises. They use the numbers you entered (${num(s.calls, 1e5)} calls a month, ${num(s.close, 100)}% becoming jobs, ${aud(s.value)} a job) and today's scan, and assume a top-3 position across most of your area. The estimate is capped at three times your current calls.</p>
<p style="margin:0 0 20px">Want me to walk you through it on video, and show you the three things I'd fix first? It's free.</p>
<p style="margin:0 0 24px"><a href="${SITE}/free-map-video/" style="background:#2F6BFF;color:#fff;text-decoration:none;font-weight:700;padding:14px 20px;display:inline-block">Get my free map video</a></p>
<p style="font-size:14px;color:#55534d;margin:0">Mitchell Giles · MRG Marketing, Ormeau · 0474 870 535<br>You're getting this because you asked for this report at mrgmarketing.com.au. <a href="${SITE}/privacy/" style="color:#55534d">Privacy</a></p>
</div>`;
}

export default async (req) => {
  if (!configured()) return json({ error: 'not_configured' }, 503);
  const body = await readBody(req);
  const biz = body && verify(body.token);
  if (!biz) return json({ error: 'expired' }, 401);
  const email = clean(body.email, 120);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json({ error: 'bad_email' }, 400);
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CALC_EMAIL_FROM;
  if (!key || !from) return json({ emailed: false });
  try {
    const notify = process.env.CALC_NOTIFY_TO;
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [email],
        ...(notify ? { bcc: [notify] } : {}),
        reply_to: notify || undefined,
        subject: `Your Google Maps report: ${biz.n}`,
        html: reportHtml(biz, clean(body.keyword, 60), body.summary ?? {}),
      }),
    });
    if (!r.ok) throw new Error(`email ${r.status}`);
    return json({ emailed: true });
  } catch (e) {
    console.error('calc-lead', e);
    return json({ emailed: false });
  }
};
