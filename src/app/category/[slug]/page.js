import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, categoryDetails, getCategoryBySlug, getVideosByCategory } from '@/data/videos';
import VideoCard from '@/components/VideoCard';
import AdBanner from '@/components/AdBanner';

export const dynamicParams = false;

// Pre-render all category pages for blazing fast SEO
export async function generateStaticParams() {
  return Object.keys(categoryDetails).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found | Thetubekids.com',
    };
  }

  const categoryUrl = `https://thetubekids.com/category/${category.id}`;

  return {
    title: category.title || `${category.label} — Safe Kids Videos`,
    description: category.description || `Watch curated, child-safe ${category.label} videos on Thetubekids.com.`,
    keywords: category.keywords || ['safe videos for kids', 'thetubekids'],
    alternates: {
      canonical: categoryUrl,
    },
    openGraph: {
      title: `${category.label} — Safe Educational Videos | Thetubekids`,
      description: category.description,
      url: categoryUrl,
      siteName: 'Thetubekids.com',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.label} — Safe Videos for Kids`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryVideos = getVideosByCategory(slug);
  const otherCategories = categories.filter((c) => c.id !== 'all' && c.id !== slug);

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://thetubekids.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category.label,
        item: `https://thetubekids.com/category/${category.id}`,
      },
    ],
  };

  // Collection schema
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.title,
    description: category.description,
    url: `https://thetubekids.com/category/${category.id}`,
    hasPart: categoryVideos.slice(0, 12).map((v, idx) => ({
      '@type': 'VideoObject',
      position: idx + 1,
      name: v.title,
      description: v.description,
      thumbnailUrl: v.thumbnail,
      embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="main-content">
        {/* Background Blobs */}
        <div className="bg-blob bg-blob-1" aria-hidden="true" />
        <div className="bg-blob bg-blob-2" aria-hidden="true" />

        {/* Header */}
        <header className="header">
          <div className="header-inner">
            <Link href="/" className="logo-area">
              <img src="/icon.png" alt="Thetubekids.com Logo" className="logo-img" width="48" height="48" />
              <div className="logo-text">
                <span className="logo-title">🌈 Thetubekids.com</span>
                <span className="logo-subtitle">Safe Videos for Kids</span>
              </div>
            </Link>

            <div className="header-actions">
              <Link href="/" className="back-home-btn">
                🏠 Back to All Videos
              </Link>
            </div>
          </div>
        </header>

        {/* SEO Breadcrumb Navigation */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb" style={{ maxWidth: '1400px', margin: '0 auto', padding: '12px 24px' }}>
          <div className="breadcrumb-inner">
            <Link href="/" className="breadcrumb-link">🏠 Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">{category.label}</span>
          </div>
        </nav>

        {/* Category Hero / Introduction Hub */}
        <section className="category-hero-section" style={{ maxWidth: '1400px', margin: '0 auto', padding: '16px 24px 28px' }}>
          <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: '32px 28px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            border: '2px solid rgba(255, 107, 107, 0.12)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <span style={{
                background: 'linear-gradient(135deg, #FF6B6B 0%, #FFA07A 100%)',
                color: 'white',
                padding: '6px 16px',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 700
              }}>
                🛡️ 100% Child-Safe Curated
              </span>
              <span style={{
                background: '#F1F5F9',
                color: '#475569',
                padding: '6px 14px',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                🎬 {categoryVideos.length} Videos Available
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Baloo 2', cursive",
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              color: '#1E293B',
              margin: '0 0 12px 0',
              lineHeight: 1.25
            }}>
              {category.seoHeading || category.label}
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '900px',
              margin: 0
            }}>
              {category.introText || category.description}
            </p>

            {/* Quick Internal Links to other categories (Cross-silo internal linking) */}
            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #F1F5F9' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '10px' }}>
                EXPLORE OTHER CATEGORIES:
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {otherCategories.map((other) => (
                  <Link
                    key={other.id}
                    href={`/category/${other.id}`}
                    style={{
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '50px',
                      padding: '6px 14px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#334155',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {other.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AdSense Top Leaderboard */}
        <AdBanner format="top-leaderboard" />

        {/* Video Grid Section */}
        <section className="videos-section" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px 40px' }}>
          <h2 className="section-title">
            <span>{category.label}</span>
            <span style={{ fontSize: '1rem', color: '#9CA3AF', fontWeight: 600 }}>
              &nbsp;({categoryVideos.length})
            </span>
          </h2>

          {categoryVideos.length === 0 ? (
            <div className="no-results">
              <span className="no-results-emoji">🎬</span>
              <h3>New videos arriving soon!</h3>
              <p>Our editorial team is reviewing and adding more safe videos to this category.</p>
              <Link href="/" className="back-home-btn" style={{ display: 'inline-block', marginTop: '16px' }}>
                Browse All Videos
              </Link>
            </div>
          ) : (
            <div className="videos-grid">
              {categoryVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          )}
        </section>

        {/* Educational / Parent Guide Internal Linking Callout */}
        <section style={{ maxWidth: '1400px', margin: '0 auto 40px', padding: '0 24px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
            border: '2px dashed #FCD34D',
            borderRadius: '20px',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <h3 style={{ margin: '0 0 6px 0', fontFamily: "'Baloo 2', cursive", fontSize: '1.25rem', color: '#92400E' }}>
                👨‍👩‍👧 Helpful Resources for Parents &amp; Teachers
              </h3>
              <p style={{ margin: 0, color: '#B45309', fontSize: '0.92rem' }}>
                Learn how we review every video for safety, or read our healthy screen time tips for toddlers.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link
                href="/parent-guide"
                style={{
                  background: 'white',
                  color: '#92400E',
                  padding: '8px 18px',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                }}
              >
                📖 Parent Guide
              </Link>
              <Link
                href="/safety"
                style={{
                  background: '#F59E0B',
                  color: 'white',
                  padding: '8px 18px',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  textDecoration: 'none'
                }}
              >
                🛡️ Safety Policy
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <AdBanner />

        {/* Footer */}
        <footer className="footer" style={{ marginTop: '24px' }}>
          <div className="footer-inner">
            <div className="footer-top">
              <div>
                <div className="footer-brand-title">🌈 Thetubekids.com</div>
                <p className="footer-brand-desc">
                  A safe and joyful video platform designed especially for children.
                  Every video is hand-picked, human-reviewed, and verified for child-appropriate content.
                  Let kids explore, learn, sing, and have fun safely!
                </p>
                <div className="footer-safe-badges">
                  <div className="safe-badge">✅ Child Safe</div>
                  <div className="safe-badge">🛡️ No Trackers</div>
                  <div className="safe-badge">🎓 Educational</div>
                  <div className="safe-badge">👨‍👩‍👧 Family Friendly</div>
                </div>
              </div>

              <div>
                <div className="footer-col-title">📂 Categories</div>
                <ul className="footer-links">
                  {categories.filter(c => c.id !== 'all').map(c => (
                    <li key={c.id}>
                      <Link href={`/category/${c.id}`} className="footer-link-btn" style={{ textDecoration: 'none' }}>
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="footer-col-title">ℹ️ About</div>
                <ul className="footer-links">
                  <li><Link href="/about">🏠 About Us</Link></li>
                  <li><Link href="/safety">🛡️ Safety Policy</Link></li>
                  <li><Link href="/contact">📧 Contact</Link></li>
                  <li><Link href="/parent-guide">👨‍👩‍👧 Parent Guide</Link></li>
                  <li><Link href="/privacy">🔒 Privacy Policy</Link></li>
                </ul>
              </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
              <span className="footer-copy">
                © 2024 Thetubekids.com. Made with ❤️ for little ones everywhere.
              </span>
              <div className="footer-safe-label">
                <span>🛡️</span>
                <span>100% Safe &amp; Curated Content</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
