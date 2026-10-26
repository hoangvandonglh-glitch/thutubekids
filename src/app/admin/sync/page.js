'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminSyncPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSync = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/cron/sync-videos', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || data.error || 'Sync request failed');
      }
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="info-page">
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo-area">
            <img src="/icon.png" alt="Thutubekids.com Logo" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title">🌈 Thutubekids.com</span>
              <span className="logo-subtitle">Automated Video Sync Control</span>
            </div>
          </Link>
          <div className="header-actions">
            <Link href="/" className="back-home-btn">
              🏠 Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="info-container">
        <div className="info-card">
          <div className="info-hero">
            <span className="info-hero-badge" style={{ background: '#EDE9FE', color: '#5B21B6' }}>
              ⚡ Vercel Cron Job + YouTube API
            </span>
            <h1 className="info-title">Automated Video Synchronization</h1>
            <p className="info-subtitle">
              This dashboard powers the automated discovery, oEmbed embeddability verification, and publishing of new safe kids videos from top official YouTube creators.
            </p>
          </div>

          {/* Sync Trigger Card */}
          <div style={{ background: '#F8FAFC', padding: '28px', borderRadius: '16px', border: '1px solid #E2E8F0', marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h2 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.35rem', fontWeight: 800, margin: '0 0 6px 0', color: '#1F2937' }}>
                  Manual Sync Execution
                </h2>
                <p style={{ margin: 0, color: '#4B5563', fontSize: '0.95rem' }}>
                  Test the sync engine immediately without waiting for the daily 08:00 UTC Vercel Cron trigger.
                </p>
              </div>

              <button
                onClick={handleSync}
                disabled={loading}
                style={{
                  background: loading ? '#9CA3AF' : 'linear-gradient(135deg, #7C3AED, #EC4899)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 14px rgba(124, 58, 237, 0.35)',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {loading ? '🔄 Scanning YouTube Channels...' : '🚀 Trigger Sync Now'}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div style={{ marginTop: '20px', padding: '16px', background: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '10px', color: '#991B1B' }}>
                ❌ <strong>Sync Error:</strong> {error}
              </div>
            )}

            {/* Success Result */}
            {result && (
              <div style={{ marginTop: '24px', padding: '20px', background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.5rem' }}>✅</span>
                  <h3 style={{ margin: 0, color: '#166534', fontFamily: "'Baloo 2', cursive", fontSize: '1.2rem' }}>
                    Sync Completed: {result.newCount} New Videos Added! (Total: {result.totalVideos})
                  </h3>
                </div>

                {result.addedVideos && result.addedVideos.length > 0 && (
                  <div style={{ marginTop: '12px', background: 'white', padding: '14px', borderRadius: '8px', border: '1px solid #DCFCE7' }}>
                    <strong>Newly Published Videos:</strong>
                    <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
                      {result.addedVideos.map((v, i) => (
                        <li key={i} style={{ marginBottom: '4px' }}>
                          <Link href={`/video/${v.slug}`} style={{ color: '#7C3AED', fontWeight: 700 }} target="_blank">
                            {v.title}
                          </Link>
                          <span style={{ color: '#6B7280', fontSize: '0.85rem' }}> ({v.slug})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Console Logs */}
                {result.logs && (
                  <details style={{ marginTop: '14px' }}>
                    <summary style={{ cursor: 'pointer', color: '#15803D', fontWeight: 700 }}>
                      View Sync Logs ({result.logs.length} lines)
                    </summary>
                    <pre style={{ background: '#111827', color: '#10B981', padding: '12px', borderRadius: '8px', fontSize: '0.82rem', maxHeight: '200px', overflowY: 'auto', marginTop: '8px' }}>
                      {result.logs.join('\n')}
                    </pre>
                  </details>
                )}
              </div>
            )}
          </div>

          {/* Config Summary Grid */}
          <div className="info-grid-2">
            <div className="info-box-highlight">
              <div className="info-box-icon">⏰</div>
              <h2 className="info-box-title">Vercel Cron Schedule</h2>
              <p className="info-box-desc">
                Configured in <code style={{ background: '#E5E7EB', padding: '2px 6px', borderRadius: '4px' }}>vercel.json</code> to trigger automatically:
              </p>
              <div style={{ marginTop: '10px', background: '#F3F4F6', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem', fontFamily: 'monospace' }}>
                Path: /api/cron/sync-videos<br />
                Schedule: 0 8 * * * (Daily at 08:00 UTC)
              </div>
            </div>

            <div className="info-box-highlight">
              <div className="info-box-icon">🛡️</div>
              <h2 className="info-box-title">Embeddability Guard</h2>
              <p className="info-box-desc">
                Every video is checked through YouTube’s official oEmbed API. Any video where embedding is disabled, restricted, or set to private is automatically discarded.
              </p>
            </div>
          </div>

          {/* Monitored Channels */}
          <div>
            <h2 className="info-section-heading">📺 Monitored Kids Channels</h2>
            <div className="pillars-grid">
              <div className="pillar-item">
                <span className="pillar-icon">🎵</span>
                <h3>Super Simple Songs</h3>
                <p>Nursery rhymes, learning songs, and playful bedtime lullabies.</p>
              </div>

              <div className="pillar-item">
                <span className="pillar-icon">🚌</span>
                <h3>CoComelon</h3>
                <p>Daily routines, social-emotional lessons, and musical stories.</p>
              </div>

              <div className="pillar-item">
                <span className="pillar-icon">🦈</span>
                <h3>Pinkfong</h3>
                <p>Baby Shark dance, phonics, movement, and animal adventures.</p>
              </div>

              <div className="pillar-item">
                <span className="pillar-icon">🦭</span>
                <h3>The Singing Walrus</h3>
                <p>Counting, shapes, morning greetings, and classroom warmups.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer" style={{ marginTop: '48px' }}>
        <div className="footer-inner">
          <div className="footer-bottom">
            <span className="footer-copy">
              © 2024 Thutubekids.com. Automated sync management.
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
