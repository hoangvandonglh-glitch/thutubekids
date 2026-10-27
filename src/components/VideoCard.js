import Link from 'next/link';

export default function VideoCard({ video, index = 0 }) {
  if (!video) return null;

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
