'use client';

import { useState, useMemo, useCallback, Fragment } from 'react';
import Link from 'next/link';
import { getAllVideos, categories, featuredVideos } from '@/data/videos';
import AdBanner from '@/components/AdBanner';

const ITEMS_PER_PAGE = 28;

// =====================
// HEADER COMPONENT
// =====================
function Header({ searchQuery, onSearch }) {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo-area">
          <img src="/icon.png" alt="Thetubekids.com Logo" className="logo-img" width="48" height="48" />
          <div className="logo-text">
            <h1 className="logo-title">🌈 Thetubekids.com</h1>
            <span className="logo-subtitle">Safe Videos for Kids</span>
          </div>
        </Link>

        <div className="header-search">
          <div className="search-input-wrap">
            <span className="search-icon">🔍</span>
            <input
              id="search-input"
              type="search"
              className="search-input"
              placeholder="Search fun safe videos..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              aria-label="Search videos"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

// =====================
// CATEGORIES COMPONENT
// =====================
function Categories({ activeCategory, onSelect }) {
  return (
    <section className="categories-section">
      <h2 className="section-title">🎯 Browse by Category</h2>
      <div className="categories-scroll" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`cat-${cat.id}`}
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`category-btn${activeCategory === cat.id ? ' active' : ''}`}
            onClick={() => onSelect(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}

// =====================
// FEATURED SECTION
// =====================
function FeaturedSection() {
  const main = featuredVideos[0];
  const sides = featuredVideos.slice(1, 3);

  return (
    <section className="featured-section">
      <h2 className="section-title">🔥 Featured Videos</h2>
      <div className="featured-grid">
        {/* Main featured */}
        <Link
          className="featured-main"
          href={`/video/${main.slug}`}
          aria-label={`Watch ${main.title}`}
        >
          <img
            src={main.thumbnail}
            alt={main.title}
            className="featured-thumb"
            loading="eager"
          />
          <div className="featured-overlay">
            <div className="featured-badge">🔥 {main.badge}</div>
            <h3 className="featured-title">{main.title}</h3>
            <div className="featured-meta">
              <span>📺 {main.channel}</span>
              <span>•</span>
              <span>👁️ {main.views}</span>
              <span>•</span>
              <span>⏱️ {main.duration}</span>
            </div>
          </div>
          <div className="play-btn-big" aria-hidden="true">▶️</div>
        </Link>

        {/* Side featured */}
        {sides.map((v) => (
          <Link
            key={v.slug}
            className="featured-side"
            href={`/video/${v.slug}`}
            aria-label={`Watch ${v.title}`}
          >
            <img
              src={v.thumbnail}
              alt={v.title}
              className="featured-thumb"
              loading="eager"
            />
            <div className="featured-overlay">
              <div className="featured-badge">{v.badge}</div>
              <h3 className="featured-title" style={{ fontSize: '0.95rem' }}>{v.title}</h3>
              <div className="featured-meta" style={{ fontSize: '0.72rem' }}>
                <span>👁️ {v.views}</span>
                <span>•</span>
                <span>⏱️ {v.duration}</span>
              </div>
            </div>
            <div className="play-btn-big" style={{ width: '50px', height: '50px', fontSize: '1.3rem' }} aria-hidden="true">▶️</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// =====================
// VIDEO CARD COMPONENT
// =====================
function VideoCard({ video, index }) {
  return (
    <Link
      className="video-card animate-in"
      style={{ animationDelay: `${(index % 12) * 0.04}s`, textDecoration: 'none' }}
      href={`/video/${video.slug}`}
      aria-label={`Watch ${video.title}`}
    >
      <div className="video-thumb-wrap">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="video-thumb"
          loading="lazy"
        />
        <div className="video-play-overlay" aria-hidden="true">
          <div className="play-icon">▶️</div>
        </div>
        <div className="video-duration">{video.duration}</div>
        {video.badge && (
          <div className="video-card-badge">{video.badge}</div>
        )}
      </div>
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <div className="video-channel">
          <span>📺</span>
          <span>{video.channel}</span>
        </div>
        <div className="video-meta-row">
          <span className="video-views">
            <span>👁️</span>
            <span>{video.views} views</span>
          </span>
          <span className="video-age">
            <span>👶</span>
            <span>Age {video.ageRange}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

// =====================
// FOOTER COMPONENT
// =====================
function Footer({ onSelectCategory }) {
  return (
    <footer className="footer">
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
              <li><button onClick={() => onSelectCategory('nursery-rhymes')} className="footer-link-btn">🎵 Nursery Rhymes</button></li>
              <li><button onClick={() => onSelectCategory('animals')} className="footer-link-btn">🦁 Animals</button></li>
              <li><button onClick={() => onSelectCategory('learning')} className="footer-link-btn">📚 Learning</button></li>
              <li><button onClick={() => onSelectCategory('stories')} className="footer-link-btn">📖 Stories</button></li>
              <li><button onClick={() => onSelectCategory('cartoons')} className="footer-link-btn">🎨 Cartoons</button></li>
              <li><button onClick={() => onSelectCategory('science')} className="footer-link-btn">🔬 Science</button></li>
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
  );
}

// =====================
// MAIN PAGE COMPONENT
// =====================
export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredVideos = useMemo(() => {
    let result = getAllVideos();

    if (activeCategory !== 'all') {
      result = result.filter((v) => v.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.channel.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  // Reset to page 1 whenever category or search query changes
  const handleCategorySelect = useCallback((cat) => {
    setActiveCategory(cat);
    setSearchQuery('');
    setCurrentPage(1);
  }, []);

  const handleSearchChange = useCallback((q) => {
    setSearchQuery(q);
    setCurrentPage(1);
  }, []);

  // Pagination calculation
  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
  const paginatedVideos = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredVideos.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredVideos, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const sectionEl = document.getElementById('all-videos-section');
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="main-content">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-1" aria-hidden="true" />
      <div className="bg-blob bg-blob-2" aria-hidden="true" />
      <div className="bg-blob bg-blob-3" aria-hidden="true" />

      {/* Header */}
      <Header searchQuery={searchQuery} onSearch={handleSearchChange} />

      {/* Categories */}
      <Categories activeCategory={activeCategory} onSelect={handleCategorySelect} />

      {/* Featured - show only on homepage without search and category = all */}
      {!searchQuery && activeCategory === 'all' && currentPage === 1 && <FeaturedSection />}

      {/* Google AdSense Unit (Top Banner) */}
      <AdBanner />

      {/* All Videos Grid Section */}
      <section className="videos-section" id="all-videos-section">
        <h2 className="section-title">
          {searchQuery
            ? `🔍 Results for "${searchQuery}"`
            : activeCategory === 'all'
            ? '🎬 All Videos'
            : `${categories.find((c) => c.id === activeCategory)?.label || ''}`
          }
          <span style={{ fontSize: '1rem', color: '#9CA3AF', fontWeight: 600 }}>
            &nbsp;({filteredVideos.length})
          </span>
        </h2>

        {filteredVideos.length === 0 ? (
          <div className="no-results">
            <span className="no-results-emoji">🔍</span>
            <h3>No videos found!</h3>
            <p>Try a different search term or browse our categories above.</p>
          </div>
        ) : (
          <>
            <div className="videos-grid">
              {paginatedVideos.map((video, index) => (
                <Fragment key={video.id}>
                  {index === 4 && <AdBanner format="in-feed" />}
                  {index === 16 && <AdBanner format="in-feed" />}
                  <VideoCard
                    video={video}
                    index={index}
                  />
                </Fragment>
              ))}
            </div>

            {/* Pagination Controls (28 Videos per page) */}
            {totalPages > 1 && (
              <div className="pagination-wrap">
                <div className="pagination-nav">
                  <button
                    className="pagination-btn"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous Page"
                  >
                    ◀ Prev
                  </button>

                  <div className="page-numbers-list">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                      <button
                        key={num}
                        onClick={() => handlePageChange(num)}
                        className={`page-number-btn${currentPage === num ? ' page-number-active' : ''}`}
                        aria-label={`Page ${num}`}
                        aria-current={currentPage === num ? 'page' : undefined}
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  <button
                    className="pagination-btn"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next Page"
                  >
                    Next ▶
                  </button>
                </div>

                <div className="pagination-info">
                  Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} – {Math.min(currentPage * ITEMS_PER_PAGE, filteredVideos.length)} of {filteredVideos.length} videos
                </div>
              </div>
            )}
          </>
        )}
      </section>

      {/* Google AdSense Unit (Bottom Banner) */}
      <AdBanner />

      {/* Footer */}
      <Footer onSelectCategory={handleCategorySelect} />
    </div>
  );
}
