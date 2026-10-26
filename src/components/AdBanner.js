'use client';

import { useEffect } from 'react';

export default function AdBanner({
  adSlot = '1234567890',
  adFormat = 'auto',
  fullWidthResponsive = true,
  format = 'banner', // 'top-leaderboard' | 'under-player' | 'sidebar' | 'in-feed' | 'in-article' | 'banner'
  style = {},
  className = '',
}) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
  const isProduction = process.env.NODE_ENV === 'production' && adsenseId && adsenseId !== 'ca-pub-XXXXXXXXXXXXXXXX';

  useEffect(() => {
    if (isProduction) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense push error:', err);
      }
    }
  }, [isProduction]);

  // 1. Sidebar Ad unit (300x250 Medium Rectangle)
  if (format === 'sidebar') {
    return (
      <div className={`ad-sidebar-wrap ${className}`} style={style}>
        {isProduction ? (
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '250px', ...style }}
            data-ad-client={adsenseId}
            data-ad-slot={adSlot}
            data-ad-format="rectangle"
            data-full-width-responsive="false"
          />
        ) : (
          <div className="ad-placeholder-sidebar">
            <span className="ad-label">SPONSORED / QUẢNG CÁO</span>
            <div className="ad-inner-content">
              <span className="ad-icon">📢</span>
              <span className="ad-text">AdSense 300x250 (Sidebar High CTR)</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2. In-Feed Native Grid Ad unit (appears naturally inside the video grid)
  if (format === 'in-feed') {
    return (
      <div className={`ad-infeed-card ${className}`} style={style}>
        {isProduction ? (
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '100%', ...style }}
            data-ad-client={adsenseId}
            data-ad-slot={adSlot}
            data-ad-format="fluid"
            data-ad-layout-key="-fb+5w+4e-db+86"
          />
        ) : (
          <div className="ad-placeholder-infeed">
            <span className="ad-label">SPONSORED</span>
            <div className="ad-infeed-body">
              <span className="ad-icon" style={{ fontSize: '2rem' }}>✨</span>
              <div className="ad-infeed-title">Recommended for Families</div>
              <p className="ad-infeed-sub">Google AdSense Native In-Feed Placement</p>
            </div>
            <span className="ad-infeed-badge">Promoted</span>
          </div>
        )}
      </div>
    );
  }

  // 3. In-Article Native Banner (inside educational content / lyrics)
  if (format === 'in-article') {
    return (
      <div className={`ad-inarticle-wrap ${className}`} style={style}>
        {isProduction ? (
          <ins
            className="adsbygoogle"
            style={{ display: 'block', textAlign: 'center', ...style }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client={adsenseId}
            data-ad-slot={adSlot}
          />
        ) : (
          <div className="ad-placeholder-box ad-placeholder-inarticle">
            <span className="ad-label">SPONSORED / QUẢNG CÁO</span>
            <div className="ad-inner-content">
              <span className="ad-icon">📰</span>
              <span className="ad-text">AdSense In-Article (Giữa bài viết nội dung)</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 4. Top-Leaderboard Banner (Above video player or under search bar)
  if (format === 'top-leaderboard') {
    return (
      <div className={`ad-top-leaderboard ${className}`} style={style}>
        {isProduction ? (
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', ...style }}
            data-ad-client={adsenseId}
            data-ad-slot={adSlot}
            data-ad-format="horizontal"
            data-full-width-responsive="true"
          />
        ) : (
          <div className="ad-placeholder-box ad-placeholder-top">
            <span className="ad-label">SPONSORED / QUẢNG CÁO</span>
            <div className="ad-inner-content">
              <span className="ad-icon">⭐</span>
              <span className="ad-text">Top Leaderboard Banner (Vị trí đầu trang - Tỉ lệ xem 95%)</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 5. Under-Player or Standard Bottom Banner
  return (
    <div className={`ad-container ${format === 'under-player' ? 'ad-under-player' : ''} ${className}`} style={style}>
      {isProduction ? (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', ...style }}
          data-ad-client={adsenseId}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
        />
      ) : (
        <div className="ad-placeholder-box">
          <span className="ad-label">SPONSORED / QUẢNG CÁO</span>
          <div className="ad-inner-content">
            <span className="ad-icon">📢</span>
            <span className="ad-text">
              {format === 'under-player'
                ? 'Under-Player Banner (Dưới Video Player - CTR cao nhất)'
                : 'Google AdSense Responsive Banner'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
