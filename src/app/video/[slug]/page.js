import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllVideos, categories, getVideoBySlug } from '@/data/videos';
import AdBanner from '@/components/AdBanner';

// Helper to format duration like '2:16' to ISO 8601 'PT2M16S'
function formatDurationISO(durationStr) {
  if (!durationStr) return 'PT3M00S';
  const parts = durationStr.split(':').map(Number);
  if (parts.length === 2) {
    const [minutes, seconds] = parts;
    return `PT${minutes || 0}M${seconds || 0}S`;
  }
  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts;
    return `PT${hours || 0}H${minutes || 0}M${seconds || 0}S`;
  }
  return 'PT3M00S';
}

// Pre-generate all video pages at build time using slug
export async function generateStaticParams() {
  return getAllVideos().map((v) => ({ slug: v.slug }));
}

// Dynamic SEO metadata per video
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) return { title: 'Video Not Found — Thetubekids.com' };

  const siteUrl = 'https://thetubekids.com';
  const pageUrl = `${siteUrl}/video/${video.slug}`;

  return {
    title: `${video.title} — Safe Kids Video`,
    description: video.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${video.title} — Safe Kids Video | Thetubekids`,
      description: video.description,
      url: pageUrl,
      siteName: 'Thetubekids.com',
      type: 'video.other',
      images: [
        {
          url: video.thumbnail,
          width: 480,
          height: 360,
          alt: video.title,
        },
      ],
      videos: [
        {
          url: `https://www.youtube.com/embed/${video.youtubeId}`,
          width: 1280,
          height: 720,
          type: 'text/html',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${video.title} — Watch Safe on Thetubekids`,
      description: video.description,
      images: [video.thumbnail],
    },
  };
}

export default async function VideoPage({ params }) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) notFound();

  const siteUrl = 'https://thetubekids.com';
  const pageUrl = `${siteUrl}/video/${video.slug}`;

  const categoryObj = categories.find((c) => c.id === video.category);
  const categoryLabel = categoryObj?.label || '⭐ All Videos';

  const allVideos = getAllVideos();

  // Related videos in the same category or overall recommendations
  const related = allVideos
    .filter((v) => v.slug !== video.slug && (v.category === video.category || video.category === 'all'))
    .slice(0, 8);

  const fallbackRelated = related.length < 4
    ? [...related, ...allVideos.filter((v) => v.slug !== video.slug && !related.includes(v)).slice(0, 8 - related.length)]
    : related;

  // Schema.org VideoObject Structured Data
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: [video.thumbnail],
    uploadDate: video.updatedAt || video.syncedAt || '2024-01-01T08:00:00Z',
    duration: formatDurationISO(video.duration),
    embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
    contentUrl: pageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Thetubekids',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icon.png`,
      },
    },
    inLanguage: 'en',
    isFamilyFriendly: true,
  };

  // Schema.org BreadcrumbList Structured Data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryLabel,
        item: `${siteUrl}/category/${video.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: video.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="video-page">
      {/* Schema.org Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Background blobs */}
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

      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/" className="breadcrumb-link">🏠 Home</Link>
          <span className="breadcrumb-sep">›</span>
          <Link href={`/category/${video.category}`} className="breadcrumb-link">{categoryLabel}</Link>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">{video.title}</span>
        </div>
      </nav>

      {/* Vị trí quảng cáo Top Leaderboard: Nằm ngay trên Video Player (Tỉ lệ view 95%, CTR cao) */}
      <div className="video-page-top-ad">
        <AdBanner format="top-leaderboard" />
      </div>

      {/* Main Content Area: 2 Columns */}
      <main className="video-page-main">
        <article className="video-page-left">
          {/* Video Player */}
          <div className="video-player-wrap">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&rel=0&modestbranding=1&playsinline=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="video-player-iframe"
            />
          </div>

          {/* Vị trí quảng cáo 1: Dưới Player (CTR cao nhất) */}
          <AdBanner format="under-player" />

          {/* Video Article Details */}
          <div className="video-details">
            {/* Badges & Title */}
            <div className="video-header-top">
              {video.badge && <span className="video-page-badge">{video.badge}</span>}
              <span className="video-safe-tag">🛡️ Verified Safe for Kids</span>
            </div>

            <h1 className="video-page-title">{video.title}</h1>

            {/* Metadata Bar */}
            <div className="video-page-meta">
              <div className="video-page-channel">
                <span className="channel-icon">📺</span>
                <span className="channel-name">{video.channel}</span>
              </div>
              <div className="video-page-stats">
                <span className="stat-chip stat-views">👁️ {video.views} views</span>
                <span className="stat-chip stat-duration">⏱️ {video.duration}</span>
                <span className="stat-chip stat-age">👶 Age {video.ageRange}</span>
                <span className="stat-chip stat-safe">✨ Kid Friendly</span>
              </div>
            </div>

            <div className="video-page-divider" />

            {/* 1. Article Description (Mô tả chi tiết bài viết) */}
            <section className="video-article-section">
              <h2 className="section-title">
                <span>📝</span> About this Video
              </h2>
              <div className="article-body">
                <p className="article-paragraph">{video.description}</p>
              </div>
            </section>

            {/* 2. What Kids Learn (Nội dung giáo dục) */}
            {video.learningPoints && video.learningPoints.length > 0 && (
              <section className="video-article-section learning-section">
                <h2 className="section-title">
                  <span>🧠</span> What Kids Will Learn
                </h2>
                <ul className="learning-list">
                  {video.learningPoints.map((point, idx) => (
                    <li key={idx} className="learning-item">
                      <span className="learning-check">✅</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 3. Sing Along / Lyrics / Story Overview */}
            {video.lyrics && (
              <section className="video-article-section lyrics-section">
                <div className="lyrics-box">
                  <div className="lyrics-header">
                    <h2 className="section-title" style={{ margin: 0 }}>
                      <span>🎶</span> Sing Along &amp; Lyrics
                    </h2>
                    <span className="lyrics-tag">🎵 Practice &amp; Sing</span>
                  </div>
                  <pre className="lyrics-content">{video.lyrics}</pre>
                </div>
              </section>
            )}

            {/* Vị trí quảng cáo In-Article: Tự nhiên ở giữa bài viết */}
            <AdBanner format="in-article" />

            {/* 4. Parent Corner / Guide */}
            {video.parentTips && (
              <section className="video-article-section parent-tips-section">
                <div className="parent-tips-box">
                  <div className="parent-tips-header">
                    <span className="parent-icon">👨‍👩‍👧</span>
                    <h3 className="parent-tips-title">Parent Corner &amp; Activities</h3>
                  </div>
                  <p className="parent-tips-text">{video.parentTips}</p>
                  <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px dashed #FCD34D', fontSize: '0.85rem', color: '#92400E' }}>
                    💡 Want tips on healthy screen time? Read our <Link href="/parent-guide" style={{ fontWeight: 700, color: '#B45309' }}>Parent Guide</Link> or learn about our <Link href="/safety" style={{ fontWeight: 700, color: '#B45309' }}>Child Safety Standards</Link>.
                  </div>
                </div>
              </section>
            )}

            {/* 5. Category & Tags */}
            <div className="video-footer-meta">
              <div className="video-page-category-box">
                <span className="cat-label">📂 Category:</span>
                <Link href={`/category/${video.category}`} className="cat-chip">
                  {categoryLabel}
                </Link>
              </div>

              {video.tags && (
                <div className="video-tags-wrap">
                  <span className="tags-label">🏷️ Topics:</span>
                  <div className="tags-list">
                    {video.tags.map((tag, i) => (
                      <span key={i} className="video-tag">#{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Sidebar — More Recommended Kids Videos */}
        <aside className="video-page-sidebar">
          <div className="sidebar-header-box">
            <h2 className="sidebar-title">🎬 More Like This</h2>
            <span className="sidebar-count">{fallbackRelated.length} videos</span>
          </div>

          {/* Vị trí quảng cáo 3: Sidebar Hình Chữ Nhật 300x250 (CTR cao) */}
          <AdBanner format="sidebar" />

          <div className="sidebar-list">
            {fallbackRelated.map((v) => (
              <Link
                key={v.slug}
                href={`/video/${v.slug}`}
                className="sidebar-card"
                aria-label={`Watch ${v.title}`}
              >
                <div className="sidebar-thumb-wrap">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="sidebar-thumb"
                    loading="lazy"
                  />
                  <span className="sidebar-duration">{v.duration}</span>
                </div>
                <div className="sidebar-info">
                  <div className="sidebar-video-title">{v.title}</div>
                  <div className="sidebar-channel">📺 {v.channel}</div>
                  <div className="sidebar-meta-sub">
                    <span className="sidebar-views">👁️ {v.views}</span>
                    <span>•</span>
                    <span className="sidebar-age">👶 {v.ageRange}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="sidebar-cta-box">
            <div className="sidebar-cta-icon">🌈</div>
            <h3 className="sidebar-cta-title">Looking for more?</h3>
            <p className="sidebar-cta-desc">Explore more curated safe videos in {categoryLabel}.</p>
            <Link href={`/category/${video.category}`} className="sidebar-cta-btn">
              Explore More {categoryLabel}
            </Link>
          </div>
        </aside>
      </main>

      {/* Google AdSense Unit */}
      <AdBanner />

      {/* Footer */}
      <footer className="footer" style={{ marginTop: '24px' }}>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand-title">🌈 Thetubekids.com</div>
              <p className="footer-brand-desc">
                A safe and joyful video platform designed especially for children.
                Every video is hand-picked and reviewed for child-appropriate content.
              </p>
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
              © 2024 Thetubekids.com. Safe, ad-screened, curated educational videos for children.
            </span>
            <div className="footer-safe-label">
              <span>🛡️</span>
              <span>100% Curated &amp; Kid Safe</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
