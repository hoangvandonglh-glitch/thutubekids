import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — COPPA Compliant Privacy Standards',
  description: 'thetubekids.com Privacy Policy. We do not collect personal information from children and comply fully with COPPA and GDPR-K regulations.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | thetubekids.com',
    description: 'We prioritize children privacy. No tracking, no personal data collection from minors, 100% COPPA compliant.',
    url: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="info-page">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-1" aria-hidden="true" />
      <div className="bg-blob bg-blob-2" aria-hidden="true" />

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo-area">
            <img src="/icon.png" alt="thetubekids.com Logo" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title">🌈 thetubekids.com</span>
              <span className="logo-subtitle">Safe Videos for Kids</span>
            </div>
          </Link>
          <div className="header-actions">
            <Link href="/" className="back-home-btn">
              🏠 Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="info-container">
        <div className="info-card">
          <div className="info-hero">
            <span className="info-hero-badge" style={{ background: '#FEE2E2', color: '#991B1B' }}>
              🔒 Transparent &amp; Secure
            </span>
            <h1 className="info-title">Privacy Policy</h1>
            <p className="info-subtitle">
              Last updated: October 2026. Your child's privacy is our top priority. At thetubekids.com, we design our platform to collect the minimum data necessary to serve you high-quality videos safely.
            </p>
          </div>

          <div className="privacy-body">
            <section className="privacy-section">
              <h2>1. Children’s Online Privacy Protection Act (COPPA)</h2>
              <p>
                thetubekids.com strictly adheres to the United States Children’s Online Privacy Protection Act (COPPA) and international child privacy frameworks including GDPR-K (General Data Protection Regulation for Kids).
              </p>
              <p>
                We do <strong>NOT</strong> knowingly request, collect, or store any personal information (such as full names, home addresses, phone numbers, geolocation, or school names) from children under the age of 13.
              </p>
            </section>

            <section className="privacy-section">
              <h2>2. Information We Do and Do Not Collect</h2>
              <ul>
                <li><strong>No User Accounts Required:</strong> Children and parents can enjoy all features of thetubekids.com without creating an account or providing an email address.</li>
                <li><strong>No Behavioral Tracking:</strong> We do not track children across third-party websites or build advertising profiles.</li>
                <li><strong>Anonymous Server Logs:</strong> Standard web server technical logs (e.g. browser type, operating system) are used solely for site reliability, caching, and DDOS defense.</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>3. Embedded YouTube Player</h2>
              <p>
                Videos on thetubekids.com are streamed via YouTube’s official embedded player API in strict mode (<code style={{ background: '#F3F4F6', padding: '2px 6px', borderRadius: '4px' }}>youtube.com/embed/</code>). When viewing videos, YouTube/Google may collect technical data according to Google's Privacy Policy. We configure our player parameters to suppress personalized advertising and related third-party suggestions wherever supported.
              </p>
            </section>

            <section className="privacy-section">
              <h2>4. Cookies &amp; Local Storage</h2>
              <p>
                thetubekids.com uses minimal local storage strictly for functional preferences (such as category filtering or pagination state). We do not deploy third-party advertising cookies.
              </p>
            </section>

            <section className="privacy-section">
              <h2>5. Contact Our Privacy Officer</h2>
              <p>
                If parents or legal guardians have questions regarding this Privacy Policy or wish to request information, please reach out to our dedicated privacy contact:
              </p>
              <div className="contact-box-mini">
                <strong>Email:</strong> privacy@thetubekids.com<br />
                <strong>Website:</strong> https://thetubekids.com
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: '48px' }}>
        <div className="footer-inner">
          <div className="footer-bottom">
            <span className="footer-copy">
              © 2024 thetubekids.com. COPPA compliant privacy standards.
            </span>
            <div className="footer-safe-label">
              <span>🛡️</span>
              <span>100% Safe &amp; Curated Content</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
