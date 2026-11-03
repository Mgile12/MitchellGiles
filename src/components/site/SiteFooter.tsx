import Link from 'next/link';

/** The dark footer from the homepage design, used on every page in the new design. */
export default function SiteFooter() {
  return (
<footer style={{"background":"#111110","color":"#b8b5ac","padding":"44px 20px 32px"}}>
  <div style={{"maxWidth":"1240px","margin":"0 auto","display":"flex","flexDirection":"column","gap":"28px","fontSize":"14px"}}>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"28px","justifyContent":"space-between","alignItems":"flex-start"}}>
      <div style={{"display":"flex","flexDirection":"column","gap":"12px","maxWidth":"380px"}}>
        <img src="/images/home/mrg-marketing-logo-white.webp" alt="MRG Marketing" style={{"height":"30px","width":"auto","display":"block","alignSelf":"flex-start"}} loading="lazy" decoding="async" />
        <span>Local SEO, Google Business Profile and AI search for the Gold Coast and Brisbane.</span>
      </div>
      <div style={{"display":"flex","flexDirection":"column","gap":"6px"}}>
        <a href="mailto:mitchell@mrgmarketing.com.au" style={{"color":"#fff"}}>mitchell@mrgmarketing.com.au</a>
        <a href="tel:0474870535" style={{"color":"#fff"}}>0474 870 535</a>
        <span>9 Laverton St, Ormeau QLD 4208</span>
        <span>ABN 20 700 519 893</span>
      </div>
      <div style={{"display":"flex","flexDirection":"column","gap":"12px","alignItems":"flex-start"}}>
        <div style={{"display":"flex","flexWrap":"wrap","gap":"8px 16px"}}>
          <a href="https://www.instagram.com/mrgmarketing.agency" style={{"color":"#fff"}} rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61557011930635" style={{"color":"#fff"}} rel="noopener noreferrer">Facebook</a>
          <a href="https://www.linkedin.com/in/mrg-marketing/" style={{"color":"#fff"}} rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.youtube.com/channel/UCZA2c-THw-0CM6Z6TE2CPxA" style={{"color":"#fff"}} rel="noopener noreferrer">YouTube</a>
          <a href="https://www.tiktok.com/@mrg.marketing" style={{"color":"#fff"}} rel="noopener noreferrer">TikTok</a>
          <a href="https://x.com/MRG_MarketingAU" style={{"color":"#fff"}} rel="noopener noreferrer">X</a>
        </div>
        <a href="https://mygoldcoast.directory/business/mrg-marketing" title="MRG Marketing on My Gold Coast" style={{"display":"block"}} rel="noopener noreferrer"><img src="https://mygoldcoast.directory/images/badge-featured.png" alt="Featured on My Gold Coast" style={{"height":"52px","width":"auto","display":"block"}} loading="lazy" decoding="async" /></a>
      </div>
    </div>
    <div style={{"borderTop":"1px solid #3a3a38","paddingTop":"18px","display":"flex","flexWrap":"wrap","gap":"8px 20px","justifyContent":"space-between","fontSize":"13px"}}>
      <span>© 2026 MRG Marketing · Ormeau, Gold Coast · Established 2024</span>
      <span style={{"display":"flex","gap":"16px","flexWrap":"wrap"}}><Link href="/terms/" style={{"color":"#b8b5ac"}}>Terms</Link><Link href="/privacy/" style={{"color":"#b8b5ac"}}>Privacy</Link><span>MRG Marketing is not affiliated with Google.</span></span>
    </div>
  </div>
</footer>
  );
}
