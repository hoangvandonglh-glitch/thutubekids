'use client';

import { useEffect, useRef } from 'react';

const SLOT_ENV_MAP = {
  'top-leaderboard': process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP,
  'under-player': process.env.NEXT_PUBLIC_ADSENSE_SLOT_UNDER_PLAYER,
  'sidebar': process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR,
  'in-feed': process.env.NEXT_PUBLIC_ADSENSE_SLOT_INFEED,
  'in-article': process.env.NEXT_PUBLIC_ADSENSE_SLOT_INARTICLE,
  'banner': process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER,
};

export default function AdBanner({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  format = 'banner', // 'top-leaderboard' | 'under-player' | 'sidebar' | 'in-feed' | 'in-article' | 'banner'
  style = {},
  className = '',
}) {
  const insRef = useRef(null);
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  // Lấy slot ID từ props hoặc env tương ứng
  const configuredSlot = adSlot || SLOT_ENV_MAP[format] || process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT;
  const isValidSlot = typeof configuredSlot === 'string' && configuredSlot.trim() !== '' && configuredSlot !== '1234567890';
  const isProduction = process.env.NODE_ENV === 'production' && Boolean(adsenseId) && adsenseId !== 'ca-pub-XXXXXXXXXXXXXXXX';

  useEffect(() => {
    // Chỉ kích hoạt push khi ở production và có AdSense ID
    if (!isProduction || !adsenseId) return;

    // Timeout nhỏ đảm bảo DOM đã tính toán kích thước chiều rộng/cao trước khi Google nạp quảng cáo
    const timer = setTimeout(() => {
      try {
        if (
          insRef.current &&
          !insRef.current.getAttribute('data-adsbygoogle-status') &&
          insRef.current.offsetWidth > 0
        ) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (err) {
        console.error('AdSense push error:', err);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [isProduction, adsenseId, configuredSlot]);

  // Nếu ở production nhưng chưa cấu hình Slot ID hợp lệ:
  // Ẩn vùng này đi để tránh hiển thị khoảng trống vô duyên hoặc lỗi 400 từ Google AdSense
  if (isProduction && !isValidSlot) {
    return null;
  }

  // 1. Sidebar Ad unit (300x250 Medium Rectangle)
  if (format === 'sidebar') {
    return (
      <div className={`ad-sidebar-wrap ${className}`} style={style}>
        {isProduction ? (
          <ins
            ref={insRef}
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minHeight: '250px', ...style }}
            data-ad-client={adsenseId}
            data-ad-slot={configuredSlot}
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
            {!isValidSlot && (
              <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                (Cần cấu hình NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR)
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  // 2. In-Feed Native Grid Ad unit (appears naturally inside the video grid)
  if (format === 'in-feed') {
    return (
      <div className={`ad-infeed-card ${className}`} style={{ minHeight: '280px', ...style }}>
        {isProduction ? (
          <ins
            ref={insRef}
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '100%', minHeight: '280px', ...style }}
            data-ad-client={adsenseId}
            data-ad-slot={configuredSlot}
            data-ad-format="rectangle"
            data-full-width-responsive="true"
          />
        ) : (
          <div className="ad-placeholder-infeed">
            <span className="ad-label">SPONSORED</span>
            <div className="ad-infeed-body">
              <span className="ad-icon" style={{ fontSize: '2rem' }}>✨</span>
              <div className="ad-infeed-title">Recommended for Families</div>
              <p className="ad-infeed-sub">Google AdSense Native In-Feed Placement</p>
              {!isValidSlot && (
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                  (Cần cấu hình NEXT_PUBLIC_ADSENSE_SLOT_INFEED)
                </span>
              )}
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
            ref={insRef}
            className="adsbygoogle"
            style={{ display: 'block', textAlign: 'center', minHeight: '90px', ...style }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client={adsenseId}
            data-ad-slot={configuredSlot}
          />
        ) : (
          <div className="ad-placeholder-box ad-placeholder-inarticle">
            <span className="ad-label">SPONSORED / QUẢNG CÁO</span>
            <div className="ad-inner-content">
              <span className="ad-icon">📰</span>
              <span className="ad-text">AdSense In-Article (Giữa bài viết nội dung)</span>
            </div>
            {!isValidSlot && (
              <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                (Cần cấu hình NEXT_PUBLIC_ADSENSE_SLOT_INARTICLE)
              </span>
            )}
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
            ref={insRef}
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minHeight: '90px', ...style }}
            data-ad-client={adsenseId}
            data-ad-slot={configuredSlot}
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
            {!isValidSlot && (
              <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                (Cần cấu hình NEXT_PUBLIC_ADSENSE_SLOT_TOP)
              </span>
            )}
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
          ref={insRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: format === 'under-player' ? '90px' : '60px', ...style }}
          data-ad-client={adsenseId}
          data-ad-slot={configuredSlot}
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
          {!isValidSlot && (
            <span style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '4px', display: 'block' }}>
              (Cần cấu hình {format === 'under-player' ? 'NEXT_PUBLIC_ADSENSE_SLOT_UNDER_PLAYER' : 'NEXT_PUBLIC_ADSENSE_SLOT_BANNER'})
            </span>
          )}
        </div>
      )}
    </div>
  );
}
