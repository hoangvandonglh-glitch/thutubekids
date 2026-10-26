import Link from 'next/link';

export const metadata = {
  title: 'Parent Guide — Screen Time Tips & Healthy Habits',
  description: 'Evidence-based advice for parents on healthy screen time, co-viewing, and fostering educational engagement for children.',
  alternates: {
    canonical: '/parent-guide',
  },
  openGraph: {
    title: 'Parent Guide to Healthy Screen Time | Thutubekids.com',
    description: 'Practical tips and expert guidelines for raising happy, digitally balanced children.',
    url: '/parent-guide',
  },
};

export default function ParentGuidePage() {
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
            <span className="info-hero-badge" style={{ background: '#FEF3C7', color: '#92400E' }}>
              👨‍👩‍👧 Empowering Families
            </span>
            <h1 className="info-title">Parent Guide to Healthy Digital Habits</h1>
            <p className="info-subtitle">
              Screen time does not have to be a source of parent guilt. When curated with intention, high-quality educational videos stimulate language development, empathy, and family singing. Here is our expert guide to balanced viewing.
            </p>
          </div>

          <div className="age-guide-grid">
            <div className="age-card">
              <div className="age-badge">Ages 0 to 2</div>
              <h3>Explore &amp; Move Together</h3>
              <p className="age-rec">Recommended: 15–30 min max, with a parent</p>
              <ul className="age-tips">
                <li>Focus on high-contrast gentle melodies (e.g. Twinkle Twinkle, Skidamarink)</li>
                <li>Avoid rapid jump cuts or loud sound effects</li>
                <li>Sing and clap along so the child connects video sounds to your warm voice</li>
              </ul>
            </div>

            <div className="age-card">
              <div className="age-badge" style={{ background: '#D1FAE5', color: '#065F46' }}>Ages 2 to 5</div>
              <h3>Language &amp; Social Routines</h3>
              <p className="age-rec">Recommended: Up to 1 hour daily</p>
              <ul className="age-tips">
                <li>Choose songs that model hygiene and morning habits (e.g. Brush Your Teeth, Clean Up)</li>
                <li>Pause and ask predictive questions: "What animal do you think comes next?"</li>
                <li>Connect concepts to real life: count 5 real apples after watching counting videos</li>
              </ul>
            </div>

            <div className="age-card">
              <div className="age-badge" style={{ background: '#EDE9FE', color: '#5B21B6' }}>Ages 6 to 10</div>
              <h3>Curiosity &amp; World Discovery</h3>
              <p className="age-rec">Recommended: 1 to 1.5 hours daily</p>
              <ul className="age-tips">
                <li>Encourage science, biology, and solar system videos (e.g. StoryBots, SciShow Kids)</li>
                <li>Encourage children to explain what they learned in their own words</li>
                <li>Establish screen-free bedroom zones before sleep</li>
              </ul>
            </div>
          </div>

          <div className="info-content-block">
            <h2 className="info-section-heading">🌟 3 Gold Rules for Co-Viewing</h2>
            <div className="pillars-grid">
              <div className="pillar-item">
                <span className="pillar-icon">🗣️</span>
                <h3>Talk About What You See</h3>
                <p>Narrate actions, label emotions ("Look, the little monkey feels sad!"), and expand their vocabulary organically.</p>
              </div>

              <div className="pillar-item">
                <span className="pillar-icon">🕺</span>
                <h3>Make It Physical</h3>
                <p>When the video asks to jump like a kangaroo or freeze, jump and freeze together! Movement prevents passive trance-like viewing.</p>
              </div>

              <div className="pillar-item">
                <span className="pillar-icon">⏰</span>
                <h3>Set Clear Gentle Boundaries</h3>
                <p>Use visual countdown timers: "We are going to watch 2 songs, then it's time for lunch!" Children thrive on predictable transitions.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: '48px' }}>
        <div className="footer-inner">
          <div className="footer-bottom">
            <span className="footer-copy">
              © 2024 Thutubekids.com. Empowering mindful parenting.
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
