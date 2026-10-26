import Link from 'next/link';

export const metadata = {
  title: 'About Us — Safe Kids Video Platform',
  description: 'Learn about Thutubekids.com, our mission to provide children with 100% safe, educational, ad-screened video content.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Thutubekids.com — Safe Kids Video Platform',
    description: 'Learn about our mission to provide children with safe, educational, ad-screened videos.',
    url: '/about',
  },
};

export default function AboutPage() {
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
            <span className="info-hero-badge">🌟 Welcome to Thutubekids.com</span>
            <h1 className="info-title">Where Learning Meets Safe Fun!</h1>
            <p className="info-subtitle">
              Thutubekids.com was created with a single, heartfelt mission: to give toddlers, preschoolers, and young children a joyful digital haven free from algorithmic rabbit holes, adult interruptions, and inappropriate advertising.
            </p>
          </div>

          <div className="info-grid-2">
            <div className="info-box-highlight">
              <div className="info-box-icon">🎯</div>
              <h2 className="info-box-title">Our Mission</h2>
              <p className="info-box-desc">
                We believe video entertainment can be profoundly educational and uplifting. Our human curation team screens every single video to ensure wholesome values, kindness, joyful music, and cognitive growth for children aged 0 to 10.
              </p>
            </div>

            <div className="info-box-highlight">
              <div className="info-box-icon">🛡️</div>
              <h2 className="info-box-title">Why Parents Trust Us</h2>
              <p className="info-box-desc">
                Unlike open video platforms where autoplay can steer little eyes into unpredictable content, Thutubekids.com maintains strict boundaries. No comments sections, no external ad trackers, and 100% kid-verified channels only.
              </p>
            </div>
          </div>

          <div className="info-content-block">
            <h2 className="info-section-heading">✨ Our 4 Pillars of Curation</h2>
            <div className="pillars-grid">
              <div className="pillar-item">
                <span className="pillar-icon">👶</span>
                <h3>Age Appropriateness</h3>
                <p>Every video is tagged with clear developmental age brackets (0-4, 2-6, 4-10) so parents always know the content fits their child’s stage.</p>
              </div>

              <div className="pillar-item">
                <span className="pillar-icon">🧠</span>
                <h3>Cognitive Value</h3>
                <p>From alphabet phonics and counting games to earth science and animal habitats, our library fosters genuine curiosity and school readiness.</p>
              </div>

              <div className="pillar-item">
                <span className="pillar-icon">💖</span>
                <h3>Wholesome Emotional Modeling</h3>
                <p>Content highlighting sharing, kindness, empathy, daily hygiene, and healthy relationships between siblings and parents.</p>
              </div>

              <div className="pillar-item">
                <span className="pillar-icon">🚫</span>
                <h3>Zero Harmful Content</h3>
                <p>Strict prohibition of scary shock elements, intense violence, commercial hyper-stimulation, and inappropriate adult themes.</p>
              </div>
            </div>
          </div>

          <div className="info-callout">
            <div className="info-callout-icon">💌</div>
            <div className="info-callout-body">
              <h3>Have suggestions or a favorite creator?</h3>
              <p>We love partnering with educators, animators, and parents around the globe. Get in touch with our team anytime!</p>
              <Link href="/contact" className="info-callout-btn">
                Contact Our Team →
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
              © 2024 Thutubekids.com. All rights reserved. Made with ❤️ for little ones everywhere.
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
