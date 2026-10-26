import Link from 'next/link';

export const metadata = {
  title: 'Safety Policy — Child Safety & COPPA Compliance',
  description: 'Read the Thutubekids.com Safety Policy. Learn about our human review process, COPPA compliance, and how we protect children online.',
  alternates: {
    canonical: '/safety',
  },
  openGraph: {
    title: 'Child Safety Policy | Thutubekids.com',
    description: 'Human-reviewed video selection, COPPA compliance, and family digital safety standards.',
    url: '/safety',
  },
};

export default function SafetyPage() {
  return (
    <div className="info-page">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-1" aria-hidden="true" />
      <div className="bg-blob bg-blob-2" aria-hidden="true" />

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo-area">
            <img src="/icon.png" alt="Thutubekids.com Logo" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title">🌈 Thutubekids.com</span>
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
            <span className="info-hero-badge" style={{ background: '#DCFCE7', color: '#166534' }}>
              🛡️ Safety First Always
            </span>
            <h1 className="info-title">Our Child Safety Commitment</h1>
            <p className="info-subtitle">
              At Thutubekids.com, keeping your children secure, calm, and respected is not just an afterthought — it is the foundation of every line of code we write and every video we publish.
            </p>
          </div>

          <div className="safety-points-list">
            <div className="safety-point-card">
              <div className="safety-point-icon">👁️</div>
              <div className="safety-point-text">
                <h3>100% Human Review &amp; Channel Vetting</h3>
                <p>
                  We never rely solely on automated algorithms. Every video featured on Thutubekids.com is manually previewed by our content review team. We ensure that animations, sounds, and messaging are constructive, gentle, and age-appropriate.
                </p>
              </div>
            </div>

            <div className="safety-point-card">
              <div className="safety-point-icon">🔒</div>
              <div className="safety-point-text">
                <h3>No Public Comments &amp; Zero Social Interactions</h3>
                <p>
                  Open comment sections on the web are notorious for spam, bullying, and predatory links. On Thutubekids.com, there are no public comment sections, direct messaging, or user chat features. Children cannot be contacted by strangers.
                </p>
              </div>
            </div>

            <div className="safety-point-card">
              <div className="safety-point-icon">🍪</div>
              <div className="safety-point-text">
                <h3>COPPA &amp; GDPR-K Compliant (No Behavioral Tracking)</h3>
                <p>
                  We do not collect personal identifying information (PII) from children. We do not use behavioral tracking cookies or build marketing profiles on minor users. Our website fully respects the Children’s Online Privacy Protection Act (COPPA).
                </p>
              </div>
            </div>

            <div className="safety-point-card">
              <div className="safety-point-icon">🎬</div>
              <div className="safety-point-text">
                <h3>Controlled YouTube Embed Player</h3>
                <p>
                  Our video player uses strict embed parameters (<code style={{ background: '#F3F4F6', padding: '2px 6px', borderRadius: '4px' }}>rel=0, modestbranding=1</code>) to prevent intrusive third-party related videos and maintain viewing focus inside our protected environment.
                </p>
              </div>
            </div>
          </div>

          <div className="info-callout" style={{ borderLeftColor: '#10B981' }}>
            <div className="info-callout-icon">🚨</div>
            <div className="info-callout-body">
              <h3>Spotted a video that doesn’t meet our standards?</h3>
              <p>We take community feedback seriously. If you find any video that you believe is inappropriate or has changed on YouTube, report it to us immediately.</p>
              <Link href="/contact" className="info-callout-btn" style={{ background: '#059669' }}>
                Report a Video →
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: '48px' }}>
        <div className="footer-inner">
          <div className="footer-bottom">
            <span className="footer-copy">
              © 2024 Thutubekids.com. Safe &amp; verified digital space for children.
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
